/**
 * numbers 배열 내 요소의 합을 구하여 반환하는 함수
 * 
 * @param {Array} numbers - 덧셈 연산에 사용될 값들
 * @returns {number} sum - 덧셈 결과
 */
export const add = (numbers) => {
    if (numbers.indexOf('') >= 0) return NaN;
    
    let sum = 0;
    
    for (const number of numbers) {
        sum += +number;
    }

    return sum;
}