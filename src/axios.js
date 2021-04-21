import axios from "axios";

const instance = axios.create({
  //baseURL: "http://localhost:5001/clone-a7dd5/us-central1/api", // API (cloud function) URL
  baseURL: "https://us-central1-clone-a7dd5.cloudfunctions.net/api", // API (cloud function) URL
});

export default instance;
