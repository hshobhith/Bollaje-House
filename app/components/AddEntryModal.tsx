import { useState, ChangeEvent } from "react";

export type EntryType = {
  _id?: string; 
  date: string;
  name: string;
  phone: string;
  arecunent: string;
  amount: number;
};

type AddEntryModalProps = {
  onClose: () => void;
  onSubmit: (data: EntryType) => void;
  editData?: EntryType | null;
  pricePerKg: number;
};

export default function AddEntryModal({
  onClose,
  onSubmit,
  editData,
  pricePerKg,
}: AddEntryModalProps) {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const yyyy = today.getFullYear();
  const [form, setForm] = useState<Omit<EntryType, "_id">>(
    editData
      ? { ...editData }
      : {
          date: `${dd}-${mm}-${yyyy}`,
          name: "",
          phone: "",
          arecunent: "",
          amount: 0,
        }
  );

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const original = e.target.value; 
    const [year, month, day] = original.split("-");
    const formatted = `${day}-${month}-${year}`; 

    setForm(prev => ({
      ...prev,
      date: formatted
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "arecunent") {
        const num = Number(value);
        setForm((prev) => ({
        ...prev,
        arecunent: value,      
        amount: num * pricePerKg || 0 
        }));
        return;
    }

    setForm((prev) => ({
        ...prev,
        [name]: value
    }));
    };

  const handleSubmit = () => {
    const finalEntry: EntryType = {
      ...form,
      ...(editData && { _id: editData._id }), 
    };

    onSubmit(finalEntry);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-gray-300 p-6 rounded-lg w-96 shadow-lg">
        <h2 className="text-xl font-bold mb-3">
          {editData ? "Edit Entry" : "Add Entry"}
        </h2>

        <div className="space-y-3">
          <input
            type="date"
            onChange={handleDateChange}
            className="border p-2"
          />

          <input
            name="name"
            placeholder="Customer Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <input
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <input
            name="arecunent"
            placeholder="Arecanut (in Kg)"
            value={form.arecunent}
            onChange={handleChange}
            className="w-full border p-2 rounded"
        />

        <input
            name="amount"
            type="number"
            placeholder="Amount"
            value={form.amount}
            onChange={handleChange}
            className="w-full border p-2 rounded"
        />

          <div className="flex justify-end gap-2 pt-3">
            <button
              onClick={onClose}
              className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
            >
              Cancel
            </button>

            <button
              onClick={handleSubmit}
              className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              {editData ? "Update" : "Add"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
