import { IDisciplineRecord } from "../factory-method/IDisciplineRecord";
import { MilitaryEventManager } from "../../behavioral/observer/MilitaryEventManager";
import { MilitaryEventType } from "../../behavioral/observer/MilitaryEventType";

export class Cadet {
    public fullName: string = "";
    public rank: string = "";
    public group: string = "";
    public footSize: number = 0;
    
    public awards: IDisciplineRecord[] = [];
    public penalties: IDisciplineRecord[] = [];
    

    public addAward(record: IDisciplineRecord): void {
        this.awards.push(record);
        this.emitEvent(MilitaryEventType.AWARD_ADDED, record.getFormattedInfo());
    }

    public addPenalty(record: IDisciplineRecord): void {
        this.penalties.push(record);
        this.emitEvent(MilitaryEventType.PENALTY_ADDED, record.getFormattedInfo());
    }

    public addOrder(record: IDisciplineRecord): void {
        this.addAward(record);
    }

    private emitEvent(type: MilitaryEventType, details: string): void {
        MilitaryEventManager.getInstance().notify({
            type: type,
            cadetName: this.fullName,
            details: details,
            timestamp: new Date()
        });
    }

    public displayProfile(): void {
        console.log(`\n=========================================`);
        console.log(`ПРОФІЛЬ: ${this.fullName} (${this.rank})`);
        console.log(`Група: ${this.group}`);
        console.log(`Розмір ноги: ${this.footSize}`);
        console.log(`-----------------------------------------`);
        
        console.log(`ЗАОХОЧЕННЯ (${this.awards.length}):`);
        if (this.awards.length === 0) console.log(" - Записи відсутні");
        this.awards.forEach(a => console.log(` ${a.getFormattedInfo()}`));

        console.log(`\nСТЯГНЕННЯ (${this.penalties.length}):`);
        if (this.penalties.length === 0) console.log(" - Записи відсутні");
        this.penalties.forEach(p => console.log(` ${p.getFormattedInfo()}`));
        console.log(`=========================================\n`);
    }
}