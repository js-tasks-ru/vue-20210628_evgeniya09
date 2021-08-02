import { createApp } from './vendor/vue.esm-browser.js';

const app = createApp({
  data() {
    return {
      firstValue: null,
      secondValue: null,
      operand: null,
    };
  },
  computed: {
    result() {
      switch (this.operand) {
        case '+':
          return this.firstValue + this.secondValue;
        case '-':
          return this.firstValue - this.secondValue;
        case '*':
          return this.firstValue * this.secondValue;
        case '/':
          return this.firstValue / this.secondValue;
        default:
          return 0;
      }
    },
  },
});
app.mount('#app');
