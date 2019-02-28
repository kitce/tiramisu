import './index.scss';
import App from './components/App';

const app = new App('Basic example');

const root = <HTMLElement>document.getElementById('root');
root.appendChild(app.render());
