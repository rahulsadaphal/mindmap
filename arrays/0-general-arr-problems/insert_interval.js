class Solution {
    insert(intervals, newInterval) {

        function insertAtRightPlace() {
            let insertionIndex = -1
            for (let i = 0; i < intervals.length - 1; i++) {
                if (newInterval[0] > intervals[i][0] && newInterval[0] < intervals[i + 1][0]) {
                    insertionIndex = i
                }
            }
            return insertionIndex
        }

        const insertFirst = insertAtRightPlace()
        // console.log("insertFirst - ", insertFirst)

        function final() {
            let start, end, index = 0
            for (let i of newInterval) {
                for (let j = insertFirst; j < intervals.length; j++) {
                    if (i >= intervals[j][0] && i <= intervals[j][1]) {
                        // console.log(i + ' falls between ' + intervals[j][0] + ' and ' + intervals[j][1])
                        if (index == 0) {
                            start = j
                            index++
                        } else {
                            end = j
                        }
                        break;
                    } else if (i > intervals[j][1] && i < intervals[j + 1][0]) {
                        // console.log(i + ' falls between ' + intervals[j][1] + ' and ' + intervals[j + 1][0])
                        intervals[j][1] = i
                        break;
                    }
                }

            }
            // console.log(start, end)
            if (start != undefined && end != undefined) {
                let split1
                let finalArr = []
                if (start > 0) {
                    split1 = intervals.slice(0, start)
                }
                finalArr.push(...split1)
                const midArr = [intervals[start][0], intervals[end][1]]
                finalArr.push(midArr)
                const endArr = intervals.slice(end + 1, intervals.length)
                finalArr.push(...endArr)
                return finalArr
            } else {
                return intervals
            }
        }
        const f = final()
        // console.log("finalArr - ", f)
        return f
    }
}

let intervals = [[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]]
let newInterval = [4, 8]

// intervals = [[1, 3], [6, 9]]
// newInterval = [2, 5]

const resp = new Solution().insert(intervals, newInterval)
console.log(resp)