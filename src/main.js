import bar from './bar.js';
import jsonObj from './foo.json';
import './main.scss';

export default function () {
  import('./foo.js').then(({ default: foo }) => console.log(foo));
  console.log('jsonObj: ', jsonObj);
}

ReactDOM.render(bar, document.getElementById('id'));
