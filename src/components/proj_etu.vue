<template>
  <div>
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
    </header>
    <main>
      <section>
        <h2>Projets étudiants</h2>
        <p>Sur cette page, vous pouvez retrouver mes travaux réalisés dans le cadre de mes études via divers projets réalisés seul ou en groupe.
        </p>
      </section>
      <section>
        <h3>Site web de la MéMO</h3>
        <div class="image_classique">
          <img src="../assets/img/memo_grand.png" alt="miniature mémo">
        </div>
        <p>Projet de groupe. Design - Communication</p>
        <p>Réalisation d'un site web en groupe pour la Maison des étudiants de Montbéliard (MéMO).</p>
        <button><router-link to="/site_memo"></router-link></button>
      </section>
      <section>
        <h3>Bug Days</h3>
        <div class="image_classique">
          <img src="../assets/img/bugdays_fond.png" alt="miniature bugdays">
        </div>
        <p>Projet individuel. Design - Communication</p>
        <p>Réalisation d'une charte graphique et de visuels de communication pour un évènement fictif lié au gaming.</p>
        <button><router-link to="/bugdays"></router-link></button>

      </section>
      <section>
        <h3>Broken mirror</h3>
        <div class="image_classique">
          <img src="../assets/img/broken_mirror.png" alt="miniature brokenmirror">
        </div>
        <p>Projet individuel. Design - Développement</p>
        <p>Réalisation d'un site web mobile en individuel sur le thème de la pollution numérique</p>
        <button><router-link to="#">Découvrir</router-link></button>
      </section>
      <section>
        <div class="miniature">
          <h3>Projets personnels</h3>
          <router-link to="/proj_perso"><img src="../assets/img/perso.png" alt="miniature_perso"></router-link>
        </div>
        <p>Mes projets personnels, eux, concernent majoritairement la photographie, ils ont majoritairement été réalisés seul.
        </p>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "proj_etu"
}
</script>

<style scoped>

</style>
