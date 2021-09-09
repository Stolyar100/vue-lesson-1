import axios from "axios";

class WorldTimeApi {
  getTimeZones() {
    return axios.get("http://worldtimeapi.org/api/timezone")
  }

  getTimeZonesDetails(zone) {
    return axios.get(`http://worldtimeapi.org/api/timezone/${zone}`);
  }
}

export default new WorldTimeApi();
