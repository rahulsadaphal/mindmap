// https://www.geeksforgeeks.org/palindrome-partitioning-dp-17/


function isPalindrome(String, i, j)
{
	while (i < j)
	{
		if (String[i] != String[j])
 			return false; 
			
		i++;
		j--;
	}
	return true;
}

// Function to find the minimum number of cuts needed
// for palindrome partitioning
function minPalPartion(String, i, j)
{
	// Base case: If the substring is empty or a palindrome,
	// no cuts needed
	if (i >= j || isPalindrome(String, i, j))
		return 0;
		
	let ans = Number.MAX_VALUE, count;
	
	
	// Iterate through all possible partitions and find the
	// minimum cuts needed
	for(let k = i; k < j; k++)
	{
		count = minPalPartion(String, i, k) +
		minPalPartion(String, k + 1, j) + 1;
		ans = Math.min(ans, count);
	}
	return ans;
}


// palindromicPartition(str) {

// }
// Driver code
let str = "ababbbabbababa";
str = 'abbac'
str = 'abab'

let res = minPalPartion(str, 0, str.length-1)
console.log(res)
