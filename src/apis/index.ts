import axios from "axios";
import fetchTournament from "./fetchTournament";
import fetchTournamentList from "./fetchTournamentList";

const ax = axios.create({
    baseURL: "http://localhost:3000",
})

export {
    fetchTournament,
    fetchTournamentList
};

export default ax;