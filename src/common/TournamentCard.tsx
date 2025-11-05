import TournamentThumbnail from "@assets/images/TournamentThumbnail2.jpg"

function TournamentCard() {
    return (
        <article
            id="tournament-card"
            className="w-full h-full flex relative text-right rounded-2xl shadow-lg border border-BlushPink/20 shadow-BlushPink/60 px-2 py-4"
        >
            <div className="px-2 py-4 flex flex-col justify-between cursor-pointer">
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
            </div>
        </article>
    )
}

export default TournamentCard;