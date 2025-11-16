"use client";

import { useState } from "react";
import AddEntryModal from "../../components/AddEntryModal";
import EntryTable from "../../components/EntryTable";
import SortBar from "../../components/SortBar";
import DownloadXLSX from "../../components/DownloadXLSX";
import TotalAmount from "../../components/TotalAmount";
import { useEffect } from "react";
import { API_URL } from "../../utils/api";

export type BillingEntry = {
  _id?: string;
  date: string;
  name: string;
  phone: string;
  arecunent: string;
  amount: number;
};


export default function DashboardPage() {
    
  const [entries, setEntries] = useState<BillingEntry[]>([]);
  const [open, setOpen] = useState(false);  
  const [editEntry, setEditEntry] = useState<BillingEntry | null>(null);
  const [pricePerKg, setPricePerKg] = useState(10);

    useEffect(() => {
    fetch(`${API_URL}/api/price`)
        .then((res) => res.json())
        .then((data) => setPricePerKg(data.pricePerKg));
    }, []);

  useEffect(() => {
    fetch( `${API_URL}/api/billing` )
        .then((res) => res.json())
        .then((data) => setEntries(data));
    }, []);

    const handleAdd = async (data: BillingEntry) => {
        const res = await fetch(`${API_URL}/api/billing`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        const saved = await res.json();
        setEntries([...entries, saved]);
    };

    const handleUpdate = async (updated: BillingEntry) => {
        const res = await fetch(`${API_URL}/api/billing/${updated._id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updated),
        });

        const newData = await res.json();

        setEntries(entries.map((e) => (e._id === newData._id ? newData : e)));
    };

    const handleDelete = async (id: string) => {
        await fetch(`${API_URL}/api/billing/${id}`, {
            method: "DELETE",
        });

        setEntries(entries.filter((e) => e._id !==  id));
    };

    const parseDMY = (dateStr: string) => {
      const [dd, mm, yyyy] = dateStr.split("-");
      return new Date(`${yyyy}-${mm}-${dd}`);
    };

  const handleSort = (type: string) => {
    const sorted = [...entries];

    if (type === "amount") sorted.sort((a, b) => b.amount - a.amount);
    else if (type === "date") sorted.sort((a, b) => parseDMY(b.date).getTime() - parseDMY(a.date).getTime());
    setEntries(sorted);
  };

    const handleMonthFilter = (year: number, month: number) => {
        const filtered = entries.filter((e) => {
            const d = new Date(e.date);
            return d.getFullYear() === year && d.getMonth() + 1 === month;
        });

        setEntries(filtered);
    };

    const handleSearch = (query: string) => {
    const lower = query.toLowerCase();

    const result = entries.filter((e) =>
        e.name.toLowerCase().includes(lower) ||
        e.phone.includes(query)
    );
    setEntries(result);
    };

    const handleClear = () => {
    fetch(`${API_URL}/api/billing`)
        .then((res) => res.json())
        .then((data) => setEntries(data));
    }

    const updatePrice = async () => {
        const res = await fetch(`${API_URL}/api/price`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ pricePerKg }),
        });

        const data = await res.json();
        setPricePerKg(data.pricePerKg);
    };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Billing Dashboard</h1>
        <button
          onClick={() => {
            setEditEntry(null);
            setOpen(true);
          }}
          className="px-4 py-2 bg-blue-600 rounded-lg"
        >
          Add Entry
        </button>
      </div>

        <div className="text-lg font-semibold mb-4">
            Dehusking Price per KG: ₹{pricePerKg}
        </div>
        <div className="flex items-center gap-2 mb-4">
            <input
                type="number"
                value={pricePerKg}
                onChange={(e) => setPricePerKg(Number(e.target.value))}
                className="border p-2 rounded w-32"
            />
            <button
                onClick={updatePrice}
                className="px-4 py-2 bg-green-600 text-white rounded"
            >
                Update Price
            </button>
        </div>
      <SortBar onSort={handleSort}
        onMonthFilter={handleMonthFilter}
        onSearch={handleSearch}
        handleClear={handleClear}
        />

      <EntryTable
        entries={entries}
        onEdit={(item: BillingEntry) => {
          setEditEntry(item);
          setOpen(true);
        }}
        onDelete={handleDelete}
        pricePerKg={pricePerKg}
      />

      <TotalAmount entries={entries} />

      <DownloadXLSX
        id = {entries.map(entry => entry._id!)}
        date = {entries.map(entry => entry.date)}
        name = {entries.map(entry => entry.name)}
        phone = {entries.map(entry => entry.phone)}
        arecunent = {entries.map(entry => entry.arecunent)}
        amount = {entries.map(entry => entry.amount)}
        />

      {open && (
        <AddEntryModal
          onClose={() => setOpen(false)}
          onSubmit={editEntry ? handleUpdate : handleAdd}
          editData={editEntry}
          pricePerKg={pricePerKg}
        />
      )}
    </div>
  );
}
