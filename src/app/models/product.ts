export interface Product {
    id:            string;
    name:          string;
    description:   string;
    imageUrl:      string[];
    price_vent:    number;
    price_regular: number;
    slug?:          string;
    stock:   number;
}