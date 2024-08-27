// TASK 1 ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// 1. **salom dunyo** degan so’zni teskari qilib **oynud molas** qaytaruvchi function yozing Yordam: function, console.log, 

let greet = 'Salom Dunyo';

const reverseString = (greet) => {
    let newGreet = '';
    for (let i = greet.length - 1; i >= 0; i--) {
        newGreet += greet[i];
    }
    return newGreet;
}

export { greet, reverseString };