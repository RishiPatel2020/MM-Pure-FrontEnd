import axios from "axios";
const REFERRAL_BASE_REST_API_URL = "https://mm-pure-backend-production.up.railway.app/api/dataCollection/";

class DataCollectionAPI {
  
  add(url) {
    return axios.post(`${REFERRAL_BASE_REST_API_URL}referral`, url);
  }

}

export default new DataCollectionAPI();
