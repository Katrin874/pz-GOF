import { Database } from "../../creational/singleton/Database";
import { CadetBuilder } from "../../creational/builder/CadetBuilder";
import { AwardCreator } from "../../creational/factory-method/AwardCreator";
import { PenaltyCreator } from "../../creational/factory-method/PenaltyCreator";
import { LegacyOrderSystem } from "../adapter/LegacyOrderSystem";
import { LegacyRecordAdapter } from "../adapter/LegacyRecordAdapter";

export class MilitarySystemFacade {
    private database = Database.instance;
    private cadetBuilder = new CadetBuilder();
    private awardFactory = new AwardCreator();
    private penaltyFactory = new PenaltyCreator();
    private legacySystem = new LegacyOrderSystem();

    public registerCadet(name: string, rank: string, group: string): void {
        const cadet = this.cadetBuilder
            .setName(name)
            .setRank(rank)
            .setGroup(group)
            .build();
        
        this.database.addCadet(cadet);
        console.log(`[ФАСАД]: Профіль курсанта ${name} створено та збережено в БД.`);
    }

    public addDisciplineEvent(cadetName: string, type: 'award' | 'penalty', data: any): void {
        const cadet = this.database.getCadet(cadetName);
        if (!cadet) {
            console.log(`[ФАСАД]: Помилка - курсанта ${cadetName} не знайдено.`);
            return;
        }

        const creator = type === 'award' ? this.awardFactory : this.penaltyFactory;
        const record = creator.factoryMethod(data);
        
        if (type === 'award') cadet.addAward(record as any);
        else cadet.addPenalty(record as any);

        console.log(`[ФАСАД]: Новий запис (${type}) успішно додано до профілю.`);
    }

    public importAllArchiveData(cadetName: string): void {
        const cadet = this.database.getCadet(cadetName);
        if (!cadet) {
            console.log(`[ФАСАД]: Помилка - неможливо імпортувати дані для неіснуючого курсанта ${cadetName}.`);
            return;
        }

        const lastName = cadetName.split(' ')[0];
        const rawArchive = this.legacySystem.getFullArchive();
        let importedCount = 0;

        rawArchive.forEach(rawRow => {
            const adapted = new LegacyRecordAdapter(rawRow);

            if (adapted.ownerName === lastName) {
                
                if (adapted.type === "AWARD") {
                    cadet.addAward(adapted);
                } else if (adapted.type === "PENALTY") {
                    cadet.addPenalty(adapted);
                }
                
                importedCount++;
            }
        });

        console.log(`[ФАСАД]: З архіву знайдено та імпортовано ${importedCount} записів для ${cadetName}.`);
    }

    public printUnitReport(): void {
        console.log("\n--- ФОРМУВАННЯ ЗВІТУ ПІДРОЗДІЛУ ---");
        this.database.getAllCadets().forEach(cadet => cadet.displayProfile());
    }
}