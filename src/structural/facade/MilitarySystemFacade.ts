import { Database } from "../../creational/singleton/Database";
import { CadetBuilder } from "../../creational/builder/CadetBuilder";
import { AwardCreator } from "../../creational/factory-method/AwardCreator";
import { PenaltyCreator } from "../../creational/factory-method/PenaltyCreator";
import { OrderCreator } from "../../creational/factory-method/OrderCreator";
import { LegacyOrderSystem } from "../adapter/LegacyOrderSystem";
import { LegacyRecordAdapter } from "../adapter/LegacyRecordAdapter";

import { MilitaryEventManager } from "../../behavioral/observer/MilitaryEventManager";
import { MilitaryEventType } from "../../behavioral/observer/MilitaryEventType";
import { StaffOffice } from "../../behavioral/observer/StaffOffice";
import { NotificationService } from "../../behavioral/observer/NotificationService";

import { IRatingStrategy } from "../../behavioral/strategy/IRatingStrategy";
import { StandardRatingStrategy } from "../../behavioral/strategy/StandardRatingStrategy";

export class MilitarySystemFacade {
    private database = Database.instance;
    private legacySystem = new LegacyOrderSystem();
    
    private awardFactory = new AwardCreator();
    private penaltyFactory = new PenaltyCreator();
    private orderFactory = new OrderCreator();

    private ratingStrategy: IRatingStrategy;

    constructor() {
        this.setupEventListeners();
        this.ratingStrategy = new StandardRatingStrategy();
        console.log("[ФАСАД]: Систему інтелектуального обліку активовано.");
    }

    public setRatingStrategy(strategy: IRatingStrategy): void {
        this.ratingStrategy = strategy;
        console.log(`[ФАСАД]: Стратегію рейтингу змінено на: ${strategy.getStrategyName()}`);
    }

    
    private setupEventListeners(): void {
        const eventManager = MilitaryEventManager.getInstance();
        const staff = new StaffOffice();
        const notifications = new NotificationService();

        eventManager.subscribe(MilitaryEventType.AWARD_ADDED, staff);
        eventManager.subscribe(MilitaryEventType.PENALTY_ADDED, staff);
        eventManager.subscribe(MilitaryEventType.PENALTY_ADDED, notifications);
    }

   
    public onboardCadet(fullName: string, rank: string, group: string): void {
        const cadet = new CadetBuilder()
            .setName(fullName)
            .setRank(rank)
            .setGroup(group)
            .build();
        
        this.database.addCadet(cadet);
        this.syncWithArchive(cadet);

        console.log(`[ФАСАД]: Профіль ${fullName} успішно створено та синхронізовано з архівом.`);
    }

    
    public processAutoDiscipline(
        cadetName: string, 
        title: string, 
        orderNumber: string, 
        issuer: string = "Командування інституту"
    ): void {
        const cadet = this.database.getCadet(cadetName);
        if (!cadet) {
            console.error(`[ФАСАД]: Курсанта ${cadetName} не знайдено.`);
            return;
        }

        const awardKeywords = ["нагорода", "подяка", "заохочення", "грамота", "медаль", "відзнака", "премія"];
        const penaltyKeywords = ["догана", "зауваження", "стягнення", "попередження", "покарання"];

        const lowerTitle = title.toLowerCase();
        const today = new Date().toLocaleDateString();

        if (awardKeywords.some(word => lowerTitle.includes(word))) {
            const award = this.awardFactory.factoryMethod({
                category: title, order: orderNumber, date: today, issuer: issuer
            });
            cadet.addAward(award as any);
        } 
        else if (penaltyKeywords.some(word => lowerTitle.includes(word))) {
            const penalty = this.penaltyFactory.factoryMethod({
                type: "Дисциплінарне стягнення", orderNumber: orderNumber, reason: title, date: today
            });
            cadet.addPenalty(penalty as any);
        } 
        else {
            console.warn(`[ФАСАД]: Тип події для "${title}" не розпізнано. Запис проігноровано.`);
            return;
        }

        const officialOrder = this.orderFactory.factoryMethod({
            orderNumber: orderNumber,
            date: today,
            issuer: issuer
        });

        if ((cadet as any).addOrder) {
            (cadet as any).addOrder(officialOrder);
        }
    }

    private syncWithArchive(cadet: any): void {
        const lastName = cadet.fullName.split(' ')[0];
        const rows = this.legacySystem.getFullArchive();

        rows.forEach(row => {
            const adapted = new LegacyRecordAdapter(row);
            if (adapted.ownerName === lastName) {
                if (adapted.type === "AWARD") cadet.addAward(adapted);
                else cadet.addPenalty(adapted);
            }
        });
    }

    public generateUnitReport(): void {
        console.log(`\n--- ЗАГАЛЬНИЙ ЗВІТ ПІДРОЗДІЛУ (РЕЖИМ: ${this.ratingStrategy.getStrategyName()}) ---`);
        
        this.database.getAllCadets().forEach(cadet => {
            cadet.displayProfile();
            
            const score = this.ratingStrategy.calculate(
                cadet.awards.length,
                cadet.penalties.length
            );
            
            console.log(`>>> ПІДСУМКОВИЙ РЕЙТИНГ КУРСАНТА: ${score} балів`);
            console.log('-----------------------------------------');
        });
    }
}