function absolutePermutation(n, k) {
    // Write your code here
let result = new Map();
    for(let i=1; i<=n; i++){
        let value = i <= k ? i+k : i-k;
        if(value>n){
            return [-1];
        }
        if(result.get(value)){
            value = i+k;
            if(value>n){
                return [-1];
            }
        }
        result.set(value,1)
    }
    return Array.from(result.keys())
 
}
