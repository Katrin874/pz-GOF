import { RecordCreator } from "./RecordCreator";
import { IDisciplineRecord } from "./IDisciplineRecord";
import { PenaltyBuilder } from "../builder/PenaltyBuilder";

export class PenaltyCreator extends RecordCreator {
    public factoryMethod(data: { type: string, orderNumber: string, reason: string, date: string }): IDisciplineRecord {
        return new PenaltyBuilder()
            .setType(data.type)
            .setOrderNumber(data.orderNumber)
            .setReason(data.reason)
            .setDate(data.date)
            .build();
    }
}