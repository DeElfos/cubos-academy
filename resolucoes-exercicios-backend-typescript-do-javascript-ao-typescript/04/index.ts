let cities_length_8 = (cities_list: string []): string []  => {
    return cities_list.filter( (city) => {
        return city.length <= 8
    })
}

let cities_list: string [] = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
]

console.log(cities_length_8(cities_list))