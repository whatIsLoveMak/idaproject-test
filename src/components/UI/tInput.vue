<!-- eslint-disable prettier/prettier -->

<template>
    <label for="">
      <span>{{innerLabel}}</span>
      <input :class="className" :placeholder="placeholder" :type="type" :value="value" @input="input">
      <div v-show="error" class="error-message">{{errorInner}}</div>
    </label>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
export default {
  name: 'tInput',
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
        default: 'input',
    },
    type: {
        type: String,
        default: '',
    },
    value: {
        type: [String, Number],
        default: '',
    },
    innerLabel: {
        type: [String, Number],
        default: '',
    },
    errorInner: {
         type: [String, Number],
        default: '',
    },
    error: {
      type: Boolean,
      required: false,
    },
  },
  methods: {
    input(event) {
      let value = event.target.value
      this.$emit('input', value)
    },
  },
}
</script>
<style lang="scss" scoped>
    label {
      display: flex;
      flex-direction: column;
      & span {
        font-size: 10px;
        line-height: 13px;
        margin-bottom: 4px;
        color: #49485E;
        position: relative;
        max-width: max-content;
      }
      & span::after {
        content: '';
        position: absolute;
        top: 0;
        right: -6px;
        width: 4px;
        height: 4px;
        background: #FF8484;
        border-radius: 50%;

      }
    }
    input {
      padding: 10px 16px;
      background: #FFFEFB;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      margin-bottom: 4px;
      &::placeholder {
        font-size: 12px;
        line-height: 15px;
        color: #B4B4B4;
      }
    }
    .error-message {
      font-size: 8px;
      line-height: 10px;
      color: #FF8484;
    }
</style>
