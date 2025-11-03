import React, { useEffect, useState } from 'react';
import SummaryCards from '@/components/SummaryCards';
import BillsTable from '@/components/BillsTable';
import UsageCharts from '@/components/UsageCharts';
import FloorDistributionPie from '@/components/FloorDistributionPie';
import TrendAnalysis from '@/components/TrendAnalysis';
import Login from '@/components/Login';
import { fetchSummary, fetchMonthlyBills } from '@/api/client';

export default function App() {
  const [auth, setAuth] = useState<any | null>(null);
  const [summary, setSummary] = useState<any>({ totalUnits: 0, totalCost: 0, averageConsumption: 0, flatsCount: 0 });
  const [bills, setBills] = useState<any[]>([]);

  useEffect(() => {
    // Fallback demo data if API is unavailable
    const demoSummary = { totalUnits: 12450, totalCost: 223400, averageConsumption: 310.5, flatsCount: 48 };
    const demoBills = Array.from({ length: 10 }).map((_, i) => ({ floor: (i % 5) + 1, flat: `F${(i % 5) + 1}-${i + 1}`, month: 'Sep 2025', units: 250 + i * 5, cost: 1800 + i * 50 }));
    setSummary(demoSummary);
    setBills(demoBills);
    // Try loading real API data
    fetchSummary().then(setSummary).catch(() => {});
    fetchMonthlyBills().then(setBills).catch(() => {});
  }, []);

  const daily = Array.from({ length: 7 }, () => Math.round(200 + Math.random() * 50));
  const monthly = Array.from({ length: 12 }, (_, i) => 200 + i * 10 + Math.round(Math.random() * 20));
  const yearly = [2100, 2200, 2300, 2500, 2600];
  const floors = [
    { name: 'Floor 1', value: 25 },
    { name: 'Floor 2', value: 20 },
    { name: 'Floor 3', value: 18 },
    { name: 'Floor 4', value: 15 },
    { name: 'Floor 5', value: 22 },
  ];
  const insights = [
    'Floor 1 shows a 12% increase from last month.',
    'Average unit cost stable at ₹7.5 per kWh.',
    'Two flats have anomalous spikes (>40% month-over-month).',
  ];

  return (
    <div>
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto p-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="h-8 w-8 rounded-lg bg-brand-600" />
            <div>
              <h1 className="text-lg font-semibold">Faculty Electricity Management System</h1>
              <p className="text-xs text-slate-500">Campus-professional • Minimal • Fast</p>
            </div>
          </div>
          <div className="space-x-2">
            <button className="btn btn-outline">Upload CSV/Excel</button>
            <button className="btn btn-primary">Download Reports</button>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto p-4 space-y-4">
        <SummaryCards data={summary} />
        <UsageCharts daily={daily} monthly={monthly} yearly={yearly} />
        <FloorDistributionPie floors={floors} />
        <TrendAnalysis insights={insights} />
        <BillsTable rows={bills} />
      </main>
      {!auth && <Login onSuccess={setAuth} />}
    </div>
  );
}
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": ["src"]
}
