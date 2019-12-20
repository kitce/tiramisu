import Vue from 'vue';
import Component from 'vue-class-component';
import styles from './styles.scss';

const template: string = require('./App.template.html'); // eslint-disable-line @typescript-eslint/no-var-requires

@Component({
  template,
  props: ['message']
})
export default class App extends Vue {
  private styles = styles;
}
