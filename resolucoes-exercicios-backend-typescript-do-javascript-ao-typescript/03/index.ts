let identify_even_numbers = (numbers: number []): string => {
    return numbers.every((number) => {
        return number % 2 === 0
    }) ? 'Array válido' : 'Array inválido'
}

let list_numbers: number[] = [0, 122, 4, 6, 268, 8, 44]
let list_numbers_false: number[] = [0, 122, 4, 6, 7, 8, 44]

console.log(identify_even_numbers(list_numbers))
console.log(identify_even_numbers(list_numbers_false))