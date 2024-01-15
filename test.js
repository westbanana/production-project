const arr = [[58, 71], [64, 41], [96, 14], [26, 37], [11, 67], [84, 2], [72, 0], [16, 95], [74, 100], [60, 98], [8, 45], [6, 59], [69, 32], [93, 12], [26, 56], [9, 39], [61, 84], [54, 93], [43, 47], [84, 40], [95, 82], [17, 85], [99, 41], [96, 24], [83, 10], [82, 62], [26, 81], [74, 96], [53, 0], [11, 72], [51, 35], [33, 3], [33, 52], [58, 94], [89, 92], [54, 85]];
// const func = (arr) => {
//     arr.sort();
//     const field = [];
//     let curNum = arr[0][0];
//     for (let i = 1; i < arr.length; i++) {
//         if (curNum !== arr[i][0]) {
//             field.push([arr[i][0], curNum]);
//             curNum = arr[i][0];
//         }
//     }
//     return field.map((e) => e[0] + e[1]).length - 1;
// };

const func = (arr) => {
    arr.sort((a, b) => a[0] - b[0]);
    let max = 0;
    for (let i = 1; i < arr.length; i++) {
        const cur = arr[i][0] - arr[i - 1][0];
        if (cur > max) {
            max = cur;
        }
    }
    return max;
};

console.log(func(arr));
