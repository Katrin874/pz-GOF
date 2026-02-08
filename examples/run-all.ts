import { MilitarySystemFacade } from "../src/structural/facade/MilitarySystemFacade";

function runMainScenario() {

    const system = new MilitarySystemFacade();

    console.log("\n[ЕТАП 1]: Реєстрація нових курсантів...");
    system.registerCadet("Чернікова Катерина", "курсант", "441 група");
    system.registerCadet("Сидоренко Артем", "молодший сержант", "442 група");

    console.log("\n[ЕТАП 2]: Проведення дисциплінарних заходів...");
    
    system.addDisciplineEvent("Чернікова Катерина", "award", {
        category: "Грамота",
        order: "№102/к",
        date: "08.02.2026",
        issuer: "Начальник інституту"
    });

    system.addDisciplineEvent("Сидоренко Артем", "penalty", {
        category: "Догана",
        order: "№45",
        date: "08.02.2026",
        issuer: "Начальник курсу",
        reason: "Порушення розпорядку дня"
    });

    console.log("\n[ЕТАП 3]: Синхронізація із застарілою системою (Legacy Archive)...");
    system.importAllArchiveData("Чернікова Катерина");

    console.log("\n[ЕТАП 4]: Генерація фінального звіту підрозділу...");
    system.printUnitReport();
}

runMainScenario();