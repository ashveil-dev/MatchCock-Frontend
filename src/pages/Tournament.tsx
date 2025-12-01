import Modal from "react-modal";
import { IoSearch } from "react-icons/io5";
import { TbInfinity } from "react-icons/tb";
import { AiOutlineOrderedList } from "react-icons/ai";
import { RiScrollToBottomLine, RiScrollToBottomFill } from "react-icons/ri";
import { AiFillAppstore, AiOutlineAppstore } from "react-icons/ai";
import { Fragment, useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
import Spinner from "@assets/images/Spinner.gif"

import { fetchTournamentList } from "@apis";
import Header from "@common/Header";
import NavigationBar from "@common/NavigationBar";
import DetailTournamentCard from "@components/Card/DetailTournamentCard"
import SummaryTournamentCard from "@components/Card/SummaryTournamentCard";
import AlignPanel from "@components/Panel/Align"
import FilterPanel from "@components/Panel/Filter"
import type { ITournamentData } from "@type/tournament"
import Pagenation from "@components/Pagenation";

function Tournament() {
    const optionRef = useRef<HTMLDivElement | null>(null);
    const [type, setType] = useState<"page" | "infinite">("page")
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [search, setSearch] = useState<string>("")
    const [stateFilter,] = useState<string[]>([]);
    const [dateFilter,] = useState<{
        from?: Date,
        to?: Date
    } | undefined>({})
    const [order,] = useState<{
        [key: string]: "asc" | "desc"
    }>({

    })

    const [tournament, setTournament] = useState<ITournamentData | undefined>(undefined);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [isAlignPanelOpen, setIsAlignPanelOpen] = useState(false);
    const [isFilterPanelOpen, setIsFilterPanelOpen] = useState(false);

    const onDetailModalOpen = () => setIsModalOpen(true);
    const onDetailModalClose = () => setIsModalOpen(false);

    const onTypeClicked = (_type: "page" | "infinite") => () => {
        if (_type !== type) {
            setType(_type);
        }
    }

    const pageMove = (_page: number) => () => {
        setPageNumber(_page);
    }

    const onSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget)
        const searchText = formData.get("searchText") as string

        if (searchText) setSearch(searchText);
    }

    const stableQueryParams = useMemo(() => ({
        type, pageNumber,
        search, stateFilter, dateFilter, order
    }), [
        type, pageNumber, search,
        JSON.stringify(stateFilter),
        JSON.stringify(dateFilter),
        JSON.stringify(order),
    ]);

    const { isLoading: isPageLoading, isFetching: isPageFetching, data: pageData } = useQuery({
        queryKey: [
            "tournamentList",
            stableQueryParams
        ],
        queryFn: () => fetchTournamentList({
            type, pageNumber,
            search, stateFilter, dateFilter,
            order
        }),

        gcTime: 1000 * 60 * 5,
    })

    const stableInfiniteQueryParams = useMemo(() => ({
        type, search,
        stateFilter, dateFilter,
        order
    }), [
        type, pageNumber, search,
        JSON.stringify(stateFilter),
        JSON.stringify(dateFilter),
        JSON.stringify(order),
    ]);

    const { isLoading: isInfiniteLoading, isFetching: isInfiniteFetching, data: infiniteData, fetchNextPage, hasNextPage } = useInfiniteQuery({
        queryKey: [
            "tournamentList",
            stableInfiniteQueryParams
        ],
        queryFn: ({ pageParam = 0 }) => fetchTournamentList({ ...stableInfiniteQueryParams, cursor: pageParam }),
        initialPageParam: 0,
        getNextPageParam: (lastPage) => {
            return lastPage.data?.nextCursor
        },
        enabled: type === "infinite"
    })

    const bottomRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !isInfiniteLoading && !isInfiniteFetching) {
                    fetchNextPage()
                }
            },
            { threshold: 0 }
        )

        if (bottomRef.current) observer.observe(bottomRef.current);
        return () => observer.disconnect();
    }, [fetchNextPage, isInfiniteFetching, isInfiniteLoading])

    return (
        <div className="w-full min-h-dvh flex flex-col" style={{ overflowY: isModalOpen ? "hidden" : "scroll" }}>
            <Modal
                isOpen={isModalOpen}
                className="w-full h-full outline-none flex justify-center items-center py-10 md:py-10 px-4 md:px-8"
            >
                <div className="max-w-4xl max-h-full bg-white border border-BlushPink/20 shadow-lg shadow-RoyalAmethyst/60 rounded-3xl flex gap-4 overflow-y-scroll">
                    <DetailTournamentCard tournament={tournament} exitModal={onDetailModalClose} />

                </div>
            </Modal>

            <Header />
            <main className="w-full h-full grow shrink-0 flex flex-col md:items-center">
                <div id="container" className="w-full max-w-[1700px] min-h-full flex flex-col px-4  grow">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="w-full">
                            <div className="w-full flex justify-center md:justify-start mb-4">
                                <NavigationBar />
                            </div>
                            <h1 id="title" className="w-full text-3xl md:text-4xl  font-bold mb-4 text-center md:text-left">
                                <span className="text-BlushPink">대회</span>를 찾고 계신가요?
                            </h1>
                            <div id="tip" className="flex flex-col md:flex-row w-full justify-center md:justify-start items-start md:gap-4 mb-2 md:mb-4 text-center md:text-left">
                                <div className="font-semibold text-black hidden md:block">
                                    <span>Tip</span>
                                </div>
                                <div className="grow w-full font-semibold text-sx text-neutral-500">
                                    <p>찾는 배드민턴 대회가 있으신가요?</p>
                                    <p>검색이나 필터를 통해 더 쉽고 빠르게 찾아보세요!</p>
                                </div>

                            </div>
                            <div className="w-full flex flex-wrap justify-center md:justify-between mt-4 md:mb-4">
                                <div className="flex gap-3 justify-end shrink-0">
                                    {type === "page"
                                        ? <button
                                            onClick={onTypeClicked("page")}
                                            className="flex items-center gap-2 rounded-2xl shadow-2xl bg-black text-white border border-neutral-100 p-3 md:px-4 md:py-0 cursor-pointer">
                                            <AiFillAppstore className="w-6 h-full" />
                                            <span>페이지</span>
                                        </button>
                                        : <button
                                            onClick={onTypeClicked("page")}
                                            className="flex items-center gap-2 rounded-2xl shadow-2xl border border-neutral-100 p-3 md:px-4 md:py-0  text-neutral-400 cursor-pointer">
                                            <AiFillAppstore className="w-6 h-full" />
                                            <span>페이지</span>
                                        </button>
                                    }

                                    {
                                        type === "infinite"
                                            ? <button
                                                onClick={onTypeClicked("infinite")}
                                                className="flex items-center gap-2 rounded-2xl shadow-2xl bg-black text-white border border-neutral-100 px-4 cursor-pointer">
                                                <TbInfinity className="w-6 h-full" />
                                                <span>무한 스크롤</span>
                                            </button>
                                            : <button
                                                onClick={onTypeClicked("infinite")}
                                                className="flex items-center gap-2 rounded-2xl shadow-2xl border border-neutral-100 px-4 text-neutral-400 cursor-pointer">
                                                <TbInfinity className="w-6 h-full" />
                                                <span>무한 스크롤</span>
                                            </button>
                                    }


                                </div>

                                <div id="option" className="flex mt-4 md:mt-0 justify-center items-center gap-3 mb-2 md:mb-0 relative shrink-0" ref={optionRef}>
                                    <div className="flex items-center">
                                        <div className="flex shrink-0">
                                            <button
                                                onClick={() => setIsAlignPanelOpen(true)}
                                                className="w-10 h-10 cursor-pointer rounded-sm text-xm font-medium text-neutral-500 hover:text-black hover:font-bold">
                                                정렬
                                            </button>
                                            <button
                                                onClick={() => setIsFilterPanelOpen(true)}
                                                className="w-10 h-10 cursor-pointer rounded-sm text-xm font-medium text-neutral-500 hover:text-black hover:font-bold">
                                                필터
                                            </button>
                                        </div>

                                        <div className="relative shrink-0">
                                            <form onSubmit={onSearchSubmit}>
                                                <input name="searchText" type="text" placeholder="검색하기"
                                                    className="w-40 px-2 pr-7 py-2 border-b border-b-gray-300 outline-none"
                                                />
                                                <button type="submit"
                                                    className="absolute right-0 bottom-0 -translate-y-1/2 cursor-pointer"
                                                >
                                                    <IoSearch className="w-6 h-6" />
                                                </button>
                                            </form>
                                            <AlignPanel isOpen={isAlignPanelOpen} onClose={() => setIsAlignPanelOpen(false)} />
                                            <FilterPanel isOpen={isFilterPanelOpen} onClose={() => setIsFilterPanelOpen(false)} />
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                    {
                        ((type === "page" && (isPageLoading)) || (type === "infinite") && (isInfiniteLoading)) ?
                            (<div className="w-full h-full flex items-center justify-center grow">
                                <img alt="loading" src={Spinner} />
                            </div>) :
                            (<article className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-content-center py-5">
                                {
                                    type === "page" &&
                                    pageData?.data?.tournamentList.map(tournament => (
                                        <div key={tournament.TOURNAMENT_ID}
                                            className="w-full h-auto "
                                            onClick={() => setTournament(tournament)}
                                        >
                                            <SummaryTournamentCard
                                                tournament={tournament}
                                                onDetailClick={onDetailModalOpen}
                                            />
                                        </div>
                                    ))
                                }
                                {
                                    type === "infinite" && infiniteData?.pages.map(
                                        (page, i) =>
                                            <Fragment key={i}>
                                                {page.data?.tournamentList.map(tournament => (
                                                    <div key={tournament.TOURNAMENT_ID}
                                                        className="w-full h-auto"
                                                        onClick={() => setTournament(tournament)}
                                                    >
                                                        <SummaryTournamentCard
                                                            tournament={tournament}
                                                            onDetailClick={onDetailModalOpen}
                                                        />
                                                    </div>
                                                ))}

                                            </Fragment>
                                    )
                                }

                            </article>)
                    }
                </div>
            </main>
            <footer className="">
                <div>
                    {(type === "page" && pageData !== undefined && pageData.data?.tournamentList.length !== 0)
                        && (
                            <div className="w-full pb-8">
                                <Pagenation
                                    pageNumber={pageNumber}
                                    lastPageNumber={pageData.data?.lastPage}
                                    pageMove={pageMove}
                                />
                            </div>
                        )
                    }

                </div>
                <div className="">
                    {
                        (type === "infinite" && infiniteData !== undefined && infiniteData.pages.length !== 0)
                        && (
                            <div ref={bottomRef} className="w-full min-h-1 flex justify-center items-center">
                                {!hasNextPage && "모든 대회목록을 나열하였습니다."}
                            </div>

                        )
                    }
                </div>
            </footer>
        </div >
    )
}

export default Tournament;


