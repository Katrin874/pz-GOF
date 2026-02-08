import { IDisciplineRecord } from "../factory-method/IDisciplineRecord";

export class Award implements IDisciplineRecord {
    public title: string = "";        
    public orderNumber: string = "";
    public issuerRank: string = "";
    public date: string = "";

    public getFormattedInfo(): string {
        return `[ЗАОХОЧЕННЯ] від ${this.date}: ${this.title}. Наказ №${this.orderNumber} (владою: ${this.issuerRank})`;
    }
}