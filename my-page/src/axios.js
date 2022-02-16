import axios from "axios";

export const requests = {
  requestsGet: async (route) => {
    return await axios.get(`http://localhost:3005/${route}`)
  },

  requestsPost: async (route, value) => {
    return await axios.post(`http://localhost:3005/${route}`, value)
  },

  requestsUpdate: async (route, value) => {
    return await axios.put(`http://localhost:3005/${route}`, value)
  },

  requestsDelet: async (route) => {
    return await axios.delete(`http://localhost:3005/${route}`)
  }
}


