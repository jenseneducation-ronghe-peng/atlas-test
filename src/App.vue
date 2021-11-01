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

<style lang="sass">
@import sass/index.sass

h1, h2
  color: $secondary

h3
  color: $lgtgrey

p
  color: $lgtgrey

#app
  background: $primary

.link
  text-decoration: none
</style>
