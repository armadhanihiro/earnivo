import { useState } from "react";
import {
    ArrowDownRight,
    ArrowUpRight,
    Clock3,
    Wallet,
} from "lucide-react";

import SummaryCard from "../components/dashboard/SummaryCard";

import {
    mockEarnings,
    mockExpenses,
} from "../data/mockFinance";

import {
    calculateSummary,
    filterByPeriod,
    formatCurrency,
} from "../lib/finance";

import type { DashboardPeriod } from "../types/finance";

const periods: { label: string; value: DashboardPeriod; }[] = [
    { label: "Today", value: "today" },
    { label: "This Week", value: "week" },
    { label: "This Month", value: "month" },
    { label: "All Time", value: "all" },
];

export default function Dashboard() {
    const [period, setPeriod] = useState<DashboardPeriod>("week");
    const filteredEarnings = filterByPeriod(mockEarnings, period);
    const filteredExpenses = filterByPeriod(mockExpenses, period);
    const summary = calculateSummary(filteredEarnings, filteredExpenses);

    return (
        <div className="space-y-8">
            {/* Header */}
            <header>
                <p className="mb-2 text-sm font-medium text-emerald-600 dark:text-emerald-400">
                    FINANCIAL OVERVIEW
                </p>

                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Dashboard
                </h1>

                <p className="mt-2 text-sm text-slate-500 dark:text-zinc-400">
                    Know what you really earn.
                </p>
            </header>

            {/* Period Filter */}
            <div role="group" aria-label="Dashboard period" className="flex flex-wrap gap-2">
                {periods.map(({ label, value }) => {
                    const active = period === value;

                    return (
                        <button
                            key={value}
                            type="button"
                            onClick={() => setPeriod(value)}
                            aria-pressed={active}
                            className={`
                                rounded-xl px-4 py-2 text-sm font-medium transition-colors
                                ${
                                    active
                                        ? "bg-emerald-600 text-white"
                                        : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
                                }
                            `}
                        >
                            {label}
                        </button>
                    );
                })}
            </div>

            {/* Summary Cards */}
            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                <SummaryCard
                    title="Gross Earnings"
                    value={formatCurrency(summary.grossEarnings)}
                    description="Total earnings before expenses"
                    icon={ArrowUpRight}
                />

                <SummaryCard
                    title="Total Expenses"
                    value={formatCurrency(summary.totalExpenses)}
                    description="Recorded operating expenses"
                    icon={ArrowDownRight}
                />

                <SummaryCard
                    title="Net Profit"
                    value={formatCurrency(summary.netProfit)}
                    description="Before tax and unrecorded costs"
                    icon={Wallet}
                    accent
                />

                <SummaryCard
                    title="Net Hourly Rate"
                    value={formatCurrency(summary.netHourlyRate)}
                    description={`${summary.onlineHours.toFixed(1)} online hours`}
                    icon={Clock3}
                />
            </section>

            {/* Additional Metrics */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
                <h2 className="mb-5 text-lg font-semibold">
                    Performance Overview
                </h2>

                <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
                    <Metric label="Online Hours" value={`${summary.onlineHours.toFixed(1)}h`}/>
                    <Metric label="Deliveries" value={String(summary.totalDeliveries)}/>
                    <Metric label="Distance" value={`${summary.totalDistanceKm.toFixed(1)} km`}/>
                    <Metric label="Gross / KM" value={formatCurrency(summary.earningsPerKm)}/>
                </div>
            </section>

            <p className="text-xs text-slate-400 dark:text-zinc-500">
                Demo data only. Financial figures are illustrative
                and do not represent actual Uber earnings.
            </p>
        </div>
    );
}

function Metric({ label, value }: { label: string; value: string; }) {
    return (
        <div>
            <p className="mb-2 text-xs text-slate-500 dark:text-zinc-400">
                {label}
            </p>

            <p className="text-xl font-semibold tracking-tight">
                {value}
            </p>
        </div>
    );
}