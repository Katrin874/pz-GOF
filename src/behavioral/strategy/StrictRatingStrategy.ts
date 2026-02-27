import { IRatingStrategy } from "./IRatingStrategy";
export class StrictRatingStrategy implements IRatingStrategy {
    calculate(awards: number, penalties: number): number {
        // Тут кожне стягнення анулює 4 нагороди
        return (awards * 5) - (penalties * 20);
    }
    getStrategyName(): string { return "Суворий (Період іспитів)"; }
}