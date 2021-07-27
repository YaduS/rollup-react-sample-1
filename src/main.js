import jsonObj from './foo.json';
import './main.scss';

export default function () {
  import('./foo.js').then(({ default: foo }) => console.log(foo));
  console.log('jsonObj: ', jsonObj);
}
