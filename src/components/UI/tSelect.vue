<!-- eslint-disable prettier/prettier -->
<template>
  <select v-model="modelValue" :class="className" @change="changeOption">
    <option  value="По умолчанию" disabled>По умолчанию</option>
    <option v-for="option in options" :key="option.value" :value="option.value">{{option.name}}</option>
  </select>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
export default {
  name: 'tSelect',
  components: {},
  data() {
    return {
       
    }
  },
  props: {
    className: {
        type: String,
        default: 'select',
    },
    modelValue: {
        type: String
    },
    options: {
        type: Array,
        default: () => []
    },
  },
  methods: {
    changeOption(event) {
        this.$emit('update:modelValue', event.target.value)
    },
  },
}
</script>
<style lang="scss" scoped></style>
