let identify_even_numbers = (numbers: number []): boolean => {
    for (const number of numbers) {
        if( !(number % 2 === 0) ) {
            return false;
        }
    }
    return true;
}

let list_numbers: number[] = [0, 122, 4, 6, 268, 8, 44]

if(!identify_even_numbers(list_numbers)) { console.log("array inválido") }