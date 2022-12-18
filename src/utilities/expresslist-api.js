import sendRequest from "./send-request";
const BASE_URL = '/api/expresslist';


export async function getAll() {
  return sendRequest(BASE_URL);
}

export async function updateBoolean(booleanData, id) {
  return sendRequest(`${BASE_URL}/${id}`, 'PUT', booleanData);
  // return sendRequest(`${BASE_URL}/${id}/update`, 'PUT', UpdateCheckListFormData);
}

export async function resetButton(entireCheckList) {
  return sendRequest(`${BASE_URL}/reset`, 'PUT', entireCheckList);
}