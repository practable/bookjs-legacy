import { mapState } from "vuex";
import axios from "axios";
import dayjs from "dayjs";
import $ from "jquery";
export default {
  props: ["description", "key", "index"],
  components: {},
  computed: {
    title: function () {
      return this.description.name;
    },
    image: function () {
      return this.description.image;
    },
    what: function () {
      return this.description.short;
    },
    about: function () {
      return this.description.long;
    },
    status: function () {
      return "Now until " + dayjs.unix(this.description.exp).format("h:mm A");
    },
    ...mapState({
      bookingTokenValid: (state) => state.bookingTokenValid,
      bookingToken: (state) => state.bookingToken,
      poolStatus: (state) => state.poolStatus,
      details: (state) => state.poolDescriptions,
      ids: (state) => state.poolIDs,
    }),
  },
  methods: {
    open() {
      console.log("opening ui page for  ", this.description.id);
    },
  },
};
