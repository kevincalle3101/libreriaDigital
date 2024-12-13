    import { getBookByIdService, getBooksService } from "../services/books"
    import { useBookState } from "./useBookState"



    interface IBookFunctions {
        getBooks: (query : string) => void,
        getBookDetail: (bookId: string) => void
    }

    export const useBooks : () => IBookFunctions = () => {

        const { setBooks, setBookDetail } = useBookState()

        const getBooks = async (query : string) : Promise <void> => {
            try {
                const { data } = await getBooksService(query)
                console.log("data", data);
                
                setBooks(data)
            } catch (error) {
                alert("Failed to fetch books. Please try again.");
            }
        }

        const getBookDetail = async (quoteId: string) => {
            try {
              const { data } = await getBookByIdService(quoteId);
              setBookDetail(data)
            } catch (error) {
                alert("Failed to fetch books. Please try again.");
            }
          }

        return {
            getBooks,
            getBookDetail
        }
    }