// токен: d6c0c612-ab7b-4c5a-8375-b04337e64d59
// адрес запроса: http://server_ip:5000/info
// пример запроса:
// {
//     "article": "3 397 007 555",
//     "brand": "BOSCH"
// }

// токен передается на данный момент в headers в поле Authorization
// 87.249.54.27 ip
// http://87.249.54.27:5000/info/

import axios from "axios";

const instanse = axios.create({
  baseURL: "http://87.249.54.27:5000/",
  headers: {
    "Authorization": "d6c0c612-ab7b-4c5a-8375-b04337e64d59",
    "Content-Type": "application/json",
  },
});

export const allAPIs = {
  getProduct() {
    return instanse.get("info/");
  },
};

// curl --location --request GET 'http://87.249.54.27:5000/info'
// --header 'Authorization: d6c0c612-ab7b-4c5a-8375-b04337e64d59'
// --header 'Content-Type: application/json'
// --data '{
// "article": "3 397 007 555",
// "brand": "BOSCH"

// }'
