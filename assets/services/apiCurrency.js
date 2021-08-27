import axios from "axios";

//baseURL: https://free.currconv.com/api/v7/
// > currencies?apiKey=do-not-use-this-api-key-l6_i4SFg6ck_wO7JCZzQo

const apiCurrency = axios.create({
    baseURL: 'https://free.currconv.com/api/v7/'
});

export default apiCurrency;
