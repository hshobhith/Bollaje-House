import React, { useState } from "react";

type SortBarProps = {
  onSort: (type: "date" | "amount") => void;
  onMonthFilter: (year: number, month: number) => void;
  onSearch: (query: string) => void;
  handleClear: () => void;
};

export default function SortBar({
  onSort,
  onMonthFilter,
  onSearch,
  handleClear,
}: SortBarProps) {
  const [openMonth, setOpenMonth] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const applyMonthFilter = () => {
    if (!month || !year) return;
    onMonthFilter(Number(year), Number(month));
    setOpenMonth(false);
  };

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    onSearch(value);
  };

  const handleClearParms = () => {
    setSearchTerm("");
    setMonth("");
    setYear("");
    onSearch("");
    onMonthFilter(0, 0); 
    handleClear();
  }

  return (
    <div className="flex items-center gap-4 mb-4 relative">
      <span className="font-medium">Sort by:</span>

      <button
        onClick={() => onSort("date")}
        className="px-3 py-1 bg-blue-500 hover:bg-blue-400 rounded"
      >
        Date
      </button>

      <button
        onClick={() => onSort("amount")}
        className="px-3 py-1 bg-blue-500 hover:bg-blue-400 rounded"
      >
        Amount
      </button>

      <button
        onClick={() => {
          setOpenMonth((prev) => !prev);
          setOpenSearch(false);
        }}
        className="px-3 py-1 bg-blue-500 hover:bg-blue-400 rounded"
      >
        Filter by Month
      </button>

      <input
        type="text"
        placeholder="Search name or phone..."
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
        className="border px-3 py-1 rounded w-60"
      />

    <button
        onClick={handleClearParms}
        className="bg-red-500 text-white px-3 py-2 rounded"
      >
        Clear
    </button>

      {openMonth && (
        <div className="absolute top-12 left-0 bg-gray-300 shadow-lg border rounded p-4 w-60 z-20">
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium">Select Month</label>
              <select
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                className="w-full border p-2 rounded"
              >
                <option value="">Choose Month</option>
                {[...Array(12)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {new Date(0, i).toLocaleString("en", { month: "long" })}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium">Select Year</label>
              <input
                type="number"
                placeholder="Enter Year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="w-full border p-2 rounded"
              />
            </div>

            <button
              onClick={applyMonthFilter}
              className="w-full py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
