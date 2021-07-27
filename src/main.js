import foo from './foo';
import jsonObj from './foo.json';
import './main.scss';
import testString from './test.ts';
import testComponent from './test.tsx';

export default function () {
  console.log('foo obj: ', foo);
  console.log('jsonObj: ', jsonObj);
  console.log('testString: ', testString);
  console.log('testComponent: ', testComponent);
}

// ReactDOM.render(bar, document.getElementById('id'));
