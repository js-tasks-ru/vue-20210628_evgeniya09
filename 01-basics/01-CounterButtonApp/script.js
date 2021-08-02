import { createApp } from './vendor/vue.esm-browser.js';

const app = createApp({
  data: function () {
    return {
      count: 0,
    };
  },
  methods: {
    counter: function () {
      return (this.count += 1);
    },
  },
});
app.mount('#app');
