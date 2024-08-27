// TASK 4 |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// 4. string harflari qaytarilmagan bo'lsa true yoki false 

const checkTheDuplicate = (str) => {
    let newStr = [];
    for (let i = 0; i < str.length; i++) {
        let findTheDuplicate = newStr.find((item) => {
            if (str[i] == item) {
                return true;
            } else {
                return false;
            }
        })
        if (!findTheDuplicate){
            newStr.push(str[i]);
        }
    }
    return newStr.join('') == str;
}
export { checkTheDuplicate };