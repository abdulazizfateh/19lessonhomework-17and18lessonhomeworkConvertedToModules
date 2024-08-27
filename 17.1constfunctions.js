// TASK 1 |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// 1. 3ta modul hosil qiling: function, o’zgaruvchilar, constructor func 
// 1.2 main.js type=modul 
// 1.3 main.js da hammasini execute qilinglar 

function User(name, id) {
    this.name = name;
    this.id = id;
    this.greet = function () {
        console.log(`Assalomu Alaykum, ${this.name}. Sizning ID raqamingiz ${this.id} `);
    }
}
const Abdulaziz = new User('Abdulaziz', 23733);
const Muhammadjon = new User('Muhammadjon', 23734);
export { Abdulaziz, Muhammadjon };