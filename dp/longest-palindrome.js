

function palindrome(s) {
    s = s.split("")
    let temp = new Array(s.length)
    temp.fill(-1)
    let dp = []
    for (let i of s) {
        let pushArr = [...temp]
        dp.push(pushArr)
    }
    // console.log(dp)

    //fill diagonals
    for (let i = 0; i < dp.length; i++) {
        dp[i][i] = 1
    }
    // console.log(dp)
    let finalLen = 1
    let finaStr = s[0]

    for (let i = 0; i < dp.length - 1; i++) {
        for (let j = i + 1; j < dp.length; j++) {
            if (s[i] == s[j]) {
                finalLen = Math.max(finalLen, j - i + 1)
                finaStr = s.slice(i, j + 1).join("")
                dp[i][j] = 1
            }
        }
    }
    // console.log(dp)

    //start from positions greater than 2
    let len = dp.length
    for (let k = 3; k <= len; k++) {
        for (let i = 0; i < len - k + 1; i++) {
            let j = i + k - 1
            if (s[i] == s[j] && dp[i + 1][j - 1] == 1) {
                finalLen = Math.max(finalLen, j - i + 1)
                finaStr = s.slice(i, j + 1).join("")
                dp[i][j] = 1
            }
        }
    }
    return { finalLen, finaStr }
}

let s = 'abab' //3
// s = 'cbba'
// s = 'ac'
s = "civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"
let resp = palindrome(s)
console.log(resp)