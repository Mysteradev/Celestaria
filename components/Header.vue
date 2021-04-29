<template>
  <b-container>
    <b-navbar toggleable="lg" type="light" variant="faded">
      <b-navbar-brand tag="h1" class="mb-0">
        <NuxtLink to="/">
          Celestaria
        </NuxtLink>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" />

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <MainButton text="Les films" link="/films" class="mr-3" type="empty" />
          <MainButton text="Votre film" link="/creer-film" />
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </b-container>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped></style>
