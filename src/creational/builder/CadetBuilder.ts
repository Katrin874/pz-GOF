import { Cadet } from "./Cadet";
import { Award } from "./Award";
import { Penalty } from "./Penalty";

export class CadetBuilder {
    private cadet: Cadet;

    constructor() {
        this.cadet = new Cadet();
    }

    public reset(): this {
        this.cadet = new Cadet();
        return this;
    }

    public setName(name: string): this {
        this.cadet.fullName = name;
        return this;
    }

    public setRank(rank: string): this {
        this.cadet.rank = rank;
        return this;
    }

    public setGroup(group: string): this {
        this.cadet.group = group;
        return this;
    }

    public addAward(award: Award): this {
        this.cadet.awards.push(award);
        return this;
    }

    public addPenalty(penalty: Penalty): this {
        this.cadet.penalties.push(penalty);
        return this;
    }
    public setFootSize(size: number): this {
        this.cadet.footSize = size;
        return this;
    }

    public build(): Cadet {
        const result = this.cadet;
        this.reset();
        return result;
    }
}