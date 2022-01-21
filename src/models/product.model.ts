import { UUID } from "../helpers/uuid.helper";
export class Product {
    readonly id: number = 0
    name: string = ''
    price: number = 0
    constructor(name: string, price: number) {
        this.id = UUID.new_uuId();
        this.name = name;
        this.price = price;
    }

}