import sendRequest from "./send-request";
const BASE_URL = '/api/devskills';


export async function getAll() {
    return sendRequest(BASE_URL);
}

// export async function updateBoolean(UpdateCheckListFormData, id) {
//     return sendRequest(`${BASE_URL}/${id}/bool`, 'PUT', UpdateCheckListFormData);
//     // return sendRequest(`${BASE_URL}/${id}/update`, 'PUT', UpdateCheckListFormData);
//   }
export async function getOneDevSkill(id) {
    return sendRequest(`${BASE_URL}/${id}`,);
    // return sendRequest(`${BASE_URL}/${id}/update`, 'PUT', UpdateCheckListFormData);
  }

// export async function updateListItem(booleanData, id) {
//     return sendRequest(`${BASE_URL}/${id}/update`, 'PUT', booleanData);
//   }