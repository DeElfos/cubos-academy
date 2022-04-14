let find_book = (list_books: string [], book_to_locale: string) => {
    for (let book in list_books) {
        if (list_books[ book ] === book_to_locale) {
            return 'O livro está na posição ' + (Number(book) + 1);
        }
    }
    return null
}

let estante: string [] = [
    "Guerra e Paz",
    "A Montanha Mágica",
    "Cem Anos de Solidão",
    "Dom Quixote",
    "A Divina Comédia",
]

console.log(find_book(estante, 'Cem Anos de Solidão'))

