import './index.scss';
import App from './components/App';

const app = new App('Basic example');

const root = document.getElementById('root') as HTMLElement;
root.appendChild(app.render());
