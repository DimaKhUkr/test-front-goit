import axios from 'axios';

export async function addContacts({ name, number }) {
  console.log('+++++');
  console.log(name);
  console.log(number);
  const response = axios.post(`/contacts`, { name, number });
  return response;
}
