<template lang="pug">
  section#about
    .about-container
      .data-box
        .inner
          h1 About
          .info
            p
              | ダブルオーキャピタル株式会社
              br
              | 静岡県裾野市深良153-5-103
            p
              | 代表
              br
              | 大庭 宏之
          .career
            .row
              .col
                | 2006年
              .col
                | 東京理科大学工学部電気工学科　卒業 
            .row
              .col
                | 2006年
              .col
                | 野村證券　入社
                br
                | 大阪・東京・神奈川・静岡にて個人および法人の資産運用コンサルティングを担当
            .row
              .col
                | 2021年
              .col
                | ダブルオーキャピタル　設立
            .row
              .col
                | 資格
              .col
                | プライマリープライベートバンカー
                br
                | （公益社団法人　日本証券アナリスト協会）
      .image-box
        .image
      .contact-box
        a( href="https://forms.gle/kKj8qcvpc3HmzLVn7" target="_blank" rel="noopener noreferrer nofollow" )
          .arrow
            IconArrow
          .content
            .en Contact
            .jp お問い合わせ

</template>
<i18n>
  {
    "ja": {},
    "en": {}
  }
</i18n>

<style lang="stylus" scoped>
.about-container
  display flex
  height 42vw
  @media (max-width: 1279px)
    height 62vw
  @media (max-width: 1023px)
    flex-wrap wrap
    height auto
.data-box
  display flex
  align-items center
  justify-content center
  width 42vw
  padding 40px
  background-color $black
  @media (max-width: 1023px)
    width 100%
  .inner
    line-height 26px
    color $textContrast
    font-size 14px
    text-align left
  h1
    margin-bottom 60px
    color $primary
    font-size 32px
    font-weight 300
  .info
    margin-bottom 40px
  .career
    margin-bottom 60px
    .row
      display flex
      justify-content flex-start
      margin-bottom 10px
      .col
        margin-right 1rem
        &:first-child
          width 60px
          flex 0 0 auto
        @media (max-width: 767px)
          line-height 20px
          font-size 12px
.image-box
  width 36vw
  background-image url('/images/misc/gov.jpg')
  background-size cover
  background-position center center
  @media (max-width: 1023px)
    width 50vw
    height 60vw
  @media (max-width: 767px)
    width 100vw
    height 80vw
    background-position top center
.contact-box
  width 22vw
  @media (max-width: 1023px)
    width 50vw
  @media (max-width: 767px)
    width 100vw
    height 50vw
  a
    position relative
    display flex
    align-items center
    justify-content center
    width 100%
    height 100%
    background-color $primary
    overflow hidden
    &::before
      content ''
      position absolute
      width 100px
      height 100px
      background-color $secondary
      border-radius 50%
      transition transform .25s ease-in-out
      transform scale(0)
      z-index 0
    .arrow
      display flex
      align-items center
      justify-content center
      position absolute
      top 40px
      right 40px
      width 60px
      height 60px
      background-color $black
      z-index 1
      @media (max-width: 767px)
        top 20px
        right 20px
        width 44px
        height 44px
      svg
        transition transform .25s ease-in-out
    .content
      position relative
      color $textContrast
      text-align center
      z-index 1
      .en
        margin-bottom 10px
        font-size 24px
    &:hover
      &::before
        transform scale(10)
      svg
        transform rotate(45deg)

</style>

<script>
import IconArrow from '~/static/images/icon/arrow.svg?inline'

export default {
  components: {
    IconArrow
  }
}
</script>
