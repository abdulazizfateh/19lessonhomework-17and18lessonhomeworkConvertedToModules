const isSumEvenOdd = (sum) => {
    if (sum % 2 == 0) {
        return `${sum} soni juft`;
    } else {
        return `${sum} soni toq`;
    }
}

const findSum = (arr) => {
    let sum = 0;
    for (let i in arr) {
        sum += arr[i];
    }
    return isSumEvenOdd(sum);
}

export { findSum };