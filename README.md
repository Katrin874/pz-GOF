# Practical lesson pz-GOF  
# Реалізація GOF патернів проєктування  

> У цьому занятті студенти отримують практичний досвід імплементації класичних патернів проєктування (GoF — Gang of Four).  
> Мета — навчитися застосовувати породжувальні, структурні та поведінкові патерни для покращення архітектури програмних рішень.


## What need to do:
* Ознайомитися з основними групами патернів GoF:
  * Породжувальні (Creational)
  * Структурні (Structural)
  * Поведінкові (Behavioral)
* Реалізувати:
  * **2 породжувальні патерни** (наприклад: Factory Method, Abstract Factory, Builder, Singleton, Prototype)
  * **2 структурні патерни** (наприклад: Adapter, Facade, Decorator, Composite, Proxy, Bridge)
  * **1 поведінковий патерн** (наприклад: Strategy, Observer, Command, Iterator, Chain of Responsibility)
* Продемонструвати роботу кожного патерна (консольний приклад або простий сценарій)
* Пояснити, яку проблему вирішує кожен патерн
* Порівняти, як патерни покращують архітектуру коду порівняно з «анти-прикладами»
* Підготувати коротку документацію в README.md


## Acceptance criteria
* Використовуючи мову програмування Typescript
* Реалізовано **мінімум 5 патернів**:
  * 2 породжувальні
  * 2 структурні
  * 1 поведінковий
* Кожен патерн:
  * реалізований у окремій директорії  
  * має зрозумілий приклад застосування  
  * має коротке пояснення призначення  
  * демонструє очікувану роботу (через console.log або unit-тест)
* Код структурований за групами патернів
* README.md містить:
  * опис реалізованих патернів  
  * приклади запуску  
  * короткі висновки  
* Самостійна робота виконана:
  * додаткові патерни / додаткові приклади / альтернативні реалізації (опціонально)
* Проєкт успішно запускається

## Directory Structure

```
├── pz-GOF
│   ├── src
│   │   ├── creational
│   │   │   ├── factory-method
│   │   │   ├── builder
│   │   │   └── singleton
│   │   ├── structural
│   │   │   ├── adapter
│   │   │   ├── facade
│   │   │   └── decorator
│   │   ├── behavioral
│   │   │   ├── strategy
│   │   │   └── observer
│   ├── examples
│   │   ├── run-all.ts
│   ├── .editorconfig
│   ├── .gitignore
│   ├── package.json
│   ├── README.md
└──

```
## Useful links

[Refactoring Guru — Патерни проєктування](https://refactoring.guru/uk/design-patterns)

[Design Patterns in JavaScript](https://www.patterns.dev/posts/classic-design-patterns/)

[Head First Design Patterns (book)](https://www.oreilly.com/library/view/head-first-design/0596007124/)

[JavaScript Design Patterns — Addy Osmani](https://addyosmani.com/resources/essentialjsdesignpatterns/book/)

[Gang of Four (GoF) Patterns Overview](https://www.digitalocean.com/community/tutorials/gangs-of-four-gof-design-patterns)


## Опис реалізованих патернів

### Породжувальні Патерни (Creational):

**Singleton** (`src/creational/singleton/`)
* **Проблема:** Ризик розсинхронізації даних при створенні декількох примірників бази даних.
* **Рішення:** Гарантія наявності єдиного об'єкта сховища для всієї системи.
* **Приклад:** Клас `Database` для централізованого зберігання профілів курсантів.


**Builder** (`src/creational/builder/`)
* **Проблема:** Складний процес ініціалізації об'єктів з багатьма полями (курсанти, нагороди).
* **Рішення:** Покрокове створення об'єкта та розділення конструювання від представлення.
* **Приклад:** `CadetBuilder` для створення профілю та `AwardBuilder` для записів.


**Factory Method** (`src/creational/factory-method/`)
* **Проблема:** Необхідність створювати різні типи записів (заохочення/стягнення) без прив'язки до їхніх конкретних класів.
* **Рішення:** Визначення інтерфейсу створення об'єкта, що дозволяє підкласам вирішувати, який клас інстанціювати.
* **Приклад:** `AwardCreator` та `PenaltyCreator`.


### Структурні Патерни (Structural):

**Facade** (`src/structural/facade/`)
* **Проблема:** Складна взаємодія між БД, білдерами, фабриками та застарілою системою.
* **Рішення:** Єдиний спрощений інтерфейс для керування всіма внутрішніми компонентами.
* **Приклад:** `MilitarySystemFacade` (реєстрація, додавання подій, імпорт).


**Adapter** (`src/structural/adapter/`)
* **Проблема:** Необхідність імпорту даних із застарілої системи (Legacy), яка видає дані у несумісному форматі (рядок CSV).
* **Рішення:** Перетворення інтерфейсу застарілого класу на інтерфейс, який очікує нова система.
* **Приклад:** `LegacyRecordAdapter` для парсингу архівних записів.


### Поведінкові Патерни (Behavioral):

**Observer (Event Bus)** (`src/behavioral/observer/`)
* **Проблема:** Необхідність миттєвого сповіщення різних служб (Штаб, Служба сповіщень) про зміни в профілі курсанта без створення жорстких зв'язків.
* **Рішення:** Реалізація централізованої шини подій (`MilitaryEventManager`), де об'єкти публікують події, а зацікавлені служби підписуються на них.
* **Приклад:** Автоматичне логування в `StaffOffice` та SMS-сповіщення через `NotificationService` при додаванні заохочень чи стягнень.


---

## Структура Проєкту:

```text
src
├───behavioral
│   └───observer         # Шина подій, типи подій та класи спостерігачів
├───creational
│   ├───builder          # Логіка покрокового створення Cadet, Award, Penalty
│   ├───factory-method   # Творці записів (AwardCreator, PenaltyCreator)
│   └───singleton        # Централізоване сховище (Database)
├───structural
│   ├───adapter          # LegacyOrderSystem та LegacyRecordAdapter
│   └───facade           # MilitarySystemFacade (головний вузол керування)
└───models               # Базові класи даних (Cadet)
|
examples
└───run-all.ts           # взаємодія всіх 6 патернів


npm install — Завантажує необхідні залежності (TypeScript, Node engine) для роботи проєкту.

npm run build — TypeScript-код (.ts) у JavaScript (.js) і складає його в папку dist. фінальна перевірка типів.

npm start — Запускає вже зібраний проєкт із папки dist. Це найшвидший та найстабільніший спосіб роботи програми, який використовується на реальних серверах.

npm run all — Швидкий запуск головного сценарію безпосередньо через ts-node для перевірки логіки під час розробки.

# Породжувальні
npm run singleton
npm run builder
npm run factory-method

# Структурні
npm run adapter
npm run facade

# Поведінкові
npm run observer