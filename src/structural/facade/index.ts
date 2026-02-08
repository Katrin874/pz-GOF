import { MilitarySystemFacade } from "./MilitarySystemFacade";

const system = new MilitarySystemFacade();

console.log("🚀 ЗАПУСК ВІЙСЬКОВОЇ СИСТЕМИ ОБЛІКУ ДИСЦИПЛІНАРНОЇ ПРАКТИКИ\n");

system.registerCadet("Чернікова Катерина", "Курсант", "221");
system.registerCadet("Петренко Іван", "Молодший сержант", "222");

console.log("\n--- РЕЄСТРАЦІЯ ПОТОЧНИХ ПОДІЙ ---");

system.addDisciplineEvent("Чернікова Катерина", "award", {
    category: "Подяка за відмінне навчання",
    order: "№50-Н",
    date: "2026-02-07",
    issuer: "Начальник інституту"
});

system.addDisciplineEvent("Петренко Іван", "penalty", {
    type: "Догана",
    orderNumber: "№12/дис",
    reason: "Порушення форми одягу",
    date: "2026-02-06"
});

console.log("\n--- ІНТЕЛЕКТУАЛЬНИЙ ІМПОРТ З АРХІВУ ---");

system.importAllArchiveData("Чернікова Катерина");
system.importAllArchiveData("Петренко Іван");

console.log("\n--- ГЕНЕРАЦІЯ ФІНАЛЬНИХ ЗВІТІВ ---");

system.printUnitReport();

console.log("\n✅ Тестування завершено успішно. Всі патерни синхронізовані.");