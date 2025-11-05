/*
* 1. 상위 폴더 alias 설정 변경하기 o 
* 2. 기본 폰트 Pretendard르 변경하기
*/

import Header from "@common/Header";
import FloatMenu from "@common/FloatMenu";
import TournamentCard from "@common/TournamentCard";
import { BsArrowLeftSquare, BsArrowRightSquare } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";

function Tournament() {
    const optionRef = useRef<HTMLDivElement>(undefined);
    const [isOptionOutScreen, setIsOptionOutScreen] = useState(false)

    useEffect(() => {
        if (optionRef.current === undefined)
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
        <div className="w-full h-dvh flex flex-col">
            <Header />
            <main className="w-full flex flex-col md:items-center">
                <div id="container" className="w-full flex flex-col max-w-3xl px-6 md:px-2">
                    <div className="flex justify-between items-center">
                        <div className="">
                            <h1 id="title" className="w-full text-3xl md:text-4xl  font-bold mb-4 text-center md:text-left">
                                <span className="text-BlushPink">대회</span>를 찾고 계신가요?
                            </h1>
                            <div id="tip" className="flex w-full justify-center md:justify-start items-start md:gap-4 mb-8 text-center md:text-left">
                                <div className="font-semibold text-black hidden md:block">
                                    <span>Tip</span>
                                </div>
                                <div className=" font-semibold text-sx text-neutral-500">
                                    <p>찾는 배드민턴 대회가 있으신가요?</p>
                                    <p>검색이나 필터를 통해 더 쉽고 빠르게 찾아보세요!</p>
                                </div>
                            </div>
                        </div>
                        {isOptionOutScreen || <div id="option" className="flex gap-2" ref={optionRef}>
                            <div>
                                <button className="w-10 h-10 cursor-pointer rounded-sm text-xm font-medium text-neutral-500 hover:text-black">
                                    정렬
                                </button>
                                <button className="w-10 h-10 cursor-pointer rounded-sm text-xm font-medium text-neutral-500 hover:text-black">
                                    필터
                                </button>
                            </div>

                            <div className="flex gap-2">
                                <button className="w-10 h-10 cursor-pointer">
                                    <BsArrowLeftSquare className="w-full h-full opacity-40 hover:opacity-80" />
                                </button>
                                <button className="w-10 h-10 cursor-pointer">
                                    <BsArrowRightSquare className="w-full h-full opacity-40 hover:opacity-80" />
                                </button>
                            </div>
                        </div>}
                    </div>


                    <article className="w-full flex gap-4 flex-wrap justify-between">
                        <div className="w-80 h-96">
                            <TournamentCard />
                        </div>
                        <div className="w-80 h-96">
                            <TournamentCard />
                        </div>
                        <div className="w-80 h-96">
                            <TournamentCard />
                        </div>
                        <div className="w-80 h-96">
                            <TournamentCard />
                        </div>
                        <div className="w-80 h-96">
                            <TournamentCard />
                        </div>
                        <div className="w-80 h-96">
                            <TournamentCard />
                        </div>

                        <div className="w-80 h-96">
                            <TournamentCard />
                        </div>
                    </article>
                </div>


                <FloatMenu />
            </main>
            <footer>

            </footer>
        </div >
    )
}

export default Tournament;