import sendRequest from "./send-request";
const BASE_URL = '/api/djangolist';


export async function getAll() {
  return sendRequest(BASE_URL);
};

export async function updateBoolean(booleanData, id) {
  return sendRequest(`${BASE_URL}/${id}`, 'PUT', booleanData);
};

export async function resetButton(entireCheckList) {
  return sendRequest(`${BASE_URL}/reset/django`, 'PUT', entireCheckList);
};
