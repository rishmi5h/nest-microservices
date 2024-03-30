import { BookDTO } from './book/BookDTO';
export declare class AppService {
    getBookByID(bookID: string): BookDTO;
    getAllBooks(): BookDTO[];
    newBook(book: BookDTO): string | false;
}
