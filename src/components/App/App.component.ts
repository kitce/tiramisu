import styles from './styles.scss';

export default class App {
  message: string;

  constructor (message: string) {
    this.message = message;
  }
  
  render (): HTMLDivElement {
    const app = document.createElement('div');
    app.classList.add(styles.app);
    app.innerText = this.message;
    return app;
  }
}
