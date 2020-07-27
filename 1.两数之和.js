var twoSum = function (nums, target) {
  let res = []
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] + nums[j] === target) {
        res = [j, i]
        break
      }
    }
    if (res.length > 0) break
  }
  return res
}
