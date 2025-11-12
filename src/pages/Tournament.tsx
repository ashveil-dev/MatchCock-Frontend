/*
* 1. 상위 폴더 alias 설정 변경하기 o 
* 2. 기본 폰트 Pretendard르 변경하기
*/

import axios from "axios"
import type { ITournamentData } from "@type/tournament"

import Header from "@common/Header";
import { useEffect, useRef, useState } from "react";
import { IoSearch } from "react-icons/io5";
import NavigationBar from "@common/NavigationBar";
import Modal from "react-modal";
import DetailTournamentCard from "@components/Card/DetailTournamentCard"
import SummaryTournamentCard from "@components/Card/SummaryTournamentCard";

import AlignPanel from "@components/Panel/Align"
import FilterPanel from "@components/Panel/Filter"

const ax = axios.create({
    baseURL: "https://sponet.co.kr/php/bm/",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
})

function Tournament() {
    const [tournament, setTournament] = useState<ITournamentData | undefined>(undefined);
    const [tournamentList, setTournamentList] = useState<ITournamentData[]>([])
    const optionRef = useRef<HTMLDivElement | null>(null);
    const [isFilterPanelOpen, setIsFilterPanelOpen] = useState(false);
    const [isAlignPanelOpen, setIsAlignPanelOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onDetailModalOpen = () => setIsModalOpen(true);
    const onDetailModalClose = () => setIsModalOpen(false);

    useEffect(() => {
        async function fetchTournamentList() {
            try {
                const response = await ax.post("mobile_tm_list.php", {
                    DATA: JSON.stringify({
                        pageStart: 0,
                        pageLimit: 10
                    }),
                })

                setTournamentList(response.data.data_list)
            } catch (e) {
                setTournamentList([]);
            }
        }

        fetchTournamentList();
    }, [])

    return (
        <div className="w-full h-dvh flex flex-col pb-8" style={{ overflowY: isModalOpen ? "hidden" : "scroll" }}>
            <Modal
                isOpen={isModalOpen}
                className="w-full h-full outline-none flex justify-center items-center p-4 md:p-8"
            >
                <div className="md:w-4/5 h-full bg-white border border-BlushPink/20 shadow-lg shadow-RoyalAmethyst/60 rounded-3xl flex gap-4 overflow-hidden">
                    <DetailTournamentCard tournament={tournament} exitModal={onDetailModalClose} />

                </div>
            </Modal>

            <Header />
            <main className="w-full flex flex-col md:items-center">
                <div id="container" className="w-full flex flex-col max-w-6xl px-6 md:px-2">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="w-full">
                            <div className="w-full flex justify-center md:justify-start mb-4">
                                <NavigationBar />
                            </div>
                            <h1 id="title" className="w-full text-3xl md:text-4xl  font-bold mb-4 text-center md:text-left">
                                <span className="text-BlushPink">대회</span>를 찾고 계신가요?
                            </h1>
                            <div id="tip" className="flex flex-col md:flex-row w-full justify-center md:justify-start items-start md:gap-4 mb-2 md:mb-8 text-center md:text-left">
                                <div className="font-semibold text-black hidden md:block">
                                    <span>Tip</span>
                                </div>
                                <div className="grow w-full font-semibold text-sx text-neutral-500">
                                    <p>찾는 배드민턴 대회가 있으신가요?</p>
                                    <p>검색이나 필터를 통해 더 쉽고 빠르게 찾아보세요!</p>
                                </div>
                                <div id="option" className="flex w-full md:w-auto mt-4 md:mt-0 justify-center items-center gap-3 mb-2 md:mb-0 relative" ref={optionRef}>
                                    <div className="flex items-center">
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
                                        <div className="w-40 relative ">

                                            <input type="text" placeholder="검색하기"
                                                className="w-40 px-2 pr-7 py-2 border-b border-b-gray-300 outline-none"
                                            />
                                            <button className="absolute right-0 bottom-0 -translate-y-1/2 cursor-pointer">
                                                <IoSearch className="w-6 h-6" />
                                            </button>
                                        </div>
                                    </div>

                                    <AlignPanel isOpen={isAlignPanelOpen} onClose={() => setIsAlignPanelOpen(false)} />
                                    <FilterPanel isOpen={isFilterPanelOpen} onClose={() => setIsFilterPanelOpen(false)} />

                                </div>
                            </div>
                        </div>

                    </div>
                    <article className="w-full flex gap-4 flex-wrap">
                        {
                            tournamentList.length !== 0 && tournamentList.map(t => (
                                <div key={t.TOURNAMENT_ID}
                                    className="w-80 h-fit grow"
                                    onClick={() => setTournament(t)}
                                >
                                    <SummaryTournamentCard
                                        tournament={t}
                                        onDetailClick={onDetailModalOpen}
                                    />
                                </div>
                            ))
                        }
                    </article>
                </div>
            </main>
            <footer>

            </footer>
        </div >
    )
}

export default Tournament;


