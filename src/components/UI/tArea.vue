<!-- eslint-disable prettier/prettier -->

<template>
    <label for="">
        <span>{{innerLabel}}</span>
        <textarea :class="className" :placeholder="placeholder" @input="input"></textarea>
        <div class="error-message">{{error}}</div>
    </label>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
export default {
  name: 'tArea',
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
        default: 'textarea',
    },
    innerLabel: {
        type: [String, Number],
        default: '',
    },
    error: {
         type: [String, Number],
        default: '',
    }
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
        margin-bottom: 16px;
        & span {
        font-size: 10px;
        line-height: 13px;
        margin-bottom: 4px;
        color: #49485E;
      }
    }
    textarea {
      height: 108px;
      padding: 10px 16px;
      background: #FFFEFB;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      resize: none;
    }
    .error-message {
      font-size: 8px;
      line-height: 10px;
      color: #FF8484;
    }
</style>
