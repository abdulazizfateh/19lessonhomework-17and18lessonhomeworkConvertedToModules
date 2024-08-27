// TASK 1 |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// 1. 3ta modul hosil qiling: function, o’zgaruvchilar, constructor func 
// 1.2 main.js type=modul 
// 1.3 main.js da hammasini execute qilinglar 

const isPrime = (a) => {
    for (let i = 2; i < a; i++) {
        if (a % 2 == 0) {
            return 'Tub son emas'
        }
    }
    return 'Tub son'
}
export { isPrime };
