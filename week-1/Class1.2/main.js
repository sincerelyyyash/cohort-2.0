function findSum(a,b, fnToCall){
    let result = a+b;
    fnToCall(result);
}

function displayResult(data){
    console.log("Result of the sum is "+data);
}

function displayPassiveResult(data){
    console.log("sum is "+data);
}

// displayResult(findSum(10,16));
// displayPassiveResult(findSum(10,7))

findSum(10,26,displayResult);