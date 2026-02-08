import { Award } from "./Award";

export class AwardBuilder {
    private award: Award;

    constructor() {
        this.award = new Award();
    }

    public reset(): this {
        this.award = new Award();
        return this;
    }

    public setCategory(category: string): this {
        this.award.title = category;
        return this;
    }

    public setOrderNumber(orderNumber: string): this {
        this.award.orderNumber = orderNumber;
        return this;
    }

    public setDate(date: string): this {
        this.award.date = date;
        return this;
    }

    public setIssuerRank(rank: string): this {
        this.award.issuerRank = rank;
        return this;
    }

    public build(): Award {
        const result = this.award;
        this.reset(); 
        return result;
    }
}