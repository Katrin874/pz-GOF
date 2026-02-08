import { MilitaryEventType } from "./MilitaryEventType";
export interface MilitaryEvent {
    type: MilitaryEventType;
    cadetName: string;
    details: string;
    timestamp: Date;
}