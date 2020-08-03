/**
 * Viết hàm countDown đếm ngược từ x về 0, mỗi lần đếm cách nhau 1s, trả về promise, promise này resolve sau khi đã đếm xong
 */
function countDown(x) {
  return new Promise(function(resolve, reject){
    var i = x + 1;
    var setIn = setInterval(function(data){
      --i;
      console.log(i)
      if(i === 0){
        clearInterval(setIn)
        resolve(data)
      }
    }, 1000)
  })
}

function sayHappyNewYear() {
  console.log('Happy new year');
}

countDown(5).then(sayHappyNewYear);