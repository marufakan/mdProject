export interface IExample {
    status?: boolean;
    result?: Result[];
}

export interface Result {
    id?:       number;
    province?: string;
    district?: string;
    pl?: string;
}
