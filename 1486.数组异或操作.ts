/*
 * @lc app=leetcode.cn id=1486 lang=typescript
 *
 * [1486] 数组异或操作
 */

// @lc code=start
function xorOperation(n: number, start: number): number {
    let result = 0;
    for (let i = 0; i < n; i++) {
        result ^= start + 2 * i;
    }
    return result;
};
// @lc code=end

