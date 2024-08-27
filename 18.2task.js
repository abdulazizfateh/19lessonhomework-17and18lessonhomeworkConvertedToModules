// TASK 2 ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// 2. “1java2script3 5deve6lo4per” shu string orasidagi sonlarni 1 ta arreyga soling, 
// so'zlarni boshqa bir stringa o’zlashtiring va return qiling 

let str = '1java2script3 5deve6lo4per';

const seperateTheChracters = (str) => {
    let numbers = [];
    let string = '';
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(str[i]) && str[i] != " ") {
            numbers.push(str[i]);
        } else {
            string += str[i];
        }
    }
    return { numbers, string };

}
export { str, seperateTheChracters };