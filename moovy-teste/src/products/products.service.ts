import { Injectable, NotFoundException } from "@nestjs/common";
import { Product } from "./product.model"; 

@Injectable()
export class ProductsService {
    private products: Product[] = []; //usa o tipo da model, array do tipo Product

    insertProduct(title: string, desc: string, price: number) { //infere que é uma string
        const prodId = Math.random().toString()
        const newProduct = new Product(prodId, title, desc, price); //dummy id
        this.products.push(newProduct);
        return prodId;
    }

    getProducts() {
        return [...this.products]; // [this.products] retorna um ponteiro da lista de produtos
        //usando [...this.products] cria um novo array onde cada elemento de products também seria um elemento do novo array
    }

    getSingleProduct(productId: string) {
        const product = this.findProduct(productId)[0];
        return {...product}; //cria um novo objeto pega os key values do primeiro e coloca no novo
    }

    updateProduct(productId: string, title: string, desc: string, price: number){
        const [product, index] = this.findProduct(productId); //pega os dois valores e coloca nas variaveis em ordem
        const updatedProduct = {...product};
        if(title) { //apos copiar o produto checa se já tem os campos e coloca no atualizado para nao ter overwrite
            updatedProduct.title = title;
        }
        if (desc) {
            updatedProduct.description = desc;
        }
        if (price) {
            updatedProduct.price = price;
        }
        this.products[index] = updatedProduct; //substitui o produto atualizado pelo novo

    }

    deleteProduct(productId:string){
        const index = this.findProduct(productId)[1];
        this.products.splice(index, 1);

    }

    private findProduct(id: string): [Product, number] {
        const productIndex = this.products.findIndex(prod => prod.id === id);
        const product = this.products[productIndex];
        if (!product) { //caso o produto não existe
            throw new NotFoundException('O produto não existe.');
        }
        return [product, productIndex];
    }
}