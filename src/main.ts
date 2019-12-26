import Vue from 'vue';
import './main.scss';

new Vue({
  el: '#root',
  components: {
    app: App
  }
});

if (module.hot) {
  module.hot.accept();
}
