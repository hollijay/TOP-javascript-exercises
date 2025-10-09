const fibonacci = function(n) {
    let count
    if (typeof n!== 'number') {
        count = parseInt(n)
    } else {
        count = n
    }

    if (n < 0) return "OOPS";
    if (n == 0) return 0;

    let dp = new Array(n+1)
    dp[0] = 0
    dp[1] = 1

    for(let i=2; i<=count; i++){
        dp[i] = dp[i-1] + dp [i-2]
    }

    return dp[count]
};

fibonacci(-1)
// Do not edit below this line
module.exports = fibonacci;
