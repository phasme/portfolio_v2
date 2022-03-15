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
    <div class="contact">
      <section>
        <h2>Me contacter</h2>
        <p>
          Une demande ?
          Une question ?
          Contactez moi juste ici !
        </p>
        <form action="post">
          <div>
            <label for="name">Nom :</label>
            <input type="text" id="name" name="user_name" placeholder="Votre nom">
          </div>
          <div>
            <label for="firstname">Prénom : </label>
            <input type="text" id="firstname" name="user_firstname" placeholder="Votre prénom">
          </div>
          <div>
            <label for="mail">Mail :</label>
            <input type="email" id="mail" name="user_mail" placeholder="Votre mail">
          </div>
          <div>
            <label for="msg">Message :</label>
            <textarea name="user_msg" id="msg"></textarea>
          </div>
          <div>
            <button type="submit" class="envoyer">Envoyer</button>
          </div>
        </form>
      </section>
      <section class="coord">
        <h2>Coordonnées</h2>
        <ul>
          <li><a href="https://www.instagram.com/phasme.raw/"><svg xmlns="http://www.w3.org/2000/svg" width="121" height="120.973" viewBox="0 0 121 120.973">
            <path id="Icon_awesome-instagram" data-name="Icon awesome-instagram" d="M60.508,31.708A31.016,31.016,0,1,0,91.524,62.724,30.967,30.967,0,0,0,60.508,31.708Zm0,51.18A20.164,20.164,0,1,1,80.673,62.724,20.2,20.2,0,0,1,60.508,82.889ZM100.027,30.44a7.234,7.234,0,1,1-7.234-7.234A7.218,7.218,0,0,1,100.027,30.44Zm20.542,7.342c-.459-9.691-2.672-18.275-9.772-25.347C103.725,5.362,95.141,3.149,85.45,2.663c-9.988-.567-39.924-.567-49.912,0-9.664.459-18.248,2.672-25.347,9.745S.906,28.064.42,37.755c-.567,9.988-.567,39.924,0,49.912.459,9.691,2.672,18.275,9.772,25.347s15.656,9.286,25.347,9.772c9.988.567,39.924.567,49.912,0,9.691-.459,18.275-2.672,25.347-9.772,7.072-7.072,9.286-15.656,9.772-25.347.567-9.988.567-39.9,0-49.885Zm-12.9,60.6a20.415,20.415,0,0,1-11.5,11.5c-7.963,3.158-26.859,2.429-35.659,2.429s-27.723.7-35.659-2.429a20.415,20.415,0,0,1-11.5-11.5C10.192,90.42,10.92,71.524,10.92,62.724S10.219,35,13.35,27.065a20.415,20.415,0,0,1,11.5-11.5c7.963-3.158,26.859-2.429,35.659-2.429s27.723-.7,35.659,2.429a20.415,20.415,0,0,1,11.5,11.5c3.158,7.963,2.429,26.859,2.429,35.659S110.825,90.447,107.666,98.383Z" transform="translate(0.005 -2.238)" fill="#212b33"/>
          </svg>
          </a></li>
          <li><a href="https://twitter.com/phasmephoto"><svg xmlns="http://www.w3.org/2000/svg" width="121" height="98.274" viewBox="0 0 121 98.274">
            <path id="Icon_awesome-twitter" data-name="Icon awesome-twitter" d="M108.562,27.872c.077,1.075.077,2.15.077,3.225,0,32.784-24.952,70.558-70.558,70.558A70.079,70.079,0,0,1,0,90.523a51.3,51.3,0,0,0,5.989.307,49.665,49.665,0,0,0,30.788-10.6,24.843,24.843,0,0,1-23.187-17.2,31.274,31.274,0,0,0,4.684.384,26.228,26.228,0,0,0,6.526-.844A24.8,24.8,0,0,1,4.914,38.237V37.93a24.975,24.975,0,0,0,11.209,3.148A24.836,24.836,0,0,1,8.445,7.91,70.49,70.49,0,0,0,59.579,33.861a28,28,0,0,1-.614-5.681,24.823,24.823,0,0,1,42.918-16.968,48.824,48.824,0,0,0,15.739-5.989,24.732,24.732,0,0,1-10.9,13.666A49.715,49.715,0,0,0,121,15.051a53.308,53.308,0,0,1-12.438,12.822Z" transform="translate(0 -3.381)" fill="#212b33"/>
          </svg>
          </a></li>
        </ul>
      </section>
    </div>
  </main>
</div>
</template>

<script>
export default {
  name: "contact"
}
</script>

<style scoped>

</style>
