import { create } from "zustand"

type State = {
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

type Action = {
    setType: (_type: State["type"]) => void,
    setPageNumber: (_pageNumber: State["pageNumber"]) => void,
    setSearch: (_search: State["search"]) => void,
    setStateFilter: (_stateFilter: State["stateFilter"]) => void,
    setDateFilter: (_dateFilter: State["dateFilter"]) => void,
    setOrder: (_order: State["order"]) => void
}

const useTournamentStore = create<State & Action>((set) => ({
    type: "page",
    pageNumber: 1,
    search: "",
    stateFilter: [],
    dateFilter: {},
    order: {},
    setType: (_type) => set(() => ({ type: _type })),
    setPageNumber: (_pageNumber) => set(() => ({ pageNumber: _pageNumber })),
    setSearch: (_search) => set(() => ({ search: _search })),
    setStateFilter: (_stateFilter) => set(() => ({ stateFilter: _stateFilter })),
    setDateFilter: (_dateFilter) => set(() => ({ dateFilter: _dateFilter })),
    setOrder: (_order) => set(() => ({ order: _order })),
}))

export default useTournamentStore;