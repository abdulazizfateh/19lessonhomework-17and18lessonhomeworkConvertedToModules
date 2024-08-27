// TASK 5 ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// 5. Arrey ichidagi juft raqamlarni boshqa bir arrey ga solib qaytaruvchi function yarating 

const seperateTheEven = (arr) => {
    let evenNums = [];
    for (let i in arr) {
        if (arr[i] % 2 == 0) {
            evenNums.push(arr[i]);
        }
    }
    return evenNums;
}
export { seperateTheEven };