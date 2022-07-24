<!-- eslint-disable prettier/prettier -->

<template>
  <div class="item">
    <a href="">
      <div class="item-img"><img :src="item.img" alt="" /></div>
      <div class="item-text">
        <div class="item-text__title">{{ item.title }}</div>
        <div class="item-text__desc">{{ item.desc }}</div>
        <div class="item-text__price">{{ item.price + item.currensy}}</div>
      </div>
    </a>
    <div @click="deleteItem" class="item-delete"><img src="../../src/assets/images/delete.png" alt=""></div>
  </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
export default {
  name: 'tItem',
  components: {},
  data() {
    return {}
  },
  props: {
    item: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  methods: {
    deleteItem() {
      this.$emit('deleteItem', this.item.key)
    },
  },
}
</script>
<style lang="scss" scoped>
.item {
  border-radius: 4px;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
  position: relative;
  &-img {
    position: relative;
    padding-top: 61%;
    max-height: 200px;
    width: 100%;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    overflow: hidden;
    & img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      object-fit: cover;
      width: 100%;
      max-width: 100%;
      aspect-ratio: 4/2.45;
    }
  }
  &-text {
    display: flex;
    flex-direction: column;
    padding: 16px 16px 24px 16px;
    &__title {
      font-size: 20px;
      line-height: 25px;
      margin-bottom: 16px;
    }
    &__desc {
      margin-bottom: 32px;
    }
    &__price {
      font-weight: 600;
      font-size: 24px;
      line-height: 30px;
    }
  }
  &-delete {
    position: absolute;
    right: -8px;
    top: -8px;
    width: 32px;
    height: 32px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: #FF8484;
    border-radius: 10px;
    z-index: 2;
    & img {
      width: 16px;
      height: 16px;
    }
  }
}
</style>
