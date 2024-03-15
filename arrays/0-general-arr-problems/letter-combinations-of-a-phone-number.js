// https://leetcode.com/problems/letter-combinations-of-a-phone-number/
//this is almost same as generating all possible subsets from array problem

/*
Approach - Iterative
Initialize a Mapping: Create a dictionary that maps each digit from 2 to 9 to their corresponding letters on a telephone's buttons.
Base Case: If the input string digits is empty, return an empty list.
Iteratively Build Combinations: Start with an empty combination in a list and iteratively build the combinations by processing each digit in the input string.
For each existing combination, append each corresponding letter for the current digit, building new combinations.
Result: Return the generated combinations as the final result.
Complexity
Time complexity: ( O(4^n) ), where ( n ) is the length of the input string. In the worst case, each digit can represent 4 letters.
Space complexity: ( O(n) ), where ( n ) is the length of the input string.
*/

function letterCombinations(digits) {
    if (!digits) {
      return [];
    }
  
    const phoneMap = {
      '2': 'abc',
      '3': 'def',
      '4': 'ghi',
      '5': 'jkl',
      '6': 'mno',
      '7': 'pqrs',
      '8': 'tuv',
      '9': 'wxyz'
    };
  
    let combinations = [''];
  
    for (const digit of digits) {
      const newCombinations = [];
      for (const combination of combinations) {
        for (const letter of phoneMap[digit]) {
          newCombinations.push(combination + letter);
        }
      }
      combinations = newCombinations;
    }
  
    return combinations;
  }

let digits = "23" // ["ad","ae","af","bd","be","bf","cd","ce","cf"]
digits = "234"
// digits = "2" // [a, b, c]
// digits = "1"
console.log(letterCombinations(digits))