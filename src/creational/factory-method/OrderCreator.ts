import { RecordCreator } from "./RecordCreator";
import { IDisciplineRecord } from "./IDisciplineRecord";
export class OrderCreator extends RecordCreator {
    public factoryMethod(data: { orderNumber: string, date: string, issuer: string }): IDisciplineRecord {
        return {
            title: "Наказ про заохочення",
            orderNumber: data.orderNumber,
            issuerRank: data.issuer,
            date: data.date,
            getFormattedInfo(): string {
                return `[НАКАЗ] від ${this.date}: ${this.title}. Наказ №${this.orderNumber} (владою: ${this.issuerRank})`;
            }
        };
    }
}