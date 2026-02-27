import { IRatingStrategy } from "./IRatingStrategy";
export class StandardRatingStrategy implements IRatingStrategy {
    calculate(awards: number, penalties: number): number {
        return (awards * 10) - (penalties * 5);
    }
    getStrategyName(): string { return "Стандартний (Мирний час)"; }
}