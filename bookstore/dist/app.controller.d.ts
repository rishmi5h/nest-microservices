import { AppService } from './app.service';
import { BookDTO } from './book/BookDTO';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    newBook(book: BookDTO): string;
    getBook(bookID: string): BookDTO;
    getAllBooks(): BookDTO[];
}
