// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.


// let counter=0;

// function IncrementCounter(){
//     counter++;
//     console.log(counter);
// }

// function TimeInterval(fn,time){
//     setTimeout(function(){
//         fn();
//         TimeInterval(fn, time);
//     },time);
// }

// TimeInterval(IncrementCounter, 1000);






















let val = 0;

function setTimeoutPromisified() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, 10000);
  });
}

async function executeIterations() {
  let i = 0;
  let k = 0;

  while (i < 500) {
    await setTimeoutPromisified();
    val++;
    console.log("this is counter_val: " + val);
    console.log("this is i: " + i);
    i++;
    k++;
    console.log("curr i value is : ", i);
    console.log("this is k: " + k);
  }


  console.log("curr i value after loop is : ", i);
  console.log("curr k value after loop is : ", k);
}

executeIterations();














































// (Hint: setTimeout)