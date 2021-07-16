<template lang="pug">
  //- .page( :class="{ 'is-loaded': dataLoadFinish }" )
  .page
    Header
    .nuxt-container
      Loading
      .bg-icon-container
        .bg-icon
          svg( width="0" height="0" style="position: absolute; top: 0; left: 0;" )
            clipPath( id="symbol" )
              path( d="M320,0 C496.731624,0 640,143.268889 640,320 C640,496.731624 496.731624,640 320,640 C143.268889,640 0,496.731624 0,320 C0,143.268889 143.268889,0 320,0 Z M322.222222,93.3326496 C195.150427,93.3326496 92.1369231,196.345299 92.1369231,323.418803 C92.1369231,333.220894 92.7498847,342.879832 93.9395679,352.359377 L201.880709,244.422654 C189.613019,268.953207 183.617345,296.155501 184.446154,323.589744 C183.611966,351.545299 189.905983,379.251282 202.736752,404.102564 C213.97094,425.241026 231.064957,442.690598 251.967521,454.358974 C273.459829,466.015385 297.606838,471.904274 322.052991,471.452991 C346.435897,471.82906 370.507692,465.94188 391.967521,454.358974 C392.579714,454.019188 393.188685,453.674481 393.794382,453.324904 L295.188355,551.932847 C304.055395,552.970653 313.076497,553.504274 322.222222,553.504274 C449.295726,553.504274 552.307692,450.490598 552.307692,323.418803 C552.307692,196.345299 449.295726,93.3326496 322.222222,93.3326496 Z M295.333333,241.555556 C303.868376,237.688889 313.206838,235.924786 322.565812,236.410256 C331.894017,235.965812 341.193162,237.750427 349.694017,241.613675 C358.196581,245.478632 365.654701,251.312821 371.454701,258.632479 C384.244444,277.704274 390.263248,300.517949 388.548718,323.418803 C390.075214,346.319658 383.875214,369.071795 370.94188,388.034188 C365.133333,395.34359 357.671795,401.169231 349.17265,405.032479 C340.673504,408.895726 331.377778,410.687179 322.052991,410.25641 C312.781197,410.646154 303.548718,408.834188 295.111111,404.97265 C286.673504,401.111111 279.270085,395.305983 273.505983,388.034188 C260.752137,369.008547 254.735043,346.261538 256.411966,323.418803 C254.695726,300.517949 260.71453,277.704274 273.505983,258.632479 C279.311111,251.276923 286.796581,245.420513 295.333333,241.555556 Z" id="Shape" fill="#231815" fill-rule="nonzero" )

          svg( width="640" height="640" viewBox="0 0 640 640" )
            image( xlink:href="/images/misc/mask-img.jpg" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" clip-path="url(#symbol)" )

      .nuxt-body
        nuxt
      Footer
</template>

<style lang="stylus">
.bg-icon-container
  position fixed
  display flex
  align-items center
  justify-content center
  top 0
  left 0
  width 100%
  height 100%
  z-index 0
  .bg-icon
    width 440px
    height 440px
    opacity .5
  svg
    width 100%
    height auto
.nuxt-container
  position relative
  z-index 3
.nuxt-body
  position relative
  min-height 100vh
  z-index 1

</style>

<script>
import Header from '~/components/common/Header.vue';
import Footer from '~/components/common/Footer.vue';
import Loading from '~/components/common/Loading.vue';
import LogoSymbol from '~/static/images/logo-symbol.svg?inline'

export default {
  components: {
      Header,
      Footer,
      Loading,
      LogoSymbol,
  },
  data: function() {
    return {
      dataLoadFinish: false
    };
  },/*
  mounted: function() {
    var page;
    page = document.querySelector('.page');
    page.classList.add('is-loading');
    return this.$nextTick(function() {
      var _this;
      _this = this;
      return setTimeout(function() {
        _this.dataLoadFinish = true;
      }, 1500);
    });
  }*/
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  }  
}
 </script>
