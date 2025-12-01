import PageMode from "./PageMode"
import InfiniteMode from "./InfiniteMode"
import useTournamentStore from "@stores/useTournamentStore"

export default function Tournament() {
    const { type } = useTournamentStore();

    return type === "page" ? <PageMode /> : <InfiniteMode />
}