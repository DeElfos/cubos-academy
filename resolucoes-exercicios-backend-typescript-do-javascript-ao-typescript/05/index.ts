let filter_even_numbers = (list_of_numbers: number[]) => {
    let new_array: number[] = []
    for (const number of list_of_numbers) {
        if( number % 2 === 0 ) {
            new_array.push( number)
        }
    }

    return new_array
}

let list_of_numbers: number[] = [1, 98, -76, 0, 12, 19, 5, 60, 44]

console.log(filter_even_numbers(list_of_numbers))