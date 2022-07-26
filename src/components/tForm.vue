<!-- eslint-disable prettier/prettier -->
<template>
  <div class="section__row-form">
            <div class="form-container">
              <t-input
                :innerLabel="'Наименование товара'"
                :placeholder="'Введите наименование товара'"
                :errorInner="'Название товара не введено'"
                :type="'text'"
                v-model.trim="newItem.title"
                :error="checkTitle"
              />
              <t-area
                :innerLabel="'Описание товара'"
                :placeholder="'Введите описание товара'"
                v-model="newItem.desc"
              />
              <t-input
                :innerLabel="'Ссылка на изображение товара'"
                :placeholder="'Введите ссылку'"
                :errorInner="'Ссылка не введена или введена неправильно'"
                :type="'text'"
                v-model.trim="newItem.img"
                :error="checkLink"
              />
              <t-input
                :innerLabel="'Цена товара'"
                :placeholder="'Введите цену'"
                :errorInner="'Стоимость не введена или введена неверно'"
                :type="'text'"
                v-model.trim="newItem.price"
                :error="checkPrice"
                @input="priceMask"
              />
              <t-button
                @click.native="insertItem"
                :innerText="'Добавить товар'"
                :class="{ disabled: !enableButton }"
              />
            </div>
          </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
import TArea from './UI/tArea.vue'
import TButton from './UI/tButton.vue'
import TInput from './UI/tInput.vue'
export default {
  name: 'tForm',
  components: {TButton, TInput, TArea},
  data() {
    return {
        newItem: {
        img: '',
      },
    }
  },
  methods: {
    insertItem() {
      this.newItem.title
      this.newItem.desc
      this.newItem.price
      this.newItem.currensy = ' руб.'
      this.newItem.img
      this.newItem.key = Date.now()
      this.$emit('newItem', this.newItem)
      this.newItem = {}
    },
    priceMask() {
      this.newItem.price = this.newItem.price.replace(/\D/g, '')
      let reversedPrice = this.newItem.price.split('').reverse()
      for (let i = 0; i < reversedPrice.length; i += 3) {
        reversedPrice[i] = reversedPrice[i] + ' '
      }
      this.newItem.price = reversedPrice.reverse().join('')
    },
  },
  computed: {
    checkTitle() {
      if (this.newItem.title !== '') {
        return false
      }
      return true
    },
    checkLink() {
      let str = this.newItem.img
      if (str !== '') {
        if (str.indexOf('https://', 0) !== -1) {
          return false
        }
        return true
      }
      return false
    },
    checkPrice() {
      if (this.newItem.price !== '') {
        return false
      }
      return true
    },
    enableButton() {
      if (
        !this.checkPrice &&
        !this.checkTitle &&
        !this.checkLink &&
        this.newItem.img !== ''
      ) {
        return true
      }
      return false
    },
  },
}
</script>
<style lang="scss" scoped>
.section__row-form {
    max-width: 25%;
    width: 100%;
    @media (max-width: 1024px) {
      max-width: 33%;
    }
    @media (max-width: 768px) {
      max-width: 100%;
    }
  }
  
</style>
