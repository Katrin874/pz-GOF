import { Penalty } from "./Penalty";

export class PenaltyBuilder {
    private penalty: Penalty;

    constructor() {
        this.penalty = new Penalty();
    }

    public reset(): this {
        this.penalty = new Penalty();
        return this;
    }

    public setType(type: string): this {
        this.penalty.title = type;
        return this;
    }

    public setOrderNumber(orderNumber: string): this {
        this.penalty.orderNumber = orderNumber;
        return this;
    }

    public setReason(reason: string): this {
        this.penalty.reason = reason;
        return this;
    }

    public setDate(date: string): this {
        this.penalty.date = date;
        return this;
    }

    public setIssuerRank(rank: string): this {
        this.penalty.issuerRank = rank;
        return this;
    }

    public build(): Penalty {
        const result = this.penalty;
        this.reset();
        return result;
    }
}