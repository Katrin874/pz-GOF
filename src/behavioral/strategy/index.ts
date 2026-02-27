import { StandardRatingStrategy } from "./StandardRatingStrategy";
import { StrictRatingStrategy } from "./StrictRatingStrategy";
import { IRatingStrategy } from "./IRatingStrategy";

function testStrategyPattern() {

    const awards = 5;
    const penalties = 1;

    console.log(`Вхідні дані: Нагороди = ${awards}, Стягнення = ${penalties}\n`);

    const strategies: IRatingStrategy[] = [
        new StandardRatingStrategy(),
        new StrictRatingStrategy()
    ];

    strategies.forEach(strategy => {
        const result = strategy.calculate(awards, penalties);
        const name = strategy.getStrategyName();

        console.log(`[Стратегія]: ${name}`);
        console.log(` > Розрахунок: ${result} балів`);
        
    });
}

testStrategyPattern();