import { MilitarySystemFacade } from "../facade/MilitarySystemFacade";

const system = new MilitarySystemFacade();

console.log("🚀 ЗАПУСК ТЕСТУВАННЯ ІНТЕЛЕКТУАЛЬНОГО АДАПТЕРА\n");

system.registerCadet("Чернікова Катерина", "Курсант", "221");
system.registerCadet("Петренко Іван", "Молодший сержант", "222");

console.log("> Завантаження історії для Катерини...");
system.importAllArchiveData("Чернікова Катерина");

console.log("\n> Завантаження історії для Івана...");
system.importAllArchiveData("Петренко Іван");

system.printUnitReport();