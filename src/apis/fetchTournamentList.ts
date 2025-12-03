import axios from "@apis";
import type { ITournamentData } from "@type/tournament";
import { AxiosError } from "axios";

export type optionsType = {
    type?: "page" | "infinite" | undefined
    pageNumber?: number | undefined,
    cursor?: number | undefined,
    search?: string | undefined,
    stateFilter?: string[] | undefined,
    dateFilter?: {
        from?: string,
        to?: string,
    } | undefined,
    order?: {
        [key: string]: string | undefined
    } | undefined
}

interface IFetchTournamentListData {
    data?: {
        tournamentList: ITournamentData[],
        lastPage?: number | null,
        nextCursor?: number | null
    }
}

async function fetchTournamentList(options: optionsType): Promise<IFetchTournamentListData> {
    try {
        const response = await axios.post("/tournament", options)

        return response.data
    } catch (e) {
        if (e instanceof AxiosError) {
            throw new Error(e.message)
        }

        throw new Error("알 수 없는 에러가 발생했습니다");
    }
}

export default fetchTournamentList;