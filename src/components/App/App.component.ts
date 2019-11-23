import Vue from 'vue';
import Component from 'vue-class-component';
import styles from './styles.scss';

const template: string = require('./App.html');

@Component({
  template
})
export default class App extends Vue {
  styles = styles;
  
  data () {
    return {
      message: 'Vue example'
    };
  }
}
