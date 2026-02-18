export interface MoviesInterface {
    id: string,
    qid: string,
    title: string,
    year: number,
    stars: string,
    q: string,  
    image: string
}

export interface MoviesResponse{
    status: boolean,
    message: string,
    timestamp: number,
    movies: MoviesInterface[]
}
