export interface IRatingStrategy {
    calculate(awardsCount: number, penaltiesCount: number): number;
    getStrategyName(): string;
}