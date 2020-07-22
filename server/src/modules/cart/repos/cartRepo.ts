import { Cart } from "../../../generated/graphql";

export interface CartRepo {
    deleteCartItem(id: number): Promise<void>;
    getCartById(id: number): Promise<Cart>;
}
