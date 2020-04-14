import './index.scss';
import { cube } from './math';

const p: HTMLElement = document.createElement('p');
const text = 'Hello from webpack dev server!';
p.textContent = text;
const myIcon = new Image();

const p2 = document.createElement('p');
const numbers1 = [1, 2, 3, 4, 5, 6];
const numbers2 = [7, 8, 9, 10, 11];
const numbers3 = [...numbers1, ...numbers2];
p2.textContent = numbers3.join(' ');
document.body.appendChild(p2);

const data: Array<string> = [
  'Hello from webpack!',
  'Subtitle from webpack',
  'Text paragraph',
];

const element = document.createElement('pre');

element.innerHTML = ['Hello webpack!', '5 cubed is equal to ' + cube(5)].join(
  '\n\n',
);

function test(el: any) {
  return el;
}
test(1);

const objectTest = {
  objectData: 'Hello world',
};

const { objectData } = objectTest;

document.write(objectData);
