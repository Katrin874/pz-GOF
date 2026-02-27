import { MilitarySystemFacade } from "./MilitarySystemFacade";

const system = new MilitarySystemFacade();

system.onboardCadet("Чернікова Катерина", "курсант", "441 група");

system.processAutoDiscipline("Чернікова Катерина", "Медаль за відвагу", "№77");

system.processAutoDiscipline("Чернікова Катерина", "Сувора догана за запізнення", "№12-с");

system.generateUnitReport();