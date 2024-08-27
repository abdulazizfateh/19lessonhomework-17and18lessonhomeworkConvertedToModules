// TASK 3 ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// 3. let numbers = [1,-5,2,3,-7]; Arreydagi sonlarni musbatini qo’shib qaytaradigan yani 
// return qiladigan function yozish 

let numbers = [1, -5, 2, 3, -7];

const addThePositives = (numbers) => {
    let sumOfThePositives = 0;
    for (i in numbers){
        if (numbers[i] > 0){
            sumOfThePositives += numbers[i];
        }
    }
    return sumOfThePositives;
}
export { numbers, addThePositives };