import Vue from 'vue';
import './main.scss';

const root = new Vue({
  el: '#root',
  components: {
    app: App
  }
});

if (module.hot) {
  module.hot.accept();
}
