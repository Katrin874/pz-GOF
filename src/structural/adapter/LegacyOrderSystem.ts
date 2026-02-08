export class LegacyOrderSystem {
    private mainArchive: string[] = [
        "Чернікова, AWARD, Грамота за спорт, №405, 2026-02-05",
        "Петренко, AWARD, Подяка за службу, №102, 2025-11-12",
        "Чернікова, PENALTY, Зауваження: запізнення, №12-С, 2025-12-20",
        "Петренко, PENALTY, Догана: порушення статуту, №05, 2026-01-10",
        "Чернікова, AWARD, Медаль за відвагу, №15, 2025-05-20"
    ];

    public getFullArchive(): string[] {
        return this.mainArchive;
    }
}