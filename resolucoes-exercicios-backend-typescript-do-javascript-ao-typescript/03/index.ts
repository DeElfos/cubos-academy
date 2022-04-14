let identify_even_numbers = (numbers: number []) => {
    for (const number of numbers) {
        if( !(number % 2 === 0) ) {
            return;
        }
    }
    return false;
}

let list_numbers: number[] = [0, 122, 4, 6, 862, 8, 44]

identify_even_numbers(list_numbers) ?? console.log("array inválido");