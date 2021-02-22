import './styles.scss';
console.log("hello world!");

(function(){ 

    document.onreadystatechange = () => {

      if (document.readyState === 'complete') {

        let el1 = document.querySelector('#leaves_right');
        let myAnimation1 = new LazyLinePainter(el1, {"ease":"easeLinear","strokeWidth":3,"strokeOpacity":1,"strokeColor":"#D5C5BD","strokeCap":"round","reverse":true}); 
        myAnimation1.paint(); 
      }
    }

  })();