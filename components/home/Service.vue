<template lang="pug">
  section#service
    .container
      h1.typo
        | Service
        span
          | 取扱サービス
      .content
        h3 投資助言業務
        p
          | 投資助言業（法2条8項11号）とは、相手方に対して、
          | 「有価証券の価値等」「金融商品の価値等の分析に基づく投資判断」に関し、「口頭、文書、その他の方法」によって助言を行い、
          | その対価として報酬を頂くことを内容としています。
        p
          | 特定の金融商品の提供元（証券会社など）に依存せず、あらゆる商品からお客様に適した商品を選定しアドバイスいたします。
        p
          | そのため、お客様にふさわしい商品の提案およびポートフォリオ構築を助言させていただきます。
        p
          | お客様のパートナーとして、次世代に渡って中長期での資産運用を支援させて頂くことを目指しております。
    //- .services
      .order-num.typo
        .order-num-inner
          .order1.active 01.
          .order2 02.
          .order3 10.
          .order4 100.
          .order5 ex.
      .content
        .step.step1( v-scroll="step1" )
          | test
        .step.step2( v-scroll="step2" )
          | test
        .step.step10( v-scroll="step10" )
          | test
        .step.step100( v-scroll="step100" )
          | test
        .step.step-ex1( v-scroll="stepEx" )
          | test
        .step.step-ex1
          | test
</template>
<i18n>
  {
    "ja": {},
    "en": {}
  }
</i18n>


<style lang="stylus" scoped>
section#service
  margin-top -200px
  padding 400px 0 200px
  color $textContrast
  background-image url('/images/misc/bg-service.jpg')
  background-position center center
  background-size cover
  @media (max-width: 639px)
    padding 300px 0 120px
  h1
    font-size 44px
    font-weight 300
    span
      display block
      margin-top 20px
      color $textContrast
      font-size 20px
      font-weight normal

.content
  width 80%
  padding 40px 0
  border-top 1px solid $primary
  @media (max-width: 1279px)
    width 100%
  h3
    font-size 18px
  p
    line-height 32px
    @media (max-width: 639px)
      line-height 26px
      font-size 14px

/*
.order-num
  position sticky
  top 200px
  align-self flex-start
  flex 0 0 auto
  width 20%
  height 80px
  line-height 80px
  color $primary
  font-size 80px
  overflow hidden
  @media (max-width: 1500px)
    width 30%
  @media (max-width: 1050px)
    font-size 60px
  @media (max-width: 750px)
    font-size 34px
    letter-spacing -.1rem
  .order-num-inner
    transition transform .3s ease
  &.step2
    .order-num-inner
      transform translate3d(0, -80px, 0)
  &.step10
    .order-num-inner
      transform translate3d(0, -160px, 0)
  &.step100
    .order-num-inner
      transform translate3d(0, -240px, 0)
  &.step-ex
    .order-num-inner
      transform translate3d(0, -320px, 0)
*/
</style>

<script>
export default {
   methods: {
    step1: function(evt, el) {
      var pos, stepNum;
      stepNum = document.querySelector('.order-num');
      pos = el.getBoundingClientRect().top + window.pageYOffset;
      pos = pos - 250;
      if (window.scrollY > pos) {
        return stepNum.classList.add('step1');
      } else if (window.scrollY < pos) {
        return stepNum.classList.remove('step1');
      }
    },
    step2: function(evt, el) {
      var pos, stepNum;
      stepNum = document.querySelector('.order-num');
      pos = el.getBoundingClientRect().top + window.pageYOffset;
      pos = pos - 250;
      if (window.scrollY > pos) {
        return stepNum.classList.add('step2');
      } else if (window.scrollY < pos) {
        return stepNum.classList.remove('step2');
      }
    },
    step10: function(evt, el) {
      var pos, stepNum;
      stepNum = document.querySelector('.order-num');
      pos = el.getBoundingClientRect().top + window.pageYOffset;
      pos = pos - 250;
      if (window.scrollY > pos) {
        return stepNum.classList.add('step10');
      } else if (window.scrollY < pos) {
        return stepNum.classList.remove('step10');
      }
    },
    step100: function(evt, el) {
      var pos, stepNum;
      stepNum = document.querySelector('.order-num');
      pos = el.getBoundingClientRect().top + window.pageYOffset;
      pos = pos - 250;
      if (window.scrollY > pos) {
        return stepNum.classList.add('step100');
      } else if (window.scrollY < pos) {
        return stepNum.classList.remove('step100');
      }
    },
    stepEx: function(evt, el) {
      var pos, stepNum;
      stepNum = document.querySelector('.order-num');
      pos = el.getBoundingClientRect().top + window.pageYOffset;
      pos = pos - 250;
      if (window.scrollY > pos) {
        return stepNum.classList.add('step-ex');
      } else if (window.scrollY < pos) {
        return stepNum.classList.remove('step-ex');
      }
    }
  }
}
</script>
