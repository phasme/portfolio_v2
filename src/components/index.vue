<template>
<div class="accueil">
  <header>
    <div class="menu">
      <div class="nav-toggle" onclick="document.documentElement.classList.toggle('menu-open')">
        <div class="nav-toggle-bar">
        </div>
      </div>
      <nav class="nav_menu">
        <ul>
          <li><router-link to="/">Accueil</router-link></li>
          <li><router-link to="/proj">Mes projets</router-link></li>
          <li><router-link to="/contact">Me contacter</router-link></li>
        </ul>
      </nav>
    </div>
    <div class="div_img_pres">
      <img class="img_pres" src="../assets/img/portrait_presentation.jpg" alt="Joris Lin">
      <div class="div_text_pres">
        <h1>Joris LIN</h1>
        <ul>
          <li>Photographe</li>
          <li>Graphiste</li>
          <li>Communicant</li>
        </ul>
      </div>
    </div>
  </header>
  <main>
    <section class="ancres">
      <a href="#moi">Présentation</a>
      <a href="#travaux">Travaux</a>
    </section>
    <section class="moi" id="moi">
      <h2>Qui je suis ?</h2>
      <div class="div_autoportrait">
        <img class="autoportrait" src="../assets/img/portrait_2.jpg" alt="autoportrait">
      </div>
      <h3>Joris LIN</h3>
      <p>DUT MMI 2e année
        Photographe amateur, Designer graphique, Communicant
        "Chaque vie est un film. Prendre une photo, c'est mettre en pause le film de quelqu'un."</p>
      <br>
      <p>Intéressé et curieux, je suis passionné par de nombreux domaines, mais les principaux tournent autour de l'art et de la technologie.
        Mes centres d'intérêt sont le design graphique, la communication web, l'art, le web en général mais le principal reste la photographie que je pratique en amateur depuis 2019.
        Je souhaite par ailleurs faire de la photographie mon métier.
        La chose qui me plaît dans toutes ces disciplines est le fait de pouvoir transmettre des messages aux personnes, sous des formes diverses et variées.
        Actuellement en deuxième année de DUT MMI (Métiers du Multimédia et de l'Internet) à Montbéliard, j'ai choisi ces études afin d'être polyvalent et d'avoir une connaissance globale des différents aspects du web.
        Par la suite, je souhaite m'orienter vers une école de photographie, afin de pouvoir devenir photographe de voyage et influenceur sur les réseaux sociaux.
        À travers mes photos, je cherche à montrer la beauté du quotidien, à quel point les choses qui peuvent paraîtres simples sont en réalité importantes et belles.
        Je suis particulièrement influencé par les photographes cinématographiques et par l'esthétique photo argentique.
      </p>


    </section>
    <section class="mes_travaux" id="travaux">
      <div class="div_texte_travaux">
        <h2>Mes travaux</h2>
        <p>Durant mes études et mon temps libre j'ai réalisé de nombreux travaux concernant les différents domaines qui me passionnent.
          Ces travaux m'ont permis de progresser, d'avoir un œil plus averti quant au monde qui m'entoure, et de pouvoir le retransmettre le plus fidèlement possible.
        </p>
        <button><router-link to="/bugdays"> Découvrir </router-link></button>
      </div>
      <img class="paysage_bg" src="../assets/img/paysage1.jpg" alt="etang_des_forges">
    </section>
    <div class="bas_page">
      <section>
        <h2>Mon CV</h2>
        <img src="../assets/img/cv.png" alt="CV" class="cv_img">
        <button></button>
      </section>
      <section>
        <h2>Mes collaborations</h2>
        <div class="collab">
          <img src="../assets/../assets/img/Memo.png" alt="logo_memo" class="collab_1">
          <p class="collab_pc">Maison des étudiants de Montbéliard</p>
          <img src="../assets/img/OB.png" alt="logo_ob" class="collab_2">
          <p class="collab_pc">Irish PUB O'Brian</p>
          <img src="../assets/img/uci.png" alt="logo_uci" class="collab_3">
          <p class="collab_pc">UCI Trials</p>
        </div>
      </section>
    </div>
  </main>
</div>
</template>

<script>
export default {
  name: "Index"
}
</script>

<style scoped>

</style>
