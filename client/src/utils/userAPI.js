import axios from "axios";

export default {
  // Gets the user with the given id
  getUser: function (id) {
    return axios.get("/api/user/" + id);
  },
  // Deletes the user with the given id
  deleteUser: function (id) {
    return axios.delete("/api/user/" + id);
  },
  // Saves a user to the database
  saveUser: function (postData) {
    return axios.post("/api/user", postData);
  },
  // Updates a user to the database
  updateUser: function (postData) {
    return axios.put("/api/user", postData);
  }
};
