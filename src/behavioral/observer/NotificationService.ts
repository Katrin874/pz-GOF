import { IObserver } from "./IObserver";
import { MilitaryEvent } from "./MilitaryEvent";
import { MilitaryEventType } from "./MilitaryEventType";
export class NotificationService implements IObserver {
    update(event: MilitaryEvent): void {
        const icon = event.type === MilitaryEventType.PENALTY_ADDED ? "⚠️" : "🌟";
        const color = event.type === MilitaryEventType.PENALTY_ADDED ? "\x1b[31m" : "\x1b[32m"; // Червоний/Зелений
        console.log(`${color}${icon} [СЛУЖБА СПОВІЩЕНЬ]: ${event.cadetName} -> ${event.details}\x1b[0m`);
    }
}