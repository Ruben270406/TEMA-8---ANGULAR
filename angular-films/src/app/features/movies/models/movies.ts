export interface MovieResponse{
    status: boolean;
    message: string;
    timestamp: number;
    movies: Movies[];

}

export interface Movies {
    id: string;
    qid: string;
    title: string;
    year: number;
    stars: string;
    q: string;
    image: string;
}
