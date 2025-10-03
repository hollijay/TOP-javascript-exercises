const sumAll = function(a,b){
    if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";
    if((a<0 || b<0) ){
        return "ERROR"
    }
    let max, min, sum = 0 

    if(a>b){
        max=a
        min=b
    }

    else{
        max=b
        min=a
    }
    for(let i=min; i<=max; i++){
        sum+=i;
    };
    return sum
};

// Do not edit below this line
module.exports = sumAll;
