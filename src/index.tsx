const p: HTMLElement = document.createElement('p');
const text: string = 'Hello from webpack dev server!';
p.textContent = text;
document.body.append(p);

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
