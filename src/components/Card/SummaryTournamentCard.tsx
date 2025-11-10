import { FaUpRightAndDownLeftFromCenter } from "react-icons/fa6";
import type { ITournamentData } from "@type/tournament"

interface IProps {
    tournament: ITournamentData | undefined
    onDetailClick: () => void
}

function SummaryTournamentCard({
    tournament,
    onDetailClick
}: IProps) {
    if(tournament === undefined) return <div></div>

    return (
        <article
            id="tournament-card"
            className="w-full h-full shadow-lg border border-BlushPink/70 shadow-BlushPink/60 rounded-2xl overflow-hidden"
        >
            <section>
                <div className="flex items-center justify-between gap-4 bg-linear-to-r from-BlushPink to-fuchsia-600 px-6 py-5 text-white">
                    <h2 className="text-xl font-semibold ">{tournament.STAT_NM}</h2>
                    <button
                        onClick={onDetailClick}
                        className="rounded-full flex items-center gap-3 bg-white/20 px-3 py-2 text-sm font-medium tracking-wide cursor-pointer">
                        <span>자세히 보기</span>
                        <span>
                            <FaUpRightAndDownLeftFromCenter />
                        </span>
                    </button>
                </div>
            </section>
            <section className="w-full p-4 py-3">
                <dl>
                    <div className="grid grid-cols-1 gap-2 py-4 sm:grid-cols-12 sm:gap-6">
                        <dt className="sm:col-span-3 flex items-start gap-2 text-sm font-medium text-gray-500 mt-px">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 flex-none" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M4 6h16v2H4zM4 11h16v2H4zM4 16h10v2H4z" />
                            </svg>
                            <span className="shrink-0">대회명</span>
                        </dt>
                        <dd className="sm:col-span-9 text-base font-semibold text-gray-900 text-wrap break-keep">
                            {tournament.TOURNAMENT_NM}
                        </dd>
                    </div>
                    <div className="grid grid-cols-1 gap-2 py-4 sm:grid-cols-12 sm:gap-6">
                        <dt className="sm:col-span-3 flex items-start gap-2 text-sm font-medium text-gray-500 mt-px">
                            <svg xmlns="http://www.w3.org/2000/svg" className="mt-0.5 h-4 w-4 flex-none" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M7 2h2v2h6V2h2v2h3a2 2 0 0 1 2 2v3H2V6a2 2 0 0 1 2-2h3V2zm15 8v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8h20z" />
                            </svg>
                            <span className="shrink-0 text-right">일시</span>
                        </dt>
                        <dd className="sm:col-span-9 text-gray-900">
                            <p className="text-base font-semibold">{tournament.TOUR_DATE_FROM} ~ {tournament.TOUR_DATE_TO}</p>
                            <p className="text-sm text-gray-500 mt-px">{tournament.ACCEPT_DATE}</p>
                        </dd>
                    </div>
                    <div className="grid grid-cols-1 gap-2 py-4 sm:grid-cols-12 sm:gap-6">
                        <dt className="sm:col-span-3 flex items-start gap-2 text-sm font-medium text-gray-500 mt-px">
                            <svg xmlns="http://www.w3.org/2000/svg" className="mt-0.5 h-4 w-4 flex-none" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7zm0 9.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                            </svg>
                            <span className="shrink-0">장소</span>
                        </dt>
                        <dd className="sm:col-span-9 text-gray-900">
                            <div className="font-semibold flex flex-col break-keep">
                                <span>{tournament.TOUR_LOCATION}</span>
                            </div>
                        </dd>
                    </div>

                </dl>
            </section>
        </article>
    )
}

export default SummaryTournamentCard