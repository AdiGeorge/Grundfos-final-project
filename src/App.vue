<template>
  <div>
    <router-view></router-view>
    <Navigation></Navigation>
  </div>
</template>

<script>
  import Navigation from './components/Navigation';
  export default {
    name: 'App',
    components: {
      Navigation,
    },
  };
</script>









