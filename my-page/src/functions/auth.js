import axios from "axios";

export const RequestsAuth = {
  requestAuthGet: async (route) => {
    return await axios.get(`http://localhost:3005/${route}`)
  },
  requestAuthPost: async (route, value) => {
    return await axios.post(`http://localhost:3005/${route}`, value)
  }
}