import { title } from "process";
import { AwardCreator } from "./AwardCreator";
import { OrderCreator } from "./OrderCreator";
import { PenaltyCreator } from "./PenaltyCreator";

const awardFactory = new AwardCreator();
const penaltyFactory = new PenaltyCreator();
const orderFactory = new OrderCreator();

const orderData = {
    title: "Наказ про заохочення",
    orderNumber: "№105/наг",
    issuer: "начальник інституту",
    date: "07.02.2026", 
}
console.log("--- Спроба створення заохочення ---");
const awardData = {
    category: "Нагородження грамотою",
    order: "№105/наг",
    date: "06.02.2026",
    issuer: "начальник інституту"
};
const orderResult = orderFactory.createAndLog(orderData);
console.log(orderResult);
const awardResult = awardFactory.createAndLog(awardData);
console.log(awardResult);

console.log("\n--- Спроба створення стягнення ---");

const penaltyData = {
    type: "Сувора догана",
    orderNumber: "88-С",
    reason: "недотримання правил поводження зі зброєю",
    date: "06.02.2026"
};

const penaltyResult = penaltyFactory.createAndLog(penaltyData);
console.log(penaltyResult);


const checkPenalty = penaltyFactory.factoryMethod(penaltyData);
const checkAward = awardFactory.factoryMethod(awardData);

console.log("\n Успіх: Фабрика повернула об'єкт:");
console.log(checkPenalty.getFormattedInfo());
console.log(checkAward.getFormattedInfo());

const checkOrder = orderFactory.factoryMethod(orderData);
console.log("\nФабрика повернула об'єкт:");
console.log(checkOrder.getFormattedInfo());