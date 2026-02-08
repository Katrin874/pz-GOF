import { MilitaryEvent} from "./MilitaryEvent";
export interface IObserver {
    update(event: MilitaryEvent): void;
}   