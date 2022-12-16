import sendRequest from "./send-request";
const BASE_URL = '/api/blanklist';


export async function getAll() {
  return sendRequest(BASE_URL);
}

export async function create(checkListData) {
  return sendRequest(BASE_URL, 'POST', checkListData);
}
export async function deleteListItem(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}

export async function updateBoolean(UpdateCheckListFormData, id) {
  return sendRequest(`${BASE_URL}/${id}`, 'PUT', UpdateCheckListFormData);
  // return sendRequest(`${BASE_URL}/${id}/update`, 'PUT', UpdateCheckListFormData);
}

export async function updateListItem(booleanData, id) {
  return sendRequest(`${BASE_URL}/${id}/update`, 'PUT', booleanData);
}



// /api/blanklist/${id}/update