import foo from './foo';
import jsonObj from './foo.json';
import './main.scss';
import testString from './test.ts';
import Test from './test.tsx';

export default function () {
  console.log('foo obj: ', foo);
  console.log('jsonObj: ', jsonObj);
  console.log('testString: ', testString);
  console.log('Test: ', Test);
}

export { foo, jsonObj, testString, Test };

// ReactDOM.render(bar, document.getElementById('id'));
