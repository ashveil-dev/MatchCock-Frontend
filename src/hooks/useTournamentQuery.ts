import { fetchTournamentList } from "@apis";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";

interface IUseTournamentQuery {
    type: "page" | "infinite",
    pageNumber: number,
    search: string,
    stateFilter: string[],
    dateFilter: {
        from?: Date,
        to?: Date
    } | undefined,
    order: {
        [key: string]: "asc" | "desc"
    }
}

export default function useTournamentQuery({
    type, pageNumber, search, stateFilter, dateFilter, order
}: IUseTournamentQuery) {
    const stableQueryParams = useMemo(() => ({
        type, pageNumber,
        search, stateFilter, dateFilter, order
    }), [
        type, pageNumber, search,
        JSON.stringify(stateFilter),
        JSON.stringify(dateFilter),
        JSON.stringify(order),
    ]);

    const { isLoading: isPageLoading, isFetching: isPageFetching, data: pageData } = useQuery({
        queryKey: [
            "tournamentList",
            stableQueryParams
        ],
        queryFn: () => fetchTournamentList({
            type, pageNumber,
            search, stateFilter, dateFilter,
            order
        }),
    })

    return { isPageLoading, isPageFetching, pageData }
}