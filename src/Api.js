import axios from "axios";
import toFormData from "object-to-formdata";

const backendURL = "http://192.168.1.10:4000";

const api = axios.create({
  baseURL: backendURL
});

class Api {
  static registration(formData) {
    return axios.post("http://192.168.1.10:4000/users/register", toFormData.serialize(formData), {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
  }

  static login(formData) {
    return axios.post("http://192.168.1.10:4000/users/login", formData, {});
  }
}

export default Api;
