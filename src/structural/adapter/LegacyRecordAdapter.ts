import { IDisciplineRecord } from "../../creational/factory-method/IDisciplineRecord";

export class LegacyRecordAdapter implements IDisciplineRecord {
    public readonly ownerName: string;
    public readonly type: string;
    public readonly title: string;
    public readonly orderNumber: string;
    private readonly date: string;

    constructor(rawLine: string) {
        const parts = rawLine.split(",");
        this.ownerName = parts[0]?.trim() || "Невідомо";
        this.type = parts[1]?.trim() || "UNKNOWN";
        this.title = parts[2]?.trim() || "Невідомо";
        this.orderNumber = parts[3]?.trim() || "---";
        this.date = parts[4]?.trim() || "---";
    }

    public getFormattedInfo(): string {
        return `[АРХІВ ${this.date}]: ${this.title} | №${this.orderNumber}`;
    }
}