import axios from "axios";

export const RequestsAuth = {
  requestAuthGet: async (route, value) => {
    return await axios.get(`http://localhost:3005/${route}`,value)
  },
  requestAuthPost: async (route, value) => {
    return await axios.post(`http://localhost:3005/${route}`, value)
  }
}