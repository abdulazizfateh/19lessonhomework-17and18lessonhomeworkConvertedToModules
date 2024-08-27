// TASK 3 |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// 3. palindrom string 

const checkThePalindrome = (str) => {
    let newStr = str.split('').reverse().join('');
    if (str.toLowerCase() == newStr.toLowerCase()) {
        return true;
    }
    return false;
}
export { checkThePalindrome };
