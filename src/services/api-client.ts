import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "eeab097d28124fd2a4f1712158aa878d",
  },
});
