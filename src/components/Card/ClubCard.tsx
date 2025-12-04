import { useRef, useState } from "react";
import clsx from "clsx";
import type { IMatchData } from "@type/tournament"

interface IClubCard {
    club: IMatchData[]
}

export default function ClubCard({
    club : clubData
}: IClubCard) {
    const ref = useRef<HTMLDivElement>(null)
    const [isFold, setIsFold] = useState(true);
    const onClubCardClick = () => {
        setIsFold(_fold => !_fold)
    }

    return (
        <div
            onClick={onClubCardClick}
            className={clsx("max-w-dvw overflow-hidden border border-neutral-200 rounded-2xl px-4 shadow-sm hover:shadow-md transition-all ease-in duration-200",
                !isFold ? "py-4" : "pt-4 pb-0"
            )}>
            <div className="flex justify-between items-center cursor-pointer mb-4">
                <div id="left">
                    <h2 className="text-xl font-bold">{clubData[0].CLUB_NM1}</h2>
                </div>
                <div id="right" className="w-80 flex justify-">
                    <div className="flex grid-cols-3 gap-2">
                        <span className="bg-RoyalAmethyst col-span-1 text-white rounded-2xl px-3 py-1">Total : {clubData.length}</span>
                        <span className="bg-FairyBlue  col-span-1 text-white rounded-2xl px-3 py-1">Select : {2}</span>
                        <span className="bg-BlushPink col-span-1 text-white rounded-2xl px-3 py-1">UnSelect : {3}</span>
                    </div>
                </div>
            </div>
            <div
                ref={ref}
                style={{
                    height: !isFold ? ref.current?.scrollHeight : 0,
                    borderWidth : !isFold ? 1 : 0,
                    transition: "height 0.3s ease"
                }}
                onClick={(e) => e.stopPropagation()}
                className={"flex flex-col rounded-xl ease-in-out duration-300 overflow-hidden border border-neutral-200"}
            >
                <div className="grid grid-cols-5 p-3 cursor-pointer text-center font-semibold border-b-gray-200 bg-RoyalAmethyst/80 text-white">
                    <span className="">
                        <input type="checkbox" />
                    </span>
                    <span >
                        나이
                    </span>
                    <span >
                        등급
                    </span>
                    <span >
                        복식 유형
                    </span>
                    <span>
                        출전 선수
                    </span>
                </div>
                {clubData.map(team => (
                    <div
                        key={team.ENTRY_ID}
                        className="grid grid-cols-5 p-3 hover:bg-neutral-100 cursor-pointer text-center bg-black/70 text-white"
                    >
                        <span>
                            <input type="checkbox" />
                        </span>
                        <span>
                            {team.AGE}대
                        </span>
                        <span>
                            {team.GRADE}조
                        </span>
                        <span>
                            {team.GENDER === "A" ? "혼복" :
                                team.GENDER === "M" ? "남복" : "여복"
                            }
                        </span>
                        <span>
                            {team.PLAYER_NM1} & {team.PLAYER_NM2}
                        </span>
                    </div>
                ))}
            </div>
        </div >
    )
}