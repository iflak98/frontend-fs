import { Credentials } from "./credential";
import { Item } from "./item";
import { UserType } from "./userType";

export class Farmer {

    farmerId:number = 0;
    farmerName:string = '';
    farmerMobile:string = '';
    farmerEmail:string ='';
    farmerLocation:string = '';
    credential:Credentials= new Credentials();
    
    constructor(){
        this.credential.userType = UserType.FARMER
    }
    

}
