import axios from "axios";
const HOTE_BASE_API_URL = "http://localhost:5001/api/hotel/";

class HotelAPIService {
  
  getMealQuantityTable(date){
    return axios.post(`${HOTE_BASE_API_URL}mealQuantityTable`, date);
  }
  getOrderTables(date){
    return axios.post(`${HOTE_BASE_API_URL}ordersTable`, date);
  }

}

export default new HotelAPIService();
