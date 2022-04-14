let find_book = (list_books: string [], book_to_locale: string): null | string  => {
    const posicao: number = list_books.indexOf(book_to_locale)
    return posicao === -1 ? 'Livro não encontrado' : `O livro está na posição ${ posicao + 1 } `
}

let estante: string [] = [
    "Guerra e Paz",
    "A Montanha Mágica",
    "Cem Anos de Solidão",
    "Dom Quixote",
    "A Divina Comédia",
]

console.log(find_book(estante, 'Cem Anos de Solidão'))
console.log(find_book(estante, 'Jogador numero 1'))

