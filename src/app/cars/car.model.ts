export class car{

    public id: string;
    public name: string;
    public lastOilChangeDate: string;
    public mileage: string;
 
    
    
    constructor(id: string, name: string, lastOilChangeDate: string, mileage: string){
        this.id = id;
        this.name = name;
        this.lastOilChangeDate = lastOilChangeDate;
        this.mileage = mileage;
    }  
}