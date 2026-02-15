import { MilitarySystemFacade } from "./MilitarySystemFacade";

const system = new MilitarySystemFacade();

// 1. Повна підготовка профілю (Builder + Database + Adapter)
system.onboardCadet("Чернікова Катерина", "курсант", "441 група");

// 2. Розумне додавання (Система сама зрозуміє, що це нагорода через слово "Медаль")
system.processAutoDiscipline("Чернікова Катерина", "Медаль за відвагу", "№77");

// 3. Розумне додавання (Система сама зрозуміє, що це стягнення через слово "Догана")
system.processAutoDiscipline("Чернікова Катерина", "Сувора догана за запізнення", "№12-с");

// 4. Фінальний звіт
system.generateUnitReport();