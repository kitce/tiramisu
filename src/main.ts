import Vue from 'vue';
import './main.scss';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const root = new Vue({ 
  el: '#root',
  components: {
    app: App
  }
});

if (module.hot) {
  module.hot.accept();
}
