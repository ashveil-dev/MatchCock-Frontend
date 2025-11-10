import { FaCompressAlt } from "react-icons/fa";

interface IProps {
    tournament: any,
    exitModal: () => void
}

function DetailTournamentCard({
    tournament,
    exitModal
}: IProps) {
    if(tournament === undefined) return <div></div>

    return (
        < div id="tournament-card"
            className="w-full h-full flex flex-col shadow-lg border border-BlushPink/20 shadow-BlushPink/60"
        >
            <div className="flex flex-col grow-0 shrink-0 justify-between gap-4 bg-linear-to-r from-BlushPink to-fuchsia-600 px-6 py-5 text-white">
                <div className="flex w-full justify-between items-center">
                    <span className="text-xl font-bold ">{tournament.STAT_NM}</span>
                    <h2 className="text-lg md:text-2xl font-bold hidden md:block">
                        {tournament.TOURNAMENT_NM}
                    </h2>

                    <span>
                        <button
                            onClick={exitModal}
                            className="rounded-full flex items-center gap-2 bg-white/20 px-3 py-2 text-sm font-medium tracking-wide cursor-pointer shrink-0">
                            <span className="hidden md:block">창 닫기</span>
                            <span>
                                <FaCompressAlt />
                            </span>
                        </button>
                    </span>
                </div>

            </div>
            <article className="w-full flex flex-col md:flex-row grow overflow-y-scroll bg-gray-100 md:p-4 gap-2">
                <section className="w-full md:w-1/2 bg-white md:overflow-y-scroll">
                    <img
                        alt="포스터"
                        src={tournament.POSTER}
                        className="w-full object-cover"
                    />
                </section>
                <section className="w-full md:w-1/2 md:y-full flex flex-col p-6 bg-white rounded-2xl md:overflow-y-scroll shrink-0">
                    <dl className="w-full h-full flex flex-col md:max-h-[600px] grow shrink-0">
                        <div className="grid grid-cols-1 gap-2 sm:grid-cols-12 sm:gap-6 py-2 grow">
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

                        <div className="grid grid-cols-1 gap-2 sm:grid-cols-12 sm:gap-6 py-2 grow">
                            <dt className="sm:col-span-3 flex items-start gap-2 text-sm font-medium text-gray-500 mt-px">
                                <svg xmlns="http://www.w3.org/2000/svg" className="mt-0.5 h-4 w-4 flex-none" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M7 2h2v2h6V2h2v2h3a2 2 0 0 1 2 2v3H2V6a2 2 0 0 1 2-2h3V2zm15 8v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8h20z" />
                                </svg>
                                <span className="shrink-0">일시</span>
                            </dt>
                            <dd className="sm:col-span-9 text-gray-900">
                                <p className="font-medium">{tournament.TOUR_DATE}</p>
                                <p className="text-sm text-gray-500 mt-px">{tournament.ACCEPT_DATE_M}</p>
                            </dd>
                        </div>

                        <div className="grid grid-cols-1 gap-2 sm:grid-cols-12 sm:gap-6 py-2 grow">
                            <dt className="sm:col-span-3 flex items-start gap-2 text-sm font-medium text-gray-500 mt-px">
                                <svg xmlns="http://www.w3.org/2000/svg" className="mt-0.5 h-4 w-4 flex-none" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7zm0 9.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                                </svg>
                                <span className="shrink-0">장소</span>
                            </dt>
                            <dd className="sm:col-span-9 text-gray-900">
                                <div className="space-y-1 font-medium flex flex-col">
                                    <span>{tournament.TOUR_LOCATION}</span>
                                </div>
                            </dd>
                        </div>
                        <div className="grid grid-cols-1 gap-2 sm:grid-cols-12 sm:gap-6 py-2 grow">
                            <dt className="sm:col-span-3 flex items-start gap-2 text-sm font-medium text-gray-500 mt-px">
                                <svg xmlns="http://www.w3.org/2000/svg" className="mt-0.5 h-4 w-4 flex-none" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm1-5h-2v2h2V2zM3 11H1v2h2v-2zm20 0h-2v2h2v-2zM12 20h-2v2h2v-2z" />
                                </svg>
                                <span className="shrink-0">개회식</span>
                            </dt>
                            <dd className="sm:col-span-9 text-gray-900">
                                <p className="font-medium">{tournament.TOUR_SUPPORT}</p>
                            </dd>
                        </div>

                        <div className="grid grid-cols-1 gap-2 sm:grid-cols-12 sm:gap-6 py-2 grow">
                            <dt className="sm:col-span-3 flex items-start gap-2 text-sm font-medium text-gray-500 mt-px">
                                <svg xmlns="http://www.w3.org/2000/svg" className="mt-0.5 h-4 w-4 flex-none" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M3 3h18v2H3zM5 7h14v2H5zM7 11h10v2H7zM9 15h6v2H9z" />
                                </svg>
                                <span className="shrink-0">주최</span>
                            </dt>
                            <dd className="sm:col-span-9 text-gray-900">{tournament.TOUR_SPONSOR}</dd>
                        </div>

                        <div className="grid grid-cols-1 gap-2 sm:grid-cols-12 sm:gap-6 py-2 grow">
                            <dt className="sm:col-span-3 flex items-start gap-2 text-sm font-medium text-gray-500 mt-px">
                                <svg xmlns="http://www.w3.org/2000/svg" className="mt-0.5 h-4 w-4 flex-none" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5zm-9 9a9 9 0 0 1 18 0z" />
                                </svg>
                                <span className="shrink-0">담당자</span>
                            </dt>
                            <dd className="sm:col-span-9 text-gray-900">{tournament.TOUR_MANAGER}</dd>
                        </div>

                        <div className="grid grid-cols-1 gap-2 sm:grid-cols-12 sm:gap-6 py-2 grow">
                            <dt className="sm:col-span-3 flex items-start gap-2 text-sm font-medium text-gray-500 mt-px">
                                <svg xmlns="http://www.w3.org/2000/svg" className="mt-0.5 h-4 w-4 flex-none" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M4 4h16v6H4zM4 12h7v8H4zM13 12h7v8h-7z" />
                                </svg>
                                <span className="shrink-0">후원</span>
                            </dt>
                            <dd className="sm:col-span-9 text-gray-900">
                                <span className="mr-2 inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700">
                                    <p className="font-medium">{tournament.TOUR_SUPPORT}</p>
                                </span>
                            </dd>
                        </div>

                        <div className="grid grid-cols-1 gap-2 sm:grid-cols-12 sm:gap-6 py-2 grow">
                            <dt className="sm:col-span-3 flex items-start gap-2 text-sm font-medium text-gray-500 mt-px">
                                <svg xmlns="http://www.w3.org/2000/svg" className="mt-0.5 h-4 w-4 flex-none" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M7 5h10v2H7zM5 9h14v2H5zM7 13h10v2H7zM9 17h6v2H9z" />
                                </svg>
                                <span className="shrink-0">종목</span>
                            </dt>
                            <dd className="sm:col-span-9">
                                <div className="flex flex-wrap gap-2">
                                    <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700">혼합</span>
                                    <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">남자</span>
                                    <span className="inline-flex items-center rounded-full bg-pink-50 px-3 py-1 text-sm font-medium text-pink-700">여자</span>
                                </div>
                            </dd>
                        </div>
                    </dl>
                    <div className="flex flex-col gap-3  px-6 py-4 sm:flex-row sm:items-center sm:justify-center grow">
                        <a href={tournament.TM_OUTLINE_FILE_URL} target="_blank" className="inline-flex items-center justify-center rounded-xl border px-4 py-2 text-sm font-medium text-gray-700 hover:bg-white">
                            안내문 다운로드
                        </a>
                        <a href="#" className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500">
                            대회 선택하기
                        </a>
                    </div>
                </section>
            </article>

            {/* <div className="px-2 py-4 flex flex-col justify-between cursor-pointer">
                <img
                    src={TournamentThumbnail} alt="토너먼트 썸네일"
                    className="w-full h-full absolute cover top-0 left-0 px-2 py-4 opacity-50 blur-sm -z-10"
                />
                <h3 className="text-2xl  font-bold break-keep whitespace-normal leading-9 text-center">
                    제 8회 중랑구협회장기 <span className="text-nowrap">배드민턴 대회</span>
                </h3>
                <div className=" text-sm leading-6 font-medium text-center">
                    
                    <p>
                        <time dateTime="2025-10-17">2025.10.17(금)</time>
                        ~
                        <time dateTime="2025-10-31">2025.10월.31(금)</time>
                        <strong className="text-red-600"> (접수)</strong>
                    </p>
                    <p>
                        <time dateTime="2025-11-08">2025.11.8(토) </time>
                        ~
                        <time dateTime="2025-11-09">2025.11.9(일) </time>
                        <strong className="text-red-600">(진행)</strong>
                    </p>

                    <p className="mt-5">
                        <address>묵동다목적체육관</address>
                        <address>신내다목적체육관</address>
                    </p>
                </div>
                <div className="flex w-full justify-around  font-bold">

                    <button className="shadow-lg p-4 rounded-3xl bg-black text-white  ">
                        자세히 보기
                    </button>
                    <button className=" shadow-lg p-4 rounded-3xl bg-white text-black/70">
                        사이트 신청하기
                    </button>

                </div>
            </div> */}
            {/* 예정 from-BlushPink to-fuchsia-600
                        진행 from-RoyalAmethyst to-sky-500
                        종료 from
                    

                 <div className="flex items-center justify-between gap-4 bg-linear-to-r from-sky-500 to-RoyalAmethyst px-6 py-5 text-white">
                        <h2 className="text-lg font-semibold">진행</h2>
                        <div className="rounded-full flex items-center gap-2 bg-white/20 px-3 py-2 text-sm font-medium tracking-wide">
                            <span>포스터 보기</span>
                            <span>
                                <FaUpRightAndDownLeftFromCenter />
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center justify-between gap-4 bg-linear-to-r from-blue-700 to-cyan-800 px-6 py-5 text-white">
                        <h2 className="text-lg font-semibold">마감</h2>
                        <div className="rounded-full flex items-center gap-2 bg-white/20 px-3 py-2 text-sm font-medium tracking-wide">
                            <span>포스터 보기</span>
                            <span>
                                <FaUpRightAndDownLeftFromCenter />
                            </span>
                        </div>
                    </div> 
        */}
        </div >
    )
}

export default DetailTournamentCard;