export interface Board {
    name: string;
    aggregatedData?: {
        todo: number;
        inProgress: number;
        done: number;
    };
    isPublic?: boolean;
    id?: string;
}

