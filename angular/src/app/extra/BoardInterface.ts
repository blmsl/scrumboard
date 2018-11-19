export interface Board {
    name: string;
    date: firebase.firestore.FieldValue;
    aggregatedData?: {
        todo: number;
        inProgress: number;
        done: number;
    };
    aggregatedDataPercent?: {
        todo: number;
        inProgress: number;
        done: number;
        totalEntries: number;
    };
    isPublic?: boolean;
    id?: string;
    archived?: boolean;
}

