import WorldTimeApiService from '../services/WorldTimeApiService'

export default {
  data() {
    return {
      zone: null
    };
  },
  methods: {
    getClockDetails() {
      return WorldTimeApiService.getTimeZonesDetails(this.zone)
        .then(res => {
          const date = new Date(res.data.datetime);

          return {date, details: res.data};
        });
    }
  }
};
