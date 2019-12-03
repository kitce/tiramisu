import Vue from 'vue';
import './index.scss';
import App from './components/App';

const root = new Vue({
  el: '#root',
  components: {
    app: App
  }
});
