import './main.scss';
import App from './components/App/App.component';

const app = new App('Vanilla example');

const root = document.getElementById('root') as HTMLElement;
root.appendChild(app.render());

if (module.hot) {
  module.hot.accept();
}
