import axios from "axios";
const USER_BASE_REST_API_URL = "http://localhost:5001/api/auth/";

class UserApiServer {
  // Read
  // getAllEmployees() {
  //   return axios.get(USER_BASE_REST_API_URL);
  // }

  // Create; REGISTER
  registerUser(user) {
    localStorage.setItem("Loading",6); 
    return axios.post(`${USER_BASE_REST_API_URL}register`, user);
  }

  // LOG IN
  logUserIn(user) {
    localStorage.setItem("Loading",6); 
    return axios.post(`${USER_BASE_REST_API_URL}login`, user);
  }
  // GET
    // getEmployeeById(id) {
    //   return axios.get(USER_BASE_REST_API_URL + "/" + id);
    // }

  // UPDATE
  updateUser(user) {
    localStorage.setItem("Loading",6); 
    return axios.put(`${USER_BASE_REST_API_URL}update`,user);
  }

  // delete
    // deleteEmployee(id) {
    //   return axios.delete(USER_BASE_REST_API_URL + "/" + id);
    // }
}

export default new UserApiServer();
