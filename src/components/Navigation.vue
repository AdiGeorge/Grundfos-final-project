<template>
  <div>
    <div class="nav">
      <div class="logo">
        <router-link to="/" class="item logo"> <img src="../assets/logo.png" alt="logo"> </router-link>
        <p class="text_logo">Grundfos <br><span>Component Library</span></p>
      </div>
      <div class="nav_items">
        <router-link to='/guidelines' class="item"> Guidelines </router-link>
        <router-link to='/components' class="item"> Components </router-link>
        <router-link to='/resources' class="item"> Resources </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Navigation'
  }
</script>

<style scoped lang="scss">
  @import "../sass/_colors.scss";
  @import "../sass/_fonts.scss";

   h1,h2,h3,h4,h5,h6,p,a {
     font-family: $main-font;
   }

  a {
    transition: .3s;
  }

  .logo {
    display: flex;
    margin-top: 5px;
    ::after {
      background-color: $white !important;
    }
  }

  .router-link-active {
    color: $blue !important;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 5px;
      background-color: $blue;
      bottom: -28px;
      left: 0;
    }
  }


  .nav {
    display: flex;
    justify-content: space-between;
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    padding-bottom: 8px;
    border-bottom: 1px solid #C9C9C9;
    background-color: white !important;
  }

  .logo {
    display: flex;
    margin-top: 5px;
    background-color: none !important;
  }

  .text_logo {
    align-self: center;
    font-size: .9em;
    padding-left: 10px;
    margin: 0;
    span {
      font-size: .8em;
    }
  }

  .nav_items {
    margin-right: 30em;
    align-self: center;
  }

  .item {
    margin-left: 50px;
    text-decoration: none;
    color: $dark-grey;
    font-weight: 700;

  }
</style>