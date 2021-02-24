import './styles.scss';
import LazyLinePainter from 'lazy-line-painter';

 let leavesRight = document.querySelector('#leaves_right');
 let leavesLeft = document.querySelector('#leaves_left');
 let faceRight = document.querySelector('#face_right');
 let faceLeft = document.querySelector('#face_left');
 let stroke = document.querySelector('#stroke');

 let strokeAnimation = new LazyLinePainter(stroke, {
   ease: 'easeLinear',
   strokeWidth: 100,
   strokeOpacity: 1,
   strokeColor: '#FFD295',
   strokeCap: 'square',
 });

 let leavesRightAnimation = new LazyLinePainter(leavesRight, {
   ease: 'easeLinear',
   strokeWidth: 3,
   strokeOpacity: 1,
   strokeColor: '#D5C5BD',
   strokeCap: 'round',
   reverse: true,
 });

 let leavesLeftAnimation = new LazyLinePainter(leavesLeft, {
   ease: 'easeLinear',
   strokeWidth: 3,
   strokeOpacity: 1,
   strokeColor: '#F9BA3E',
   strokeCap: 'round',
   reverse: true,
 });

 let faceRightAnimation = new LazyLinePainter(faceRight, {
   ease: 'easeLinear',
   strokeWidth: 2.6,
   strokeOpacity: 1,
   strokeColor: '#4C4948',
   strokeCap: 'round',
   reverse: true,
 });

 let faceLeftAnimation = new LazyLinePainter(faceLeft, {
   ease: 'easeInOutQuad',
   strokeWidth: 2.9,
   strokeOpacity: 1,
   strokeColor: '#4C4948',
   strokeCap: 'round',
   reverse: true,
 });

(function () {
  document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
       

        leavesRightAnimation.paint();
        leavesLeftAnimation.paint();
        faceLeftAnimation.paint();
        faceRightAnimation.paint();
        strokeAnimation.paint();
        
        
    }
  };
})();

