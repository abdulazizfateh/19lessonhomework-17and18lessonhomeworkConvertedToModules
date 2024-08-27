// TASK 6 |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// 6. raqam beriladi shu raqam bo’luvchilarini bitta arreyga solib qaytarsin tub bo’lsa tub so’zini

const isPrime = (divisors) => {
    if (divisors == 1) {
        return '1 soni tub yoki tub emaslikka ajralmaydi!';
    }
    if (divisors == 2) {
        return `Tub(2)`;
    }
    for (let i = 2; i < divisors; i++) {
        if (divisors % i == 0) {
            return divisors;
        } else {
            return `Tub(${divisors})`;
        }
    }
}

const findTheDivisors = (a) => {
    let result = [];
    for (let i = 1; i <= a; i++) {
        if (a % i == 0) {
            result.push(isPrime(i));
        }
    }
    return result;
} 
export { findTheDivisors };