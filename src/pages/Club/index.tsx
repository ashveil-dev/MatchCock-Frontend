import Header from "@common/Header";
import NavigationBar from "@common/NavigationBar";
import { useQuery } from "@tanstack/react-query";
import { fetchTournament } from "@apis";
import { AiFillAppstore } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
import { TbInfinity } from "react-icons/tb";
import useTournamentStore from "@stores/useTournamentStore";
import ClubCard from "@components/Card/ClubCard";

export default function Club() {
    const { tournamentId } = useTournamentStore();
    const { isLoading, isFetching, data } = useQuery({
        queryKey: ["clubList", tournamentId],
        queryFn: () => fetchTournament({ tournamentId })
    })
    return (
        <div className="w-full flex flex-col min-h-dvh">
            <Header />
            <main className="w-full h-full grow shrink-0 flex flex-col md:items-center">
                <div id="container" className="w-full max-w-[1700px] min-h-full flex flex-col px-4 grow">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="w-full">
                            <div className="w-full flex justify-center md:justify-start mb-4">
                                <NavigationBar current="club" />
                            </div>
                            <h1 id="title" className="w-full text-3xl md:text-4xl  font-bold mb-4 text-center md:text-left">
                                원하는 <span className="text-BlushPink">클럽</span>을 선택해주세요
                            </h1>
                            <div id="tip" className="flex flex-col md:flex-row w-full justify-center md:justify-start items-start md:gap-4 mb-2 md:mb-4 text-center md:text-left">
                                <div className="font-semibold text-black hidden md:block">
                                    <span>Tip</span>
                                </div>
                                <div className="grow w-full font-semibold text-sx text-neutral-500">
                                    <p>대회에 출전한 클럽목록을 보고, 원하는 클럽을 선택해보세요</p>
                                    <p>클럽명을 검색하여 더 빠르게 찾을 수도 있습니다!</p>
                                </div>

                            </div>
                            <div className="w-full flex flex-wrap justify-center md:justify-between mt-4 md:mb-4">
                                <div className="flex gap-3 justify-end shrink-0">
                                    <button
                                        className="flex items-center gap-2 rounded-2xl shadow-2xl bg-black text-white border border-neutral-100 p-3 md:px-4 md:py-0 cursor-pointer">
                                        <AiFillAppstore className="w-6 h-full" />
                                        <span>페이지</span>
                                    </button>
                                    <button
                                        className="flex items-center gap-2 rounded-2xl shadow-2xl border border-neutral-100 px-4 text-neutral-400 cursor-pointer">
                                        <TbInfinity className="w-6 h-full" />
                                        <span>무한 스크롤</span>
                                    </button>
                                </div>

                                <div id="option" className="flex mt-4 md:mt-0 justify-center items-center gap-3 mb-2 md:mb-0 relative shrink-0">
                                    <div className="flex items-center">
                                        <div className="flex shrink-0">
                                            <button
                                                className="w-10 h-10 cursor-pointer rounded-sm text-xm font-medium text-neutral-500 hover:text-black hover:font-bold">
                                                정렬
                                            </button>
                                            <button
                                                className="w-10 h-10 cursor-pointer rounded-sm text-xm font-medium text-neutral-500 hover:text-black hover:font-bold">
                                                필터
                                            </button>
                                        </div>

                                        <div className="relative shrink-0">
                                            <form >
                                                <input name="searchText" type="text" placeholder="검색하기"
                                                    className="w-40 px-2 pr-7 py-2 border-b border-b-gray-300 outline-none"
                                                />
                                                <button type="submit"
                                                    className="absolute right-0 bottom-0 -translate-y-1/2 cursor-pointer"
                                                >
                                                    <IoSearch className="w-6 h-6" />
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="clubList" className="flex flex-col gap-4">
                        {data && data.data?.tournament.map(club => (
                            <ClubCard club={club} />
                        ))}

                    </div>
                </div>
            </main >
        </div >
    )
}