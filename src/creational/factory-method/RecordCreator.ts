import { IDisciplineRecord } from "./IDisciplineRecord";

export abstract class RecordCreator {
    // Приймає будь-який об'єкт даних (data) 
    public abstract factoryMethod(data: any): IDisciplineRecord;

    public createAndLog(data: any): string {
        const record = this.factoryMethod(data);
        return `[СИСТЕМА ОБЛІКУ]: ${record.getFormattedInfo()}`;
    }
}