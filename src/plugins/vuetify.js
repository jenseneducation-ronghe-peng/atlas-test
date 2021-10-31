import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi",
  },
  theme: {
    themes: {
      light: {
        primary: colors.brown.darken4,
        secondary: colors.yellow.darken2,
        bg: colors.grey.darken3,
        grey: colors.grey.lighten1,
        blue: colors.blue,
      },
    },
  },
});
