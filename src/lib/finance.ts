import type {
    DashboardPeriod,
    Earning,
    Expense,
} from "../types/finance";

function parseLocalDate(dateString: string): Date {
    const [year, month, day] = dateString.split("-").map(Number);

    return new Date(year, month - 1, day);
}

function startOfDay(date: Date): Date {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

export function filterByPeriod<T extends { date: string }>(entries: T[], period: DashboardPeriod, now = new Date()): T[] {
    if (period === "all") {
        return entries;
    }

    const today = startOfDay(now);
    let startDate: Date;

    switch (period) {
        case "today":
            startDate = today;
            break;

        case "week": {
            const day = today.getDay();
            const mondayOffset = (day + 6) % 7;

            startDate = new Date(today);
            startDate.setDate(today.getDate() - mondayOffset);
            break;
        }

        case "month":
            startDate = new Date(
                today.getFullYear(),
                today.getMonth(),
                1
            );
            break;
    }

    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    return entries.filter((entry) => {
        const date = parseLocalDate(entry.date);

        return date >= startDate && date < tomorrow;
    });
}

export function calculateSummary(earnings: Earning[], expenses: Expense[]) {
    const grossEarnings = earnings.reduce((total, entry) => total + entry.amount, 0);
    const totalExpenses = expenses.reduce((total, entry) => total + entry.amount, 0);
    const onlineHours = earnings.reduce((total, entry) => total + entry.onlineHours, 0);
    const totalDistanceKm = earnings.reduce((total, entry) => total + entry.distanceKm, 0);
    const totalDeliveries = earnings.reduce((total, entry) => total + entry.deliveries, 0);
    const netProfit = grossEarnings - totalExpenses;
    const grossHourlyRate = onlineHours > 0 ? grossEarnings / onlineHours : 0;
    const netHourlyRate = onlineHours > 0 ? netProfit / onlineHours : 0;
    const earningsPerKm = totalDistanceKm > 0 ? grossEarnings / totalDistanceKm : 0;

    return {
        grossEarnings,
        totalExpenses,
        netProfit,
        onlineHours,
        totalDistanceKm,
        totalDeliveries,
        grossHourlyRate,
        netHourlyRate,
        earningsPerKm,
    };
}

export function formatCurrency(amount: number): string {
    return new Intl.NumberFormat("en-AU", {
        style: "currency",
        currency: "AUD",
    }).format(amount);
}