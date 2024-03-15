// https://leetcode.com/problems/3sum/

// var threeSum = function (nums) {
//     let triplets = [[]]
//     for (let i of nums) {
//         let temp = []
//         for (let j of triplets) {
//             temp.push([...j, i])
//         }
//         triplets.push(...temp)
//     }
//     triplets = triplets.filter(el => el.length == 3)


//     let ans = []


//     for (let i = 0; i < triplets.length; i++) {

//         if (triplets[i][0] + triplets[i][1] + triplets[i][2] == 0) {
//             let temp = [triplets[i][0], triplets[i][1], triplets[i][2]]
//             temp.sort((a, b) => a - b)
//             let idx = ans.findIndex(el => JSON.stringify(el) == JSON.stringify(temp))
//             if (idx == -1) {
//                 ans.push(temp)
//             }
//         }
//     }


//     return ans
// };


// function threeSum(nums) {
// 	const results = []

// 	// obviously irrelevant if we don't have at least 3 numbers to play with!
// 	if (nums.length < 3) return results

// 	// having the numbers in ascending order will make this problem much easier.
// 	// also, knowing the overall problem  will take at least O(N^2) time, we can
// 	// afford the O(NlogN) sort operation
// 	nums = nums.sort((a, b) => a - b)

//     // if the question asks us for a custom target, we can control it here
// 	let target = 0

// 	for (let i = 0; i < nums.length - 2; i++) {
// 		// `i` represents the "left" most number in our sorted set.
// 		// once this number hits 0, there's no need to go further since
// 		// positive numbers cannot sum to a negative number
// 		if (nums[i] > target) break

// 		// we don't want repeats, so skip numbers we've already seen
// 		if (i > 0 && nums[i] === nums[i - 1]) continue

// 		// `j` represents the "middle" element between `i` and `k`.
// 		// we will increment this up through the array while `i` and `k`
// 		// are anchored to their positions. we will decrement `k` for
// 		// for each pass through the array, and finally increment `i`
// 		// once `j` and `k` meet.
// 		let j = i + 1

// 		// `k` represents the "right" most element
// 		let k = nums.length - 1

// 		// to summarize our setup, we have `i` that starts at the beginning,
// 		// `k` that starts at the end, and `j` that races in between the two.
// 		//
// 		// note that `i` is controlled by our outer for-loop and will move the slowest.
// 		// in the meantime, `j` and `k` will take turns inching towards each other depending
// 		// on some logic we'll set up below. once they collide, `i` will be incremented up
// 		// and we'll repeat the process.

// 		while (j < k) {
// 			let sum = nums[i] + nums[j] + nums[k]

// 			// if we find the target sum, increment `j` and decrement `k` for
// 			// other potential combos where `i` is the anchor
// 			if (sum === target) {
// 				// store the valid threesum
// 				results.push([nums[i], nums[j], nums[k]])

// 				// this is important! we need to continue to increment `j` and decrement `k`
// 				// as long as those values are duplicated. in other words, we wanna skip values
// 				// we've already seen. otherwise, an input array of [-2,0,0,2,2] would result in
// 				// [[-2,0,2], [-2,0,2]].
// 				//
// 				// (i'm not a fan of this part because we're doing a while loop as we're
// 				// already inside of another while loop...)
// 				while (nums[j] === nums[j + 1]) j++
// 				while (nums[k] === nums[k - 1]) k--

// 				// finally, we need to actually move `j` forward and `k` backward to the
// 				// next unique elements. the previous while loops will not handle this.
// 				j++
// 				k--

// 			// if the sum is too small, increment `j` to get closer to the target
// 			} else if (sum < target) {
// 				j++

// 			// if the sum is too large, decrement `k` to get closer to the target
// 			} else { // (sum > target)
// 				k--
// 			}
// 		}
// 	}

// 	return results
// };


function threeSum(nums) {
	const results = new Set()
	nums = nums.sort((a, b) => a - b)
	console.log(nums)
	for (let i = 0; i < nums.length - 2; i++) {
		let j = i + 1
		let k = nums.length - 1
		while (j < k) {
			if (nums[i] + nums[j] + nums[k] > 0) {
				k--
			} else if (nums[i] + nums[j] + nums[k] < 0) {
				j++
			}
			else {
				results.add(JSON.stringify([nums[i], nums[j], nums[k]]))
				j++
				k--
			}
		}
	}
	return [...results].map(el => JSON.parse(el))
};

let nums = [-1, 0, 1, 2, -1, -4] //[[-1,-1,2],[-1,0,1]]
// nums = [4, -8, -9, 9, 10, -3, 13, 12, 9, 8, 9, 5, -4, -8, 7, -12, -14, -11, -10, -6, 2, 7, -3, 9, -8, 9, -2, 11, 3, 8, 7, -8, -15, 13, 9, 3, -5, -1, 0, -11, -7, -5, 1, 4, -6, -7, -1, -13, -11, 4, -4, -2, -12, 0, -7, -5, -13, 6, 13, -3, -9, 5, -4, -8, 3, -10, 10, 5, 5, -13, 1, 13, -11, -13, -6, -10, -4, 1, -8, -8, -10, -4, 6, -6, 3, 14, -4, 5, -3, -5, 9, 4, -15, -9, 3, -4, -4, -10, 8, 8, -8, -5, -2, -11]
let resp = threeSum(nums)
console.log(resp)