import { fetchTournamentList } from "@apis";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useMemo } from "react";

interface IUseTournamentInfiniteQuery {
    type: "page" | "infinite",
    search: string,
    stateFilter: string[],
    dateFilter: {
        from?: string | undefined,
        to?: string | undefined
    } | undefined,
    order: {
        [key: string]: string | undefined
    }
}

export default function useTournamentInfiniteQuery({
    type, search,
    stateFilter, dateFilter,
    order
}: IUseTournamentInfiniteQuery) {
    const stableInfiniteQueryParams = useMemo(() => ({
        type, search,
        stateFilter, dateFilter,
        order
    }), [
        type, search,
        JSON.stringify(stateFilter),
        JSON.stringify(dateFilter),
        JSON.stringify(order),
    ]);

    const { isLoading: isInfiniteLoading, isFetching: isInfiniteFetching,
         data: infiniteData, fetchNextPage, hasNextPage } = useInfiniteQuery({
        queryKey: [
            "tournamentList",
            stableInfiniteQueryParams
        ],
        queryFn: ({ pageParam = 0 }) => fetchTournamentList({ ...stableInfiniteQueryParams, cursor: pageParam }),
        initialPageParam: 0,
        getNextPageParam: (lastPage) => {
            return lastPage.data?.nextCursor
        },
        enabled: type === "infinite"
    })

    return { isInfiniteLoading, isInfiniteFetching, infiniteData, fetchNextPage, hasNextPage}
}