export interface TObjectResponse<T> {
    code: number;
    results: {
        object: T;
    }
}

export interface TObjectListResponse<T> {
    code: number;
    results: {
        objects: {
            rows: T[];
            count: number
        }
    }
}

export interface BaseListParams {
    page: number;
    limit: number;
}

export interface GeneralErrorType<T = unknown> {
    errorId: string;
    errorMessageEn: string;
    errorMessageVi: string;
    errorMessageKo: string;
    metadata?: T;
  }