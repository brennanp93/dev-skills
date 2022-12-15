import sendRequest from "./send-request";
const BASE_URL = '/api/blanklist';


export async function getAll() {
  return sendRequest(BASE_URL);
}

export async function create(checkListData) {
  return sendRequest(BASE_URL, 'POST', checkListData);
}
