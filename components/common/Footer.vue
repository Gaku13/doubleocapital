<template lang="pug">
  footer#contact
    .footer-container
      .logo
        Logo
      .nav
        ul
          li
            nuxt-link( v-scroll-to="mission" to ) Mission
          li
            nuxt-link( v-scroll-to="value" to ) Value
          li
            nuxt-link( v-scroll-to="service" to ) Service
          li
            nuxt-link( v-scroll-to="about" to ) About
          li
            a( href="https://" target="_blank" rel="noopener noreferrer nofollow" ) Contact
        .copyright
          | © Double O Capital.Ltd

</template>

<style lang="stylus">
footer
  position relative
  z-index 1
.footer-container
  display flex
  height 38vw
  @media (max-width: 1023px)
    height 50vw
  @media (max-width: 767px)
    height auto
  .logo
    display flex
    align-items center
    justify-content center
    position relative
    width 42vw
    background-color $primary
    @media (max-width: 767px)
      display none
  .nav
    width 58vw
    background-color $black
    @media (max-width: 767px)
      width 100vw
      padding 50px 0
    ul
      list-style none
      margin 0
      padding 50px
      @media (max-width: 767px)
        margin-bottom 50px
    li
      margin-bottom 15px
    a
      color $textContrast
      font-size 24px
      transition color .2s
      &:hover
        color $primary
    .copyright
      position absolute
      right 40px
      bottom 40px
      color $textContrast
      text-align right

</style>

<script>
import Logo from '~/static/images/logo.svg?inline'

export default {
  components: {
    Logo,
  },
  data() {
    return {
      mission: {
        el: '#mission',
        onStart: function(el) {
          var nav;
          nav = document.querySelector('.nav-container');
          return nav.classList.remove('show');
        }
      },
      value: {
        el: '#value',
        onStart: function(el) {
          var nav;
          nav = document.querySelector('.nav-container');
          return nav.classList.remove('show');
        }
      },
      service: {
        el: '#service',
        onStart: function(el) {
          var nav;
          nav = document.querySelector('.nav-container');
          return nav.classList.remove('show');
        }
      },
      about: {
        el: '#about',
        onStart: function(el) {
          var nav;
          nav = document.querySelector('.nav-container');
          return nav.classList.remove('show');
        }
      }
    }
  }
}
</script>
