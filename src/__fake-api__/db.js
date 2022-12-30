class Category {
    constructor(
        id,
        image,
        name,
    ) {
        this.id = id;
        this.image = image;
        this.name = name;
        this.product_ids = [];
    }
}

class Product {
    constructor(
        id,
        category_id,
        image,
        name,
        paragraph,
        price
    ) {
        this.id = id;
        this.category_id = category_id;
        this.image = image;
        this.name = name;
        this.paragraph = paragraph;
        this.price = price;
    }
}

const categories = [
    new Category(1, "/static/categories/cat-1.svg", "Булочки"),
    new Category(2, "/static/categories/cat-2.svg", "Багеты"),
    new Category(3, "/static/categories/cat-3.svg", "Пшеничный"),
    new Category(4, "/static/categories/cat-4.svg", "Ржаной"),
    new Category(5, "/static/categories/cat-5.svg", "Кукурузный"),
];

const products = [
    new Product(
        1,
        1,
        "/static/products/product-1-1.png",
        "Микета",
        "Мука, вода, дрожжи, соль, кунжут",
        "150₽"
    ),
    new Product(
        2,
        1,
        "/static/products/product-1-2.png",
        "Микета",
        "Мука, вода, дрожжи, соль, кунжут",
        "150₽"
    ),
    new Product(
        3,
        1,
        "/static/products/product-1-3.png",
        "Микета",
        "Мука, вода, дрожжи, соль, кунжут",
        "150₽"
    ),
    new Product(
        4,
        2,
        "/static/products/product-2-1.png",
        "Микета",
        "Мука, вода, дрожжи, соль, кунжут",
        "150₽"
    ),
    new Product(
        5,
        2,
        "/static/products/product-2-2.png",
        "Микета",
        "Мука, вода, дрожжи, соль, кунжут",
        "150₽"
    ),
    new Product(
        6,
        2,
        "/static/products/product-2-3.png",
        "Микета",
        "Мука, вода, дрожжи, соль, кунжут",
        "150₽"
    ),
    new Product(
        7,
        3,
        "/static/products/product-3-1.png",
        "Микета",
        "Мука, вода, дрожжи, соль, кунжут",
        "150₽"
    ),
    new Product(
        8,
        3,
        "/static/products/product-3-2.png",
        "Микета",
        "Мука, вода, дрожжи, соль, кунжут",
        "150₽"
    ),
    new Product(
        9,
        3,
        "/static/products/product-3-3.png",
        "Микета",
        "Мука, вода, дрожжи, соль, кунжут",
        "150₽"
    ),
];



export {categories, products};



















