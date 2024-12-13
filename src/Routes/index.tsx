export const BOOK_ROUTES = {
    HOME            : '/',
    BOOKS           : '/books',
    DETAIL          : '/books/:bookId',
    pathToBook      : () => '/book',
    pathToBookDetail: ( bookId: string ) => `/books/${bookId}`
}
