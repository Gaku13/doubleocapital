<template lang="pug">
  section#mission
    .container
      h1
        .typo Mission
        span
          | Double O Capital Ltd.が考える使命は、「本当の豊かさ」を追求することです。
      .content( v-parallax="0.1" )
        .text
          p
            | いつの時代も、人々は「不安」に苛まれています。世界では予測不明な大きな変化が起こり、
            | 情報化社会の中で情報の真偽を判断し未来を予測するのは困難なことです。
          p
            | 人生100年時代と言われる中、自身の将来や次世代を見越して不安を少しでも取り除くために、
            | 自分に合ったアドバイザーを選ぶという選択肢もその１つです。
          p
            | 幅広い知識を持ち、顧客に対し親身になって物事を考えられることが重要だと考えます。
          p
            | 真に投資家のためになることは何か？本当の豊かさを追求する、それが当社の使命だと考えます。
      //- a( href="https://" target="_blank" rel="noopener noreferrer nofollow" )

</template>

<i18n>
  {
    "ja": {},
    "en": {}
  }
</i18n>

<style lang="stylus" scoped>
section#mission
  padding 180px 0
  @media (max-width: 767px)
    padding 120px 0
h1
  margin 0 0 150px
  .typo
    margin-bottom 5px
    color $primary
    font-size 64px
    font-weight 300
    @media (max-width: 1279px)
      font-size 58px
    @media (max-width: 639px)
      font-size 40px
  span
    font-size 20px
    font-weight normal
    @media (max-width: 1279px)
      font-size 18px
    @media (max-width: 639px)
      font-size 16px
.content
  display flex
  justify-content flex-end
  @media (max-width: 1023px)
    justify-content center
  .text
    width 65%
    line-height 32px
    padding-top 40px
    border-top 1px solid $black
    @media (max-width: 1023px)
      width 100%
    @media (max-width: 639px)
      line-height 26px
      font-size 14px
</style>
