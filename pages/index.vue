<template>
  <b-container fluid="lg" class="h-100">
    <header>
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
                <MainButton text="Créer mon film " link="/creer-film" class="">
                  <BIconArrowRight slot="icon" />
                </MainButton>
              </b-col>
            </b-row>
          </div>
        </b-col>
        <b-col class="my-auto">
          <MainPicture />
        </b-col>
        <b-col cols="12" class="text-center" align-self="center">
          <BIconArrowDown animation="cylon-vertical" font-scale="2" />
        </b-col>
      </b-row>
    </header>
    <b-row class="mb-5 pb-5">
      <b-col class="home-card">
        <b-img center src="~/assets/video.svg" alt="" class="mb-2 home-img" />
        <p class="text-center">
          33452 films crées
        </p>
      </b-col>
      <b-col class="home-card">
        <b-img center src="~/assets/play.svg" alt="" class="mb-2 home-img" />
        <p class="text-center">
          350h de films
        </p>
      </b-col>
      <b-col class="home-card">
        <b-img center src="~/assets/chart.svg" alt="" class="mb-2 home-img" />
        <p class="text-center">
          350000 films peuvent être créés
        </p>
      </b-col>
    </b-row>
    <b-row class="justify-content-sm-center mt-5 pt-5 pb-5">
      <b-col>
        <Player />
      </b-col>
      <b-col offset-md="1" sm="auto">
        <h3 class="mb-3 mt-3">
          Comment créer mon film
        </h3>
        <p>
          <img src="~/assets/arrow-right.svg" alt="">
          Rendez-vous
          <NuxtLink to="/creer-film" class="btn-link">
            ici
          </NuxtLink>
        </p>
        <p>
          <img src="~/assets/eye.svg" alt="">
          Regardez les chapitres
        </p>
        <p>
          <img src="~/assets/choose.svg" alt="">
          Choisir les chapitres
        </p>
        <p>
          <img src="~/assets/pen.svg" alt="">
          Nommez votre film
        </p>
        <p>
          <img src="~/assets/share.svg" alt="">
          Et partagez le à vos amis !
        </p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { BIconArrowRight, BIconArrowDown } from 'bootstrap-vue'
import Player from '../components/Player'
import MainButton from '../components/MainButton'
import MainPicture from '../components/MainPicture'

export default {
  components: {
    BIconArrowRight,
    Player,
    MainButton,
    MainPicture,
    BIconArrowDown
  }
}
</script>

<style lang="scss" scoped>
.bg-svg {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3e %3cpath fill='%23F2F2F2' d='M30.7%2c-42.2C42.5%2c-40.2%2c56.7%2c-36.3%2c66.8%2c-26.8C76.9%2c-17.3%2c82.9%2c-2.3%2c77.1%2c8.3C71.3%2c19%2c53.8%2c25.2%2c43.2%2c37.7C32.7%2c50.3%2c29.3%2c69.2%2c19.5%2c76.8C9.7%2c84.4%2c-6.5%2c80.8%2c-18.9%2c73.1C-31.2%2c65.4%2c-39.8%2c53.7%2c-48.8%2c42.7C-57.8%2c31.6%2c-67.2%2c21.3%2c-67.2%2c10.6C-67.2%2c-0.1%2c-57.9%2c-11.1%2c-51.1%2c-22.2C-44.2%2c-33.2%2c-39.9%2c-44.2%2c-31.8%2c-47.9C-23.7%2c-51.7%2c-11.8%2c-48.1%2c-1.2%2c-46.2C9.4%2c-44.4%2c18.9%2c-44.2%2c30.7%2c-42.2Z' transform='translate(100 100)' /%3e %3c/svg%3e");
  background-repeat: no-repeat;
  position: relative;
}

.home-img {
  min-height: 101px;
}

.home-card {
  background-color: #F2F2F2;
  border-radius: 15px;
  padding: 30px;
  margin: 10px;
}

header {
  height: 100vh;

  .main-title {
    font-size: 4em;
  }

}
</style>
