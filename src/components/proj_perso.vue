<template>
  <header>
    <div class="menu">
      <div class="nav-toggle" onclick="document.documentElement.classList.toggle('menu-open')">
        <div class="nav-toggle-bar">
        </div>
      </div>
      <nav class="nav_menu">
        <ul>
          <li><router-link to="/index">Accueil</router-link></li>
          <li><router-link to="/proj">Mes projets</router-link></li>
          <li><router-link to="/contact">Me contacter</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
  <main>
    <section>
      <h2>Projets personnels</h2>
      <p>Sur cette page, vous pouvez consulter différents travaux que j'ai réalisé et projets auxquels j'ai participé.
        Beaucoup des photos ici présentes sont trouvables sur mon <a href="#">compte instagram.</a></p>
    </section>
    <div class="disposition">
      <div>
        <section>
          <h3>Concours de création étudiante</h3>
          <div class="image_classique">
            <img src="../assets/img/concours_crea_etu.png" alt="Téo">
          </div>
          <p>Projet personnel. Photographie</p>
          <p>Participation au concours de création étudiante 2021 du Crous dans la catégorie photographie.</p>
          <button><router-link to="#">Découvrir</router-link></button>
        </section>
      </div>
      <div>
        <section>
          <h3>Photographe à la coupe du monde de vélo trial</h3>
          <div class="image_classique">
            <img src="../assets/img/trial.jpg" alt="trial">
          </div>
          <p>Projet personnel. Photographie</p>
          <p>Prise de vue numérique pour l'UCI Trial lors de la coupe du monde de vélo trial 2021 à Belfort.</p>
          <button><router-link to="/trial"></router-link></button>
        </section>
      </div>
      <div>
        <section>
          <h3>Chargé de communication à la MéMO</h3>
          <div class="image_classique">
            <img src="../assets/img/memo_grand.png" alt="miniature mémo">
          </div>
          <p>Projet associatif. Design - Communication -
            Photographie</p>
          <p>Responsable du pôle communication de la Maison des Étudiants de Montbéliard.
            Réalisation de visuels, Community Management, prise de vue évènementielle, etc.</p>
          <button><router-link to="#">Découvrir</router-link></button>
        </section>
      </div>
    </div>
    <section>
      <div class="miniature">
        <h3>Projets étudiants</h3>
        <router-link to="/proj_etu"><img src="../assets/img/etudiants.png" alt="miniature_etu"></router-link>
      </div>
      <p>Les travaux réalisés durant mes études concernent le web, le design graphique et la communication.
        Ils ont été réalisés seul ou en groupe selon les projets.
      </p>
    </section>
  </main>
</template>

<script>
export default {
  name: "proj_perso"
}
</script>

<style scoped>

</style>
