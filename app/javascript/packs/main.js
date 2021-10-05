import TurbolinksAdapter from "vue-turbolinks";
import Vue from "vue/dist/vue.esm";
import App from "../app.vue";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import ButtonComponent from "../button.vue";

Vue.use(TurbolinksAdapter);
Vue.use(Buefy);

document.addEventListener("turbolinks:load", () => {
  const app = new Vue({
    el: "#hello",
    data: () => {
      return {
        message: "Can you say hello?",
      };
    },
    components: { App, ButtonComponent },
  });
});
