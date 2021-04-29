<template>
  <b-navbar toggleable="lg" type="light" variant="faded" fixed="top">
    <b-navbar-brand>
      <NuxtLink to="/">
        Celestaria
      </NuxtLink>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse" />

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-button variant="link" class="text-decoration-none">
          <NuxtLink to="/films" class="black">
            Voir les films
          </NuxtLink>
        </b-button>
        <MainButton text="Créer un film" link="/creer-film" />
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped></style>
