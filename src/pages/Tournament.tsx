/*
* 1. 상위 폴더 alias 설정 변경하기 o 
* 2. 기본 폰트 Pretendard르 변경하기
*/

import Header from "@common/Header";
import { BsArrowLeftSquare, BsArrowRightSquare } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
import NavigationBar from "@common/NavigationBar";
import Modal from "react-modal";
import DetailTournamentCard from "@components/Card/DetailTournamentCard"
import SummaryTournamentCard from "@components/Card/SummaryTournamentCard";

function Tournament() {
    const optionRef = useRef<HTMLDivElement | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isOptionOutScreen, setIsOptionOutScreen] = useState(false)

    const onDetailModalOpen = () => setIsModalOpen(true);
    const onDetailModalClose = () => setIsModalOpen(false);

    useEffect(() => {
        if (optionRef.current === null)
            return;

        new IntersectionObserver(([entry]) => {
            if (optionRef.current) {
                if (entry.isIntersecting) {
                    setIsOptionOutScreen(false);
                } else {
                    setIsOptionOutScreen(true)
                }
            }
        }).observe(optionRef.current)
    }, [])

    return (
        <div className="w-full h-dvh flex flex-col" style={{ overflowY: isModalOpen ? "hidden" : "scroll" }}>
            <Modal
                isOpen={isModalOpen}
                className="w-full h-full outline-none flex justify-center items-center p-8"
            >
                <div className="w-full h-full bg-white border border-BlushPink/20 shadow-lg shadow-RoyalAmethyst/60 rounded-3xl flex gap-4 overflow-hidden">
                    <DetailTournamentCard exitModal={onDetailModalClose}/>

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

                                <div id="option" className="flex w-full md:w-auto mt-4 md:mt-0 justify-center gap-3 mb-2 md:mb-0" ref={optionRef}>
                                    <div className="flex">
                                        <button className="w-10 h-10 cursor-pointer rounded-sm text-xm font-medium text-neutral-500 hover:text-black hover:font-bold">
                                            정렬
                                        </button>
                                        <button className="w-10 h-10 cursor-pointer rounded-sm text-xm font-medium text-neutral-500 hover:text-black hover:font-bold">
                                            필터
                                        </button>
                                    </div>

                                    <div className="flex gap-4">
                                        <button className="w-10 h-10 cursor-pointer">
                                            <BsArrowLeftSquare className="w-full h-full opacity-40 hover:opacity-80" />
                                        </button>
                                        <button className="w-10 h-10 cursor-pointer">
                                            <BsArrowRightSquare className="w-full h-full opacity-40 hover:opacity-80" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <article className="w-full flex gap-4 flex-wrap">
                        <div className="w-80 h-fit grow">
                            <SummaryTournamentCard onDetailClick={onDetailModalOpen}/>
                        </div>
                        <div className="w-80 h-fit grow">
                            <SummaryTournamentCard onDetailClick={onDetailModalOpen}/>
                        </div>
                        <div className="w-80 h-fit grow">
                            <SummaryTournamentCard onDetailClick={onDetailModalOpen}/>
                        </div>
                        <div className="w-80 h-fit grow">
                            <SummaryTournamentCard onDetailClick={onDetailModalOpen}/>
                        </div>
                        <div className="w-80 h-fit grow">
                            <SummaryTournamentCard onDetailClick={onDetailModalOpen}/>
                        </div>
                        <div className="w-80 h-fit grow">
                            <SummaryTournamentCard onDetailClick={onDetailModalOpen}/>
                        </div>
                        <div className="w-80 h-fit grow">
                            <SummaryTournamentCard onDetailClick={onDetailModalOpen}/>
                        </div>
                        <div className="w-80 h-fit grow">
                            
                        </div>
                        <div className="w-80 h-fit grow">
                            
                        </div>
                        <div className="w-80 h-fit grow">
                            
                        </div>
                       
                    </article>
                </div>
            </main>
            <footer>

            </footer>
        </div >
    )
}

export default Tournament;