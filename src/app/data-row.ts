export interface Item {
        id: number,
        name: string,
        clicks: number,
        impressions: number,
        ctr: number,
        avgCpc: number,
        cost: number,
        conversions: number,
        costClick: number
}

export interface DataRow {
        id: number,
        name: string,
        items: Item[],
        status: string,
        maxCpc: number,
        clicks: number,
        impressions: number,
        ctr: number,
        avgCpc: number,
        cost: number,
        conversions: number,
        costClick: number
}