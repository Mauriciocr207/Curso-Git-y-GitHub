import { sum } from "./sum";
function getSum(numbers) {
    return sum(numbers);
}

(() => {
    const welcome = 'hola mundo!';
    console.log(welcome);
    console.log(getSum([1,2,3]));
})();
