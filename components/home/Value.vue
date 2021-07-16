<template lang="pug">
  section#value
    .text-box( v-parallax="-0.25" )
      .sizer
        .content
          div
            p
              | 資産を形成・運用していくうえで、
              | 数字で表れている事実や予測値の定量分析、
              | 数字に現れない事柄の定性分析も考慮します。
            p
              | 一人一人に合わせたファイナンシャルゴールを設定し
              | それに合ったプランをご提案します。
    .title-box
      .sizer
        .content
          h1
            .jp
              span 当社の取り組み
              | 定量 × 定性調査
            .en
              | Value
</template>
<i18n>
  {
    "ja": {},
    "en": {}
  }
</i18n>

<style lang="stylus" scoped>
#value
  display flex
  flex-wrap wrap
  @media (max-width: 767px)
    flex-direction column-reverse
.text-box,
.title-box
  position relative
  width 50vw
  flex 0 1 50vw
  @media (max-width: 767px)
    width 100vw
    flex 0 1 auto
  .content
    position absolute
    top 0
    left 0
    right 0
    bottom 0
    display flex
    align-items center
    justify-content center

.text-box
  padding 40px
  background-color $black
  p
    line-height 32px
    max-width 480px
    color $textContrast
    @media (max-width: 639px)
      line-height 26px
      font-size 14px

.title-box
  color $textContrast
  background-image url('/images/misc/bg-value.jpg')
  background-position center center
  background-size cover
  .content
    padding 80px
    justify-content flex-start
    h1
      margin 0
      font-weight normal
      .jp
        margin-bottom 60px
        font-size 32px
        @media (max-width: 1279px)
          font-size 26px
        @media (max-width: 1023px)
          font-size 20px
        span
          display block
          font-size 16px
          font-weight 600
      .en
        font-size 112px
        font-weight 300
        @media (max-width: 1279px)
          font-size 82px
        @media (max-width: 1023px)
          font-size 60px
.sizer
  position relative
  padding-top 90%
  @media (max-width: 1279px)
    padding-top 100%
</style>

<script>
</script>
