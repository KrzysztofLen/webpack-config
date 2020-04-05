import './index.scss';
import img1 from './assets/img/1.jpg';

const element = document.createElement('div');
const p: HTMLElement = document.createElement('p');
const text: string = 'Hello from webpack dev server!';
p.textContent = text;
const myIcon = new Image();
myIcon.src = img1;

element.appendChild(myIcon);

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

// data.forEach((element: any) => {
//   p.textContent = element;
//   document.body.append(p);
// });

function test(el: any) {
  return el;
}
test(1);

const objectTest = {
  objectData: 'Hello world',
};

const { objectData } = objectTest;

document.write(objectData);
