import Vue from 'vue';
import Component from 'vue-class-component';
import styles from './App.styles.scss';
import template from './App.template.html';

@Component({
  template,
  props: ['message']
})
export default class App extends Vue {
  private styles = styles;
}
