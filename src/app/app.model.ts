export class AppModel {
 public p_name : string;
 public p_id : number;
 public p_cost : number;
 public p_availability : number;
 public p_details : string;
 public p_category : string;


 constructor(p_name : string,
    p_id : number,
    p_cost : number,
    p_availability : number,
    p_details : string,
    p_category : string) {
        this.p_id = p_id;
        this.p_cost = p_cost;
        this.p_name = p_name;
        this.p_availability = p_availability;
        this.p_details = p_details;
        this.p_category = p_category;
    }

}
