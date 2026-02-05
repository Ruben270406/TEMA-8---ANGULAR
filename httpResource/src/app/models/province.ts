export interface Province {
    ccaa:string;
    provincia: string;
}

export interface ProvinceResponse {
    total_count: number;
    results: Province[];
}
