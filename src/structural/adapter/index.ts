import { LegacyOrderSystem } from "./LegacyOrderSystem";
import { LegacyRecordAdapter } from "./LegacyRecordAdapter";

function demonstrateAdapterMethods(): void {
    console.log("=== ТЕСТУВАННЯ МЕТОДІВ ПАТЕРНУ ADAPTER ===\n");

    const legacySystem = new LegacyOrderSystem();
    const archive = legacySystem.getFullArchive();

    const rawLine = archive[0]; 
    console.log(`[ВХІДНІ ДАНІ]: "${rawLine}"\n`);

    const adapter = new LegacyRecordAdapter(rawLine);

    console.log("1. ПЕРЕВІРКА ПОЛІВ ОБ'ЄКТА:");
    console.log(`- Власник (ownerName): ${adapter.ownerName}`);
    console.log(`- Категорія (type): ${adapter.type}`);
    console.log(`- Назва (title): ${adapter.title}`);
    console.log(`- № наказу (orderNumber): ${adapter.orderNumber}`);
    console.log(`- Дата (date): ${adapter.date}`);
    console.log(`- Ранг видавця (issuerRank): ${adapter.issuerRank}`);

    console.log("\n2. ПЕРЕВІРКА МЕТОДУ ІНТЕРФЕЙСУ:");

    console.log(`> getFormattedInfo(): ${adapter.getFormattedInfo()}`);

    console.log("\n=== ТЕСТ ЗАВЕРШЕНО ===");
}

demonstrateAdapterMethods();