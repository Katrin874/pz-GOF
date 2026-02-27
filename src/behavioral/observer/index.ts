import { MilitaryEventManager } from "./MilitaryEventManager";
import { MilitaryEventType } from "./MilitaryEventType";
import { StaffOffice } from "./StaffOffice";
import { NotificationService } from "./NotificationService";
import { MilitaryEvent } from "./MilitaryEvent";

function testObserverMethods() {
    
    const eventManager = MilitaryEventManager.getInstance();

    const staff = new StaffOffice();
    const notifications = new NotificationService();

    //eventManager.subscribe(MilitaryEventType.AWARD_ADDED, staff);
    eventManager.subscribe(MilitaryEventType.AWARD_ADDED, staff);
    
    eventManager.subscribe(MilitaryEventType.AWARD_ADDED, notifications);



    console.log("\n[КРОК 2]: Симуляція події НАГОРОДИ через notify()...");
    const awardEvent: MilitaryEvent = {
        type: MilitaryEventType.AWARD_ADDED,
        cadetName: "Чернікова Катерина",
        details: "Нагороджена грамотою за відмінне навчання",
        timestamp: new Date()
    };
    eventManager.notify(awardEvent);

    console.log("\n[КРОК 3]: Симуляція події ДОГАНИ через notify()...");
    const penaltyEvent: MilitaryEvent = {
        type: MilitaryEventType.AWARD_ADDED,
        cadetName: "Сидоренко Артем",
        details: "Догана за порушення статуту",
        timestamp: new Date()
    };

    eventManager.notify(penaltyEvent);

    console.log("\n[КРОК 4]: Відписка від сповіщень про нагороди та симуляція події НАГОРОДИ...");
    eventManager.unsubscribe(MilitaryEventType.AWARD_ADDED, notifications);

    const awardEvent1: MilitaryEvent = {
        type: MilitaryEventType.AWARD_ADDED,
        cadetName: "Чернікова Катерина",
        details: "Нагороджена",
        timestamp: new Date()
    };
    eventManager.notify(awardEvent1);





}

testObserverMethods();