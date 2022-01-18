import axios from "axios";

const BASE_URL = 'http://localhost:3003/api'


//FUNÇÃO QUE DISPARA A ACTION
export function getList() {
    const request = axios.get(`${BASE_URL}/billingCycles`)
}   