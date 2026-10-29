export type Platform = "uber_eats" | "doordash" | "other";

export type Earning = {
    id: string;
    date: string;
    platform: Platform;
    amount: number;
    onlineHours: number;
    distanceKm: number;
    deliveries: number;
};

export type ExpenseCategory =
    | "fuel"
    | "parking"
    | "tolls"
    | "maintenance"
    | "insurance"
    | "other";

export type Expense = {
    id: string;
    date: string;
    category: ExpenseCategory;
    amount: number;
    description?: string;
};

export type DashboardPeriod =
    | "today"
    | "week"
    | "month"
    | "all";