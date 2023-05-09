const app = Vue.createApp({
  data() {
    return {
      inputText: "",
      isVisible: true,
      inputBackground: "",
    };
  },

  computed: {
    handleInput() {
      return {
        user1: this.inputText === "user1",
        user2: this.inputText === "user2",
        visible: this.isVisible,
        hidden: !this.isVisible,
      };
    },
  },

  methods: {
    Toggle() {
      this.isVisible = !this.isVisible;
    },
  },
}).mount("#assignment");
