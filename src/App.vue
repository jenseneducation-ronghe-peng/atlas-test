<template>
  <v-app id="app">
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <router-link class="link" to="/" v-if="$route.path !== `/`">
          <v-btn text>
            <v-icon x-large color="secondary">mdi-account-circle</v-icon>
            <span class="mx-2">My page</span>
          </v-btn>
        </router-link>
      </div>

      <v-spacer></v-spacer>

      <router-link class="link" to="/cart" v-if="$route.path !== `/cart`">
        <v-btn text>
          <span class="mx-2">shopping cart</span>
          <v-icon x-large color="secondary">mdi-cart-variant</v-icon>
        </v-btn>
      </router-link>
    </v-app-bar>

    <v-main>
      <v-container class="container" fluid style="max-width: 960px">
        <v-row align="center" justify="center" dense>
          <router-view />
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({}),
};
</script>

<style>
h1,
h2,
h3 {
  color: #fbc02d;
}
h3,
p {
  color: lightgray;
}
#app {
  background: #212121;
}
.link {
  text-decoration: none;
}
</style>
