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
  background: #EEEEEE;
  border-radius: 10px;
  text-align: center;
  color: #B4B4B4;
  padding: 10px 0px;
  font-size: 12px;
  line-height: 15px;
  margin-top: 20px;
}
</style>
