let cities_length_8 = (cities_list: string []) => {
    let new_list: string [] = [];
    for (const city of cities_list) {
        if( (city.length <= 8) ) {
            new_list.push(city);
        }
    }

    return new_list
}

let cities_list: string [] = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
]

console.log(cities_length_8(cities_list))