import axios from "axios";

const instance = axios.create({
    baseURL: "https://gory-grave-47999.herokuapp.com/api/v1"
});

// instance.defaults.withCredentials = true;
// axios.defaults.withCredentials = true;

export default instance;