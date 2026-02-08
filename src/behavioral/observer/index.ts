import { MilitarySystemFacade } from "../../structural/facade/MilitarySystemFacade";

function runObserverDemo() {
    const system = new MilitarySystemFacade();

    console.log("=== ТЕСТУВАННЯ ПАТЕРНУ OBSERVER (EVENT BUS) ===\n");

    system.registerCadet("Олександр Коваленко", "курсант", "141 група");
    system.registerCadet("Максим Сидоренко", "молодший сержант", "142 група");

    console.log("\n--- СЦЕНАРІЙ 1: ВРУЧЕННЯ НАГОРОДИ ---");

    system.addDisciplineEvent("Олександр Коваленко", "award", {
        category: "Подяка",
        order: "№55",
        date: "08.02.2026",
        issuer: "Начальник факультету"
    });

    console.log("\n--- СЦЕНАРІЙ 2: ОГОЛОШЕННЯ СТЯГНЕННЯ ---");
    system.addDisciplineEvent("Максим Сидоренко", "penalty", {
        category: "Догана",
        order: "№12-с",
        date: "08.02.2026",
        issuer: "Командир роти",
        reason: "Порушення форми одягу"
    });

    console.log("\n--- СЦЕНАРІЙ 3: МАСОВИЙ ІМПОРТ (ADAPTER + OBSERVER) ---");
    
    system.importAllArchiveData("Коваленко Олександр");

    console.log("\n--- ПЕРЕВІРКА СТАНУ БД ---");
    system.printUnitReport();

    console.log("=== ТЕСТ ЗАВЕРШЕНО ===");
}

runObserverDemo();