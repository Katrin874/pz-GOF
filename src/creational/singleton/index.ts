import { Database } from "./Database";

const db1 = Database.instance;
const db2 = Database.instance;

console.log(`Чи ідентичні екземпляри БД? ${db1 === db2 ? "ТАК" : "НІ"}`);