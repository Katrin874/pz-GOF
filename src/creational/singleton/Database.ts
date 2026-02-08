import { Cadet } from "../builder/Cadet";

export class Database {
    static #instance: Database;
    private cadets: Cadet[] = [];

    private constructor() {
        console.log("[СИСТЕМА]: Центральне сховище активовано.");
    }

    // Точка доступу до єдиного екземпляра
    public static get instance(): Database {
        if (!Database.#instance) {
            Database.#instance = new Database();
        }
        return Database.#instance;
    }

    public addCadet(cadet: Cadet): void {
        this.cadets.push(cadet);
    }

    public getCadet(name: string): Cadet | undefined {
        return this.cadets.find(cadet => cadet.fullName === name);
    }

    public getAllCadets(): Cadet[] {
        //spread-оператор для безпеки даних
        return [...this.cadets];
    }
}