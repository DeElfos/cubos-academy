let cities_length_8 = (cities_list: string []): string []  => {
    let new_list = cities_list.filter( (city) => {
        return city.length <= 8
    })
    
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