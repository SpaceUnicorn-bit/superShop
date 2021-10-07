import { Product } from 'src/modules/product/entities/product.entity';

export class Bill {
    client: string;
    date: Date;
    email: string;
    phone: string;
    shipping: string;
    totalPrice: string;
    typeOfSell: string;
    products: Product[];
}