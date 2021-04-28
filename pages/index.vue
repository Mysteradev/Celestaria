<template>
  <header>
    <b-container class="h-100">
      <b-row class="h-100">
        <b-col class="my-auto">
          <div class="header-content mx-auto">
            <div class="pb-3">
              <h1 class="main-title">
                Celestaria
              </h1>
              <h2>Vous êtes les maitres du jeu !</h2>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci assumenda, culpa cupiditate deserunt ea exercitationem fugiat harum illo iusto nemo numquam officiis, placeat porro praesentium recusandae reiciendis sapiente similique sint, veniam voluptas?</p>

            <b-row class="pt-3">
              <b-col>
                <MainButton text="Créer mon film" link="/creer-film" />
              </b-col>
              <b-col>
                <MainButton text="Voir les films" link="/creer-film" type="empty">
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
          33452 films crées!
        </b-col>
        <b-col>
          350h de films!
        </b-col>
        <b-col>
          350000 films différents peuvent être crée
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
header {
  height: 100vh;

  .main-title {
    font-size: 4em;
  }

}
</style>
