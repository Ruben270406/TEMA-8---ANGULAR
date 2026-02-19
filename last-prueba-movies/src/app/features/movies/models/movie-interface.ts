export interface MovieInterface {
    id: string,
    qid: string,
    title: string,
    year: number,
    stars: string,
    q: string,
    image: string
}

export interface MovieResponse{
    status: boolean,
    message: string,
    timestamp: number,
    movies: MovieInterface[]
}