/**
 * Viết hàm countDown đếm ngược từ x về 0, mỗi lần đếm cách nhau 1s, sau đó hiển thị 'Happy new year'
 */
function countDown(x) {
  var i = x + 1;
  var setIn = setInterval(function(){
    --i;
    console.log(i)
    if(i === 0){
      clearInterval(setIn)
      console.log('Happy new year')
    }
  }, 1000)
}

countDown(5); 
