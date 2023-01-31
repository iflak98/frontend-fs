import { Credentials } from "./credential";
import { Orders } from "./orders";
import { UserType } from "./userType";

export class Supplier {

    supplierId:number = 0;
    supplierName:string = '';
    supplierMobile:string = '';
    supplierEmail:string='';
    supplierLocation:string = '';
    // orders:Orders[] = [];
    credential:Credentials = new Credentials();

    constructor() {
        this.credential.userType = UserType.SUPPLIER
    }

}
