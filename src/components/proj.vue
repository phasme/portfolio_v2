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
      <h2>Mes projets</h2>
      <p>Sur cette page, vous pouvez retrouver mes travaux réalisés dans le cadre de mes études ainsi que les travaux effectués sur mon temps libre.
      </p>
    </section>
    <div class="bas_page">
      <section>
        <div class="miniature">
          <h3>Projets étudiants</h3>
          <router-link to="/proj_etu"><img src="../assets/img/etudiants.png" alt="miniature_etu"></router-link>
        </div>
        <p>Les travaux réalisés durant mes études concernent le web, le design graphique et la communication.
          Ils ont été réalisés seul ou en groupe selon les projets.
        </p>
      </section>
      <section>
        <div class="miniature">
          <h3>Projets personnels</h3>
          <router-link to="/proj_perso"><img src="../assets/img/perso.png" alt="miniature_perso"></router-link>
        </div>
        <p>Mes projets personnels, eux, concernent majoritairement la photographie, ils ont majoritairement été réalisés seul.
        </p>
      </section>
    </div>
  </main>
</div>
</template>

<script>
export default {
  name: "proj"
}
</script>

<style scoped>

</style>
