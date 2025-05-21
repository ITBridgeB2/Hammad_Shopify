import axios from "axios";     
var VISITOR_URL='http://localhost:9888/userdetails'

class UserDetailsService {
  validateUser(mobileNumber, password) {
    return axios.get(`${VISITOR_URL}/${mobileNumber}/${password}`)
  }

  




}

export default new UserDetailsService();