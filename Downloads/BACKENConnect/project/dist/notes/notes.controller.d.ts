import { NotesService } from './notes.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { RequestWithUser } from '../types/request.types';
export declare class NotesController {
    private readonly notesService;
    constructor(notesService: NotesService);
    create(req: RequestWithUser, createNoteDto: CreateNoteDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        verseId: string;
        content: string;
    }>;
    findAll(req: RequestWithUser): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        verseId: string;
        content: string;
    }[]>;
    findOne(req: RequestWithUser, id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        verseId: string;
        content: string;
    }>;
    update(req: RequestWithUser, id: string, updateNoteDto: UpdateNoteDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        verseId: string;
        content: string;
    }>;
    remove(req: RequestWithUser, id: string): Promise<void>;
}
