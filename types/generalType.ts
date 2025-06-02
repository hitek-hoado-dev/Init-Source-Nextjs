export interface DataResonse<T> {
    code: number;
    results: {
        object: T;
    }
}

export interface DataResponseList<T> {
    code: number;
    results: {
        objects: {
            rows: T[];
            count: number
        }
    }
}