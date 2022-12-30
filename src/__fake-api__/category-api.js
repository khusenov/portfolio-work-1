import {categories} from "./db";
import {deepCopy} from "../utils/deep-copy";
import {wait} from "../utils/wait";

class CategoryApi {
    async getCategories() {
        const clonedCategories = deepCopy(categories);

        const res = {
            total: clonedCategories.length,
            results: clonedCategories,
        }
        await wait(500);
        return Promise.resolve(res);
    }

    getCategory(categoryId) {
        const clonedCategories = deepCopy(categories);
        const found = clonedCategories.find(_category => _category.id === categoryId);
        const res = {
            result: found,
        }

        return Promise.resolve(res);
    }
}

export const categoryApi = new CategoryApi();