import { CadetBuilder } from "./CadetBuilder";
import { AwardBuilder } from "./AwardBuilder";
import { PenaltyBuilder } from "./PenaltyBuilder";


const award = new AwardBuilder()
    .setCategory("Нагородження грамотою")
    .setOrderNumber("101-А")
    .setDate("05.02.2026")
    .setIssuerRank("начальник інституту")
    .build();

const penalty = new PenaltyBuilder()
    .setType("Сувора догана")
    .setOrderNumber("12-С")
    .setReason("запізнення з відпустки на 2 години")
    .setDate("06.02.2026")
    .setIssuerRank("командир взводу")
    .build();

const builder = new CadetBuilder();
const cadet = builder
    .setName("Чернікова Катерина")
    .setRank("Солдат")
    .setGroup("221")
    .addAward(award)   
    .addPenalty(penalty)
    .build();

 cadet.displayProfile();