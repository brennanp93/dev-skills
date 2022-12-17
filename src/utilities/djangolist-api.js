import sendRequest from "./send-request";
const BASE_URL = '/api/djangolist';


export async function getAll() {
  return sendRequest(BASE_URL);
}

export async function updateBoolean(booleanData, id) {
  return sendRequest(`${BASE_URL}/${id}`, 'PUT', booleanData);
  // return sendRequest(`${BASE_URL}/${id}/update`, 'PUT', UpdateCheckListFormData);
}

// export async function updateListItem(booleanData, id) {
//   return sendRequest(`${BASE_URL}/${id}/update`, 'PUT', booleanData);
// }





// /api/blanklist/${id}/update