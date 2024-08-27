// TASK 6 ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// 6. Arrey ichidagi objectlarni id ga ko’ra malumotlarini chiqaruvchi function 

let arr = [
    {
        firstName: 'Abdulaziz',
        lastName: 'Ergashev',
        age: 18,
        nationality: 'Uzbekistan',
        id: 19111
    },
    {
        firstname: 'Muhammadjon',
        lastName: 'Shavkatov',
        age: 18,
        nationality: 'Uzbekistan',
        id: 17917
    }
];

const takeTheObjectFromId = (arr) => {
    let inputId = prompt('User ID kiriting');
    let response = 'There is no user with the entered ID';
    for (let i = 0; i < arr.length; i++) {
        if (inputId == arr[i].id) {
            response = arr[i];
        }
    }
    return response;
}
export { arr, takeTheObjectFromId };