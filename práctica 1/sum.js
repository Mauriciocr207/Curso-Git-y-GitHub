export function sum([...numbers]) {
    let sum = 0;
    for (const i of numbers) {
        sum += i
    }
    return sum;
}