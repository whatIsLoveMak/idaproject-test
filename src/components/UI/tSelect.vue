<!-- eslint-disable prettier/prettier -->
<template>
  <select v-model="modelValue" :class="className" @change="changeOption">
    <option  value="default" selected disabled>По умолчанию</option>
    <option v-for="option in getSortItems" :key="option.value" :value="option.value">{{option.name}}</option>
  </select>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
export default {
  name: 'tSelect',
  components: {},
  data() {
    return {
      modelValue: 'default',
      default: [
        { value: 'min price', name: 'По цене min' },
        { value: 'max price', name: 'По цене max' },
        { value: 'title', name: 'По наименованию' },
      ],
    }
  },
  props: {
    options: {
        type: [String, Array],
    },
    className: {
        type: String,
        default: 'select',
    },
  },
  methods: {
    changeOption(event) {
        this.$emit('change', event.target.value)
    },
  },
  computed: {
    getSortItems() {
        if(this.options === 'default'){
            return this.default
        }
        return this.options
    },
  }
}
</script>
<style lang="scss" scoped></style>
