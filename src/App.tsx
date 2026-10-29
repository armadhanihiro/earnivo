import { ArrowUpRight, Wallet } from "lucide-react";
import ThemeSwitcher from "./components/ThemeSwitcher";

export default function App() {
  return (
    <main className="min-h-screen bg-slate-50 px-5 py-10 text-slate-900 transition-colors duration-200 dark:bg-zinc-950 dark:text-white">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <header className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500 text-white">
              <Wallet size={23} />
            </div>

            <div>
              <h1 className="text-2xl font-bold tracking-tight">
                Earnivo
              </h1>
              <p className="text-xs text-slate-500 dark:text-zinc-400">
                Know What You Really Earn
              </p>
            </div>
          </div>

          <ThemeSwitcher />
        </header>

        {/* Welcome */}
        <section className="mb-8">
          <p className="mb-2 text-sm font-medium text-emerald-600 dark:text-emerald-400">
            YOUR FINANCIAL OVERVIEW
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Your earnings, made clear.
          </h2>

          <p className="mt-3 max-w-xl text-slate-500 dark:text-zinc-400">
            Track your delivery earnings, manage expenses, and
            understand your real profit.
          </p>
        </section>

        {/* Demo Card */}
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <div className="mb-5 flex items-center justify-between">
            <span className="text-sm font-medium text-slate-500 dark:text-zinc-400">
              Net Profit
            </span>

            <div className="rounded-lg bg-emerald-50 p-2 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
              <ArrowUpRight size={20} />
            </div>
          </div>

          <h3 className="text-4xl font-bold tracking-tight">
            $0.00
          </h3>

          <p className="mt-3 text-sm text-slate-500 dark:text-zinc-400">
            Your earnings summary will appear here.
          </p>
        </section>

        <footer className="mt-10 text-center text-xs text-slate-400 dark:text-zinc-600">
          Earnivo · Personal Earnings Intelligence
        </footer>
      </div>
    </main>
  );
}