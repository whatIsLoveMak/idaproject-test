<template>
  <div id="app">
    <section class="section main">
      <div class="container">
        <div class="title__row">
          <div class="title"><h1>Добавление товара</h1></div>
          <div class="select">
            <t-select
              @change="changeSort"
              :options="'default'"
              :modelValue="selectedSort"
            />
          </div>
        </div>
        <div class="section__row">
          <t-form @newItem="pushItem" />
          <div class="section__row-items">
            <transition-group v-if="items.length > 0" name="list">
              <t-item
                @deleteItem="deleteItem"
                :item="item"
                v-for="item in items"
                :key="item.key"
              />
            </transition-group>
            <h1 v-else>Список постов пуст</h1>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import TItem from './components/tItem.vue'
import TSelect from './components/UI/tSelect.vue'
import TForm from './components/tForm.vue'
export default {
  name: 'App',
  components: {
    TItem,
    TSelect,
    TForm,
  },
  data() {
    return {
      items: [
        {
          key: 1,
          title: 'Наименование товара2',
          desc: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: 10000,
          currensy: ' руб.',
          img: 'https://store.donanimhaber.com/56/8c/a2/568ca250412f91d354e278d0dd4597b5.jpg',
        },
        {
          key: 2,
          title: 'аименование товара1sAS',
          desc: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: 12000,
          currensy: ' руб.',
          img: 'https://store.donanimhaber.com/56/8c/a2/568ca250412f91d354e278d0dd4597b5.jpg',
        },
      ],
      selectedSort: 'По умолчанию',
    }
  },
  methods: {
    pushItem(elem) {
      this.items.push(elem)
      localStorage.setItem('item', JSON.stringify(this.items))
    },
    deleteItem(key) {
      this.items = this.items.filter((e) => e.key !== key)
      localStorage.setItem('item', JSON.stringify(this.items))
    },
    changeSort(elem) {
      if (elem === 'max price') {
        this.items.sort(function (a, b) {
          return b.price - a.price
        })
      } else if (elem === 'min price') {
        this.items.sort(function (a, b) {
          return a.price - b.price
        })
      } else if (elem === 'title') {
        this.items.sort(function (a, b) {
          return a.title.localeCompare(b.title)
        })
      }
    },
  },
  mounted() {
    const itemsData = localStorage.getItem('item')
    if (itemsData) {
      this.items = JSON.parse(itemsData)
    }
  },
}
</script>

<style lang="scss">
/*Обнуление*/
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap');
* {
  padding: 0;
  margin: 0;
  border: 0;
}
*,
*:before,
*:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
:focus,
:active {
  outline: none;
}
a:focus,
a:active {
  outline: none;
}
nav,
footer,
header,
aside {
  display: block;
}
html,
body {
  height: 100%;
  width: 100%;
  font-size: 100%;
  line-height: 1;
  font-size: 16px;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  font-family: 'Source Sans Pro', sans-serif;
}
input,
button,
textarea {
  font-family: inherit;
}
input::-ms-clear {
  display: none;
}
button {
  cursor: pointer;
}
button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
a,
a:visited {
  text-decoration: none;
  color: black;
}
a:hover {
  text-decoration: none;
}
ul li {
  list-style: none;
}
img {
  vertical-align: top;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}
/*--------------------*/
.container {
  padding: 0px 32px;
  @media (max-width: 1024px) {
    padding: 0px 16px;
  }
}
.section__row {
  display: flex;
  flex-direction: row;
  gap: 16px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  &-items {
    width: 100%;
  }
  &-items > span {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    gap: 16px;
    @media (max-width: 1024px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
}
.form-container {
  display: flex;
  flex-direction: column;
  padding: 24px;
  border-radius: 4px;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
}
.title__row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 32px 0px 16px 0px;
  & select {
    height: 36px;
    background: #fffefb;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
  }
  & .title {
    font-size: 28px;
    line-height: 35px;
    font-weight: 600;
    @media (max-width: 768px) {
      font-size: 22px;
      line-height: 30px;
    }
  }
}
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}
.list-enter-from,
.list-leave-to,
.list-enter {
  opacity: 0;
  transform: translateY(30px);
}
.list-move {
  transition: transform 1s;
}
</style>
