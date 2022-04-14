let filter_even_numbers = (list_of_numbers: number[]): number[]  => {
    return list_of_numbers.filter( (number) => {
        return number % 2 === 0
    })
}

let list_of_numbers: number[] = [1, 98, -76, 0, 12, 19, 5, 60, 44]

console.log(filter_even_numbers(list_of_numbers))