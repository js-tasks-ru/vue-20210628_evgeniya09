import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'CounterButton',
  props: {
    count: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    increment() {
      const result = this.count + 1;
      this.$emit('update:count', result);
    },
  },

  // Шаблон потребуется отредактировать
  template: `<button type="button" @click="increment">{{ count }}</button>`,
});
