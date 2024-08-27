// TASK 4 ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// 4. arrey ichida objectlar bor userdan input orqali qiymat olib arrey ichidagi object 
// dan shu qiymatga teng bo’lgan obj topish 


// Using array find method 

let inputValue = prompt('Enter any info of the user');
let arr = [
    {
        name: 'Abdulaziz',
        id: 23733
    },
    {
        name: 'Muhammadjon',
        id: 23734
    }
];

const findTheCorrespondingValue = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let values = Object.values(arr[i]);
        let findTheValue = values.find((item) => item == inputValue) // item objectni ichidagi asl data type, 
        // inputValue bu promptda olingani sabab string. Lekin biz strictmas tenglik qo'yganmiz (==). Shunga to'gri chiqyapti
        if (findTheValue) {
            return arr[i];
        }
    }
    return 'Error';
}
export { arr, findTheCorrespondingValue }; // no need to call inputValue(prompt) as the prompt
// is a Window object 



// Using inner loops

// let inputValue = prompt('Enter any info of the user');
// let arr = [
//     {
//         name: 'Abdulaziz',
//         id: 23733
//     },
//     {
//         name: 'Muhammadjon',
//         id: 23734
//     }
// ];
// const findTheCorrespondingValue = (arr) => {
//     let response = 'Error';
//     for (let i = 0; i < arr.length; i++) { // i = 0, 1
//         let values = Object.values(arr[i]);
//         for (let k = 0; k < values.length; k++) {
//             if (values[k] == inputValue) {
//                 response = arr[i];
//             }
//         }
//     }
//     return response;
// }