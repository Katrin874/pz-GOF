export interface IDisciplineRecord {
    title: string;
    orderNumber: string;
    issuerRank: string;  
    date: string; 
    getFormattedInfo(): string;
}