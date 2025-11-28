import axios from "axios";
import fetchTournamentList from "./fetchTournamentList";

const ax = axios.create({
    baseURL: "http://localhost:3000",
})

export {
    fetchTournamentList
};

export default ax;