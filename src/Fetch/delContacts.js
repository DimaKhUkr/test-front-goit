import axios from 'axios';

export async function delContacts(id) {
  // console.log(id);
  const response = axios.delete(`/contacts/${id}`);
  return response;
}
