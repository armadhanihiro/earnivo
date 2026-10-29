import type { LucideIcon } from "lucide-react";

type SummaryCardProps = {
    title: string;
    value: string;
    description: string;
    icon: LucideIcon;
    accent?: boolean;
};

export default function SummaryCard({ title, value, description, icon: Icon, accent = false }: SummaryCardProps) {
    return (
        <article
            className={`
                rounded-2xl border p-5 shadow-sm transition-colors
                ${
                    accent
                        ? "border-emerald-200 bg-emerald-50 dark:border-emerald-500/20 dark:bg-emerald-500/10"
                        : "border-slate-200 bg-white dark:border-zinc-800 dark:bg-zinc-900"
                }
            `}
        >
            <div className="mb-5 flex items-start justify-between gap-3">
                <p className="text-sm font-medium text-slate-500 dark:text-zinc-400">
                    {title}
                </p>

                <div
                    className={`
                        rounded-xl p-2.5
                        ${
                            accent
                                ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400"
                                : "bg-slate-100 text-slate-600 dark:bg-zinc-800 dark:text-zinc-300"
                        }
                    `}
                    >
                    <Icon size={20} />
                </div>
            </div>

            <h3 className="break-words text-2xl font-bold tracking-tight sm:text-3xl">
                {value}
            </h3>

            <p className="mt-2 text-xs text-slate-500 dark:text-zinc-400">
                {description}
            </p>
        </article>
    );
}