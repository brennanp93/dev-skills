import sendRequest from "./send-request";
const BASE_URL = '/api/devskills';


export async function getAll() {
    return sendRequest(BASE_URL)
}

