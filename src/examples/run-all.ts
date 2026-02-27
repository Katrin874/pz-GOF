import { MilitarySystemFacade } from "../structural/facade/MilitarySystemFacade.js";

function runMainScenario() {

    const system = new MilitarySystemFacade();

    console.log("\n[ЕТАП 1]: Реєстрація нових курсантів та автоматична синхронізація...");
    
    system.onboardCadet("Чернікова Катерина", "курсант", "441 група");
    system.onboardCadet("Сидоренко Артем", "молодший сержант", "442 група");

    console.log("\n[ЕТАП 2]: Проведення дисциплінарних заходів (через Factory Method & Observer)...");
    
    system.processAutoDiscipline(
        "Чернікова Катерина", 
        "Грамота", 
        "№102/к", 
        "Начальник інституту"
    );

    system.processAutoDiscipline(
        "Сидоренко Артем", 
        "Догана: Порушення розпорядку дня", 
        "№45", 
        "Начальник курсу"
    );

    console.log("\n[ЕТАП 3]: Аналіз даних архіву (вже виконано автоматично)...");
    console.log("[INFO]: Дані для Катерини були підтягнуті з LegacyOrderSystem під час реєстрації.");

    console.log("\n[ЕТАП 4]: Генерація фінального звіту підрозділу (Strategy)...");
    
    system.generateUnitReport();
}

runMainScenario();