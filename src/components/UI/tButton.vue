<!-- eslint-disable prettier/prettier -->
<template>
  <button :class="className" >{{innerText}}</button>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
export default {
  name: 'tButton',
  components: {},
  data() {
    return {}
  },
  props: {
    placeholder: {
        type: [String, Number],
        default: '',
    },
    className: {
        type: String,
        default: 'button',
    },
    innerText: {
        type: [String, Number],
        default: '',
    },
  },
}
</script>
<style lang="scss" scoped>
button {
  border-radius: 10px;
  text-align: center;
  padding: 10px 0px;
  font-size: 12px;
  line-height: 15px;
  margin-top: 20px;
  transition: all 0.4s ease;
}
.button.disabled {
  color: #B4B4B4;
  background: #EEEEEE;
  border: 1px solid #FF8484;
  pointer-events: none;
}
.button {
  color: black;
  background: white;
  border: 1px solid #30b830;
}
</style>
