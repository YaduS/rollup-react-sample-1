import bar from './bar.jsx';
import foo from './foo';
import jsonObj from './foo.json';
import './main.scss';

export default function () {
  console.log('foo obj: ', foo);
  console.log('jsonObj: ', jsonObj);
}

ReactDOM.render(bar, document.getElementById('id'));
