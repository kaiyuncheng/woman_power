import './styles.scss';
import LazyLinePainter from 'lazy-line-painter';


let leavesRight = document.querySelector('#leaves_right');
let leavesRightAnimation = new LazyLinePainter(leavesRight, {
  ease: 'easeLinear',
  strokeWidth: 3,
  strokeOpacity: 1,
  strokeColor: '#D5C5BD',
  strokeCap: 'round',
  reverse: true,
});
leavesRightAnimation.paint();

let stroke = document.querySelector('#stroke');
let strokeAnimation = new LazyLinePainter(stroke, {
  ease: 'easeLinear',
  strokeWidth: 100,
  strokeOpacity: 1,
  strokeColor: '#FFD295',
  strokeCap: 'round',
});
strokeAnimation.paint();

// (function () {
//   document.onreadystatechange = () => {
//     if (document.readyState === 'complete') {
//       let el = document.querySelector('#leaves_right');
//       let myAnimation = new LazyLinePainter(el, {
//         ease: 'easeLinear',
//         strokeWidth: 3,
//         strokeOpacity: 1,
//         strokeColor: '#D5C5BD',
//         strokeCap: 'round',
//         reverse: true,
//       });
//       myAnimation.paint();
//     }
//   };
// })();