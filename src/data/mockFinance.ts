import type { Earning, Expense } from "../types/finance";

function dateOffset(daysAgo: number): string {
    const date = new Date();

    date.setDate(date.getDate() - daysAgo);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
}

export const mockEarnings: Earning[] = [
    {
        id: "earning-1",
        date: dateOffset(0),
        platform: "uber_eats",
        amount: 125.5,
        onlineHours: 4.5,
        distanceKm: 82,
        deliveries: 12,
    },
    {
        id: "earning-2",
        date: dateOffset(1),
        platform: "uber_eats",
        amount: 98.75,
        onlineHours: 3.8,
        distanceKm: 65,
        deliveries: 9,
    },
    {
        id: "earning-3",
        date: dateOffset(3),
        platform: "uber_eats",
        amount: 152.2,
        onlineHours: 5.2,
        distanceKm: 104,
        deliveries: 15,
    },
    {
        id: "earning-4",
        date: dateOffset(8),
        platform: "uber_eats",
        amount: 110,
        onlineHours: 4,
        distanceKm: 74,
        deliveries: 10,
    },
    {
        id: "earning-5",
        date: dateOffset(18),
        platform: "uber_eats",
        amount: 175.4,
        onlineHours: 6,
        distanceKm: 118,
        deliveries: 17,
    },
    {
        id: "earning-6",
        date: dateOffset(35),
        platform: "uber_eats",
        amount: 142.8,
        onlineHours: 5,
        distanceKm: 93,
        deliveries: 13,
    },
];

export const mockExpenses: Expense[] = [
    {
        id: "expense-1",
        date: dateOffset(0),
        category: "fuel",
        amount: 22.5,
        description: "Fuel refill",
    },
    {
        id: "expense-2",
        date: dateOffset(1),
        category: "parking",
        amount: 5,
        description: "Parking",
    },
    {
        id: "expense-3",
        date: dateOffset(3),
        category: "fuel",
        amount: 28,
        description: "Fuel refill",
    },
    {
        id: "expense-4",
        date: dateOffset(8),
        category: "maintenance",
        amount: 75,
        description: "Vehicle maintenance",
    },
    {
        id: "expense-5",
        date: dateOffset(18),
        category: "insurance",
        amount: 45,
        description: "Insurance allocation",
    },
    {
        id: "expense-6",
        date: dateOffset(35),
        category: "fuel",
        amount: 30,
        description: "Fuel refill",
    },
];