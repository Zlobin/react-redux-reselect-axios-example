import axios from 'axios';

export default async function fetch(url, data = {}, method = 'get') {
  return axios({
    method,
    url,
    data
  });
}
