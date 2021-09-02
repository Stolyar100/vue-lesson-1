const axios = require("axios");

export default {
  data() {
    return {
      zone: null
    };
  },
  methods: {
    getClockDetails() {
      return axios
        .get(`http://worldtimeapi.org/api/timezone/${this.zone}`)
        .then(res => {
          const date = new Date(res.data.datetime);

          return {date, details: res.data};
        });
    }
  }
};
