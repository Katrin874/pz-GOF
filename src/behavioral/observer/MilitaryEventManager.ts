import { IObserver } from "./IObserver";
import { MilitaryEventType } from "./MilitaryEventType";
import { MilitaryEvent } from "./MilitaryEvent";

export class MilitaryEventManager {
    private static instance: MilitaryEventManager;
    private listeners: Map<MilitaryEventType, IObserver[]> = new Map();

    private constructor() {}

    public static getInstance(): MilitaryEventManager {
        if (!MilitaryEventManager.instance) {
            MilitaryEventManager.instance = new MilitaryEventManager();
        }
        return MilitaryEventManager.instance;
    }

    // Підписати службу на тип події
    public subscribe(type: MilitaryEventType, observer: IObserver): void {
        const current = this.listeners.get(type) || [];
        this.listeners.set(type, [...current, observer]);
    }
    public unsubscribe(type: MilitaryEventType, observer: IObserver): void {
        const current = this.listeners.get(type) || [];
        this.listeners.set(type, current.filter(obs => obs !== observer));
    }

    // Розіслати сповіщення всім підписаним
    public notify(event: MilitaryEvent): void {
        const targets = this.listeners.get(event.type) || [];
        targets.forEach(observer => observer.update(event));
    }
}