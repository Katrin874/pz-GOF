import { IDisciplineRecord } from "../factory-method/IDisciplineRecord";

export class Penalty implements IDisciplineRecord {
    public title: string = "";     
    public orderNumber: string = ""; 
    public reason: string = "";      
    public date: string = "";        
    public issuerRank: string = "";  

    public getFormattedInfo(): string {
        return `[СТЯГНЕННЯ] від ${this.date}: ${this.title} за "${this.reason}". Наказ №${this.orderNumber} (Накладено: ${this.issuerRank})`;
    }
}