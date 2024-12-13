export interface IBookQuery {
    query: string,
}

export interface IBook {
    id: string;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    author: string;
    category: string;
    thumbnail: string;
    images: string[];
}