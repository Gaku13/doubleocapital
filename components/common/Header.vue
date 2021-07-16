<template lang="pug">
  headroom
    header
      nuxt-link.logo( to="/" )
        Logo
      nav
        a.nav-button( href="#" @click="click" )
          | menu
        .nav-container
          a.nav-close( href="#" @click="close" )
            X
          ul
            li
              nuxt-link( v-scroll-to="service" to ) Service
            li
              nuxt-link( v-scroll-to="about" to ) About
            li
              nuxt-link( v-scroll-to="contact" to ) Contact
</template>

<script>
import Logo from '~/static/images/logo.svg?inline'
import X from '~/static/images/icon/x.svg?inline'

import { headroom } from 'vue-headroom'

export default {
  components: {
    Logo,
    X,
    headroom,
  },
  data() {
    return {
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
      },
      contact: {
        el: '#contact',
        onStart: function(el) {
          var nav;
          nav = document.querySelector('.nav-container');
          return nav.classList.remove('show');
        }
      }
    };
  },
  methods: {
    click: function() {
      var nav;
      nav = document.querySelector('.nav-container');
      return nav.classList.add('show');
    },
    close: function() {
      var nav;
      nav = document.querySelector('.nav-container');
      return nav.classList.remove('show');
    }
  }
}
</script>

<style lang="stylus">
  header
    position relative
    display flex
    align-items center
    justify-content space-between
    height 80px
    padding 0 40px
    background $white
    transition transform .75s .25s ease, opacity .75s .25s ease, visibility .75s .25s
    // transform translateY(10px)
    // visibility hidden
    // opacity 0
    z-index $zindex-header
    /*.page.is-loaded &
      transform translateY(0)
      opacity 1
      visibility visible*/
    @media (max-width: 639px)
      height 50px
      padding 0 20px
  .logo
    svg
      width 240px
      height auto
      vertical-align bottom
      @media (max-width: 767px)
        width 200px
  nav
    .nav-button
      display none
      line-height 18px
      visibility hidden
      font-weight 700
      letter-spacing .1rem
      @media (max-width: 767px)
        display block
        visibility visible
    .nav-container
      position relative
      visibility visible
      @media (max-width: 767px)
        position fixed
        top 0
        right 0
        width 100vw
        height 100vh
        background-color $black
        transition transform .2s ease, visibility .2s ease
        transform translateX(100%)
        overflow-x hidden
        overflow-y auto
        visibility hidden
        &.show
          transform translateX(0)
          visibility visible
    .nav-close
      display none
      position absolute
      top 20px
      right 20px
      @media (max-width: 767px)
        display block
      svg
        width 32px
        height 32px
    ul
      display flex
      align-items center
      justify-content center
      list-style none
      margin 0
      padding 0
      li
        padding 0 20px
        a
          color $text
          font-size 18px
          letter-spacing .025rem
          text-decoration none
          transition color .3s
          @media (max-width: 1024px)
            font-size 16px
          @media (max-width: 767px)
            color $textContrast
          &:hover
            color $primary
            @media (max-width: 767px)
              color $white
      @media (max-width: 767px)
        display block
        padding 80px 30px
        li
          margin-bottom 30px
          a
            font-size 24px
            font-weight 900
</style>

