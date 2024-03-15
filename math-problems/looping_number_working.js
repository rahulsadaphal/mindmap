class Solution {
    isLoopingNumber(n) {
        let slow = n;
        let fast = n;

        const calculateSumOfSquaresOfDigits = (number) => {
            let sum = 0;
            while (number > 0) {
                const digit = number % 10;
                sum += digit * digit;
                number = Math.floor(number / 10);
            }
            return sum;
        };

        do {
            slow = calculateSumOfSquaresOfDigits(slow);
            fast = calculateSumOfSquaresOfDigits(calculateSumOfSquaresOfDigits(fast));
            if (slow === 1||slow===n) return true; // Loop terminates when 1 is reached
        } while (slow !== fast); // Loop until slow and fast pointers meet
        
        return false; // If slow and fast meet without reaching 1, it's not a looping number
    }
}

let res = new Solution().isLoopingNumber(4)
console.log(res)