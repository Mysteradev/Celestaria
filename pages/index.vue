<template>
  <header>
    <b-container fluid="lg" class="h-100">
      <b-row class="h-100">
        <b-col class="my-auto">
          <div class="header-content mx-auto">
            <div class="pb-3">
              <h1 class="main-title">
                Celestaria
              </h1>
              <h2>Vous êtes les maitres du jeu !</h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci assumenda, culpa cupiditate deserunt
              ea exercitationem fugiat harum illo iusto nemo numquam officiis, placeat porro praesentium recusandae
              reiciendis sapiente similique sint, veniam voluptas?
            </p>

            <b-row>
              <b-col>
                <MainButton text="Créer mon film" link="/creer-film" type="empty" class="text-white" />
              </b-col>
              <b-col>
                <MainButton text="Voir les films" link="/creer-film">
                  <BIconArrowRight slot="icon" />
                </MainButton>
              </b-col>
            </b-row>
          </div>
        </b-col>
        <b-col class="my-auto">
          <MainPicture />
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <b-card class="text-center">
            33452 films crées!
          </b-card>
        </b-col>
        <b-col>
          <b-card class="text-center">
            350h de films!
          </b-card>
        </b-col>
        <b-col>
          <b-card class="text-center">
            350000 films différents peuvent être crée
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </header>
</template>

<script>
import { BIconArrowRight } from 'bootstrap-vue'

export default {
  components: {
    BIconArrowRight
  }
}
</script>

<style lang="scss" scoped>
html {
  background-image: url('~/assets/blop.svg');
}
header {
  height: 100vh;

  .main-title {
    font-size: 4em;
  }

}
</style>
