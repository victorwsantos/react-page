import axios from "axios";

export const requests = {
  requestsGetArticles: async (route) => {
    return await axios.get(`http://localhost:3005/${route}`)
  },

  requestsPostArticle: async (route, value) => {
    return await axios.post(`http://localhost:3005/${route}`, value)
  },

  requestsUpdateArticle: async (route, value) => {
    return await axios.put(`http://localhost:3005/${route}`, value)
  },

  requestsDeletArticle: async (route) => {
    return await axios.delete(`http://localhost:3005/${route}`)
  }
}


