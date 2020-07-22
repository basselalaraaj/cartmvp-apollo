import { CartRepo } from "../cartRepo";
import { Cart, CartItem } from "../../../../generated/graphql";

export class InMemoryCartRepo implements CartRepo {
    private cartItems: CartItem[] = [
        { id: 1, title: "Armani" },
        { id: 2, title: "Tomy" },
        { id: 3, title: "Gucci" },
    ];

    constructor() {}

    public async deleteCartItem(id: number): Promise<void> {
        this.cartItems = this.cartItems.filter((cartItem: CartItem) => cartItem.id !== id);
    }

    public async getCartById(id: number): Promise<Cart> {
        return { items: this.cartItems };
    }
}
