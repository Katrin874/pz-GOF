import { AwardBuilder } from "../builder/AwardBuilder";
import { IDisciplineRecord } from "./IDisciplineRecord";
import { RecordCreator } from "./RecordCreator";

export class AwardCreator extends RecordCreator {
    public factoryMethod(data: { category: string, order: string, date: string, issuer: string }): IDisciplineRecord {
        return new AwardBuilder()
            .setCategory(data.category)
            .setOrderNumber(data.order)
            .setDate(data.date)
            .setIssuerRank(data.issuer)
            .build();
    }
}