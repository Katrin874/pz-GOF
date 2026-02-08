import { IObserver } from "./IObserver";
import { MilitaryEvent } from "./MilitaryEvent";

export class StaffOffice implements IObserver {
    update(event: MilitaryEvent): void {
        console.log(`[АРХІВ ШТАБУ]: Запис зафіксовано для ${event.cadetName}. Тип: ${event.type}`);
    }
}