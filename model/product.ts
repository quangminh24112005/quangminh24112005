type Product = {
    brand: String,
    type: String,
    name: String,
    price: number,
    imgURL: String,
    videoURL?: String | undefined,
}

type cartProduct = {
    brand: String,
    type: String,
    name: String,
    price: number,
    imgURL: String,
    videoURL?: String | undefined,
    quantity: number
}

type Customer = {
    id: number,
    name: string,
    email: string,
    password: string,

    cart: Array<cartProduct>,

}