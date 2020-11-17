// Code your solutions in this file
function writeCards(list){
    let arr1 = []
    for (let i = 0; i < list.length; i += 1){
        arr1.push(`Thank you, ${list[i]}, for the wonderful surprise gift!`)
    }
    return arr1
}

function countDown(num) {
    while (num >= 0) {
      console.log(num);
      num -= 1;
    }
  }