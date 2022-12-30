import {deepCopy} from "../utils/deep-copy.js";
import {products} from "./db.js";
import {wait} from "../utils/wait";

class ProductsApi {
    async getProducts(category_id) {
        const clonedProducts = deepCopy(products);
        const res = {
            total: 0,
            results: [],
        }

        if (!category_id) {
            res.total = clonedProducts.total;
            res.results = clonedProducts;
        } else {
            for (const _product of clonedProducts) {
                if (_product.category_id === category_id) {
                    res.total++;
                    res.results.push(_product);
                    res.category_id = category_id;
                }
            }
        }

        await wait(500);

        return Promise.resolve(res);
    }
}

export const productsApi = new ProductsApi();