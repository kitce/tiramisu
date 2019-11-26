import Vue from 'vue';
import Component from 'vue-class-component';
import styles from './styles.scss';

const template: string = require('./App.html'); // eslint-disable-line @typescript-eslint/no-var-requires

interface IData {
  message: string;
}

@Component({
  template
})
export default class App extends Vue {
  styles = styles;

  data (): IData {
    return {
      message: 'Vue example'
    };
  }
}
