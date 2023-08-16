var summaryRanges = function(nums) {
    if (nums.length === 0) return [];

    const resultArray = [];
    let start = nums[0];
    let end = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === end + 1) {
            end = nums[i];
        } else {
            resultArray.push(getRangeString(start, end));
            start = end = nums[i];
        }
    }

    resultArray.push(getRangeString(start, end));

    return resultArray;
};

function getRangeString(start, end) {
    return start === end ? start.toString() : `${start}->${end}`;
}

console.log(summaryRanges([0, 1, 2, 4, 5, 7]));
console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]));
