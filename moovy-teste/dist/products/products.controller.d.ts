import { ProductsService } from "./products.service";
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    addProduct(prodTitle: string, prodDesc: string, prodPrice: number): {
        id: string;
    };
    getAllProducts(): import("./product.model").Product[];
    getProduct(prodId: string): {
        id: string;
        title: string;
        description: string;
        price: number;
    };
    updateProduct(prodId: string, prodTitle: string, prodDesc: string, prodPrice: number): any;
    deleteProduct(prodId: string): import("./product.model").Product[];
}
