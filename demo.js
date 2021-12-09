// A palindrome is a sequence of numbers or letters that is the same
// if read both forward and backward(i.e.abcba, abccba).

// Given an array of letters as input, write a
// function that could
// return the number of subsequence palindromes in the array.

// Example: [a, a, b, b, a] as input would
// return 8. The possible palindromes are a, a, b, b, a, aa, bb, abba.
//     [a, a, b, b, a]


    function subSeqPalindromes(params)
    {
        let n = params.length
        
        let result = Array(n).fill().map(() => Array(n).fill(0));;
        let palindrome = Array(n).fill().map(() => Array(n).fill(false));
    
 
        for (let i = 0; i < n; i++){
            palindrome[i][i] = true;
            
        }
  
        for (let i = 0; i < n - 1; i++) {
            if (params[i] == params[i + 1]) {
                palindrome[i][i + 1] = true;
                result[i][i + 1] = 1;
                
            }
        }
   
  
        for (let gap = 2; gap < n; gap++) {
            
            for (let i = 0; i < n - gap; i++) {
                
              
                let j = gap + i;
  
                
                if (params[i] == params[j] && palindrome[i + 1][j - 1]){
                    palindrome[i][j] = true;
                }
         
                    
                if (palindrome[i][j] == true){
                    result[i][j] = result[i][j - 1] + result[i + 1][j]
                               + 1 - result[i + 1][j - 1];
                }
                else{
                    result[i][j] = result[i][j - 1] + result[i + 1][j]
                               - result[i + 1][j - 1];
                }
            }
      
        }
        return result[0][n - 1]+params.length;
    }
     

    let params = ["a","a","b","b","a"];
    console.log(subSeqPalindromes(params))