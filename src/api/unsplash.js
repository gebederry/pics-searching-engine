import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 2b6UDG0v73ncJgnHfDYVqN-5dhH9vlvhLXiE0xP3G4E",
  },
});
