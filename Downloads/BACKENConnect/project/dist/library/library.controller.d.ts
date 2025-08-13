import { LibraryService } from './library.service';
import { LibraryBook, LibraryFavorite, Prisma } from '@prisma/client';
export declare class LibraryController {
    private readonly libraryService;
    constructor(libraryService: LibraryService);
    getAllBooks(): Promise<LibraryBook[]>;
    getBook(id: string): Promise<LibraryBook>;
    createBook(data: Prisma.LibraryBookCreateInput): Promise<LibraryBook>;
    updateBook(id: string, data: Prisma.LibraryBookUpdateInput): Promise<LibraryBook>;
    addToFavorites(bookId: string, data: {
        userId: string;
    }): Promise<LibraryFavorite>;
    removeFromFavorites(bookId: string, userId: string): Promise<void>;
}
