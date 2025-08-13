import { PrismaService } from '../prisma/prisma.service';
import { LibraryBook, LibraryFavorite, Prisma } from '@prisma/client';
export declare class LibraryService {
    private prisma;
    constructor(prisma: PrismaService);
    getBooks(params: {
        skip?: number;
        take?: number;
        where?: Prisma.LibraryBookWhereInput;
    }): Promise<LibraryBook[]>;
    getBook(id: string): Promise<LibraryBook | null>;
    createBook(data: Prisma.LibraryBookCreateInput): Promise<LibraryBook>;
    updateBook(params: {
        id: string;
        data: Prisma.LibraryBookUpdateInput;
    }): Promise<LibraryBook>;
    addToFavorites(data: Prisma.LibraryFavoriteCreateInput): Promise<LibraryFavorite>;
    removeFromFavorites(bookId: string, userId: string): Promise<void>;
}
