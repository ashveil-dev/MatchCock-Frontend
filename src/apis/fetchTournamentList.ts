import axios from "@apis";
import type { ITournamentData } from "@type/tournament";

async function fetchTournamentList() : Promise<ITournamentData[] | string> {
    try {
        const response = await axios.post("mobile_tm_list.php", {
            DATA: JSON.stringify({
                pageStart: 0,
                pageLimit: 10000
            }),
        })

        return response.data.data_list
    } catch (e) {
        return "서버 오류가 발생했습니다.";
    }
}

export default fetchTournamentList;