export class UUID {
    static _id: number = 0;
    static new_uuId = () => {
        return this._id++;
    }
}