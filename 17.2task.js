// TASK 2 |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// 2. "abcd" => "a-bb-ccc-dddd" 

const repeatTheElements = (value, index) => {
    let repeatEach = '';
    for (let i = 1; i <= index; i++) {
        repeatEach += value;
    }
    return repeatEach;
}
const pickTheElement = (str) => {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        result += repeatTheElements(str[i], i + 1) + '-';
    }
    return result.slice(0, result.length - 1);
}

export { pickTheElement }; 
// There is no need to export (repeatTheElements() function) , and call it in the (main.js) file. 
// Because it is already called inside the exported function, (pickTheElement()). 