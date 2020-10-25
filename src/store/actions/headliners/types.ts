// entries
export type StatusRange = 0 | 1 | 2;

export interface IEntryHeadliner {
    title: string;
    status: StatusRange;
    source: string;
    author: string | null;
    description: string;
    url: string;
    urlToImage?: string;
    publishedAt: string;
}

export interface IEntryHeadlinerStatus {
    toRead: number;
    beenRead: number;
    toDelete: number;
}

export interface IEntryHeadliners {
    totalResults: number;
    headliners: IEntryHeadliner[];
}

// outputs
export interface IOutputHeadliners {
    type: string;
    payload: IEntryHeadliners;
}
