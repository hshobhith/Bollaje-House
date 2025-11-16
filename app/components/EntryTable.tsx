"use client";
import { BillingEntry } from "../admin/dashboard/page";
import { FaWhatsapp , FaSms } from "react-icons/fa";


type EntryTableProps = {
  entries: BillingEntry[];
  onEdit: (entry: BillingEntry) => void;
  onDelete: (_id: string) => void;
  pricePerKg: number;
};

export default function EntryTable({ entries, onEdit, onDelete, pricePerKg }: EntryTableProps) {
  const sendWhatsApp = (entry: BillingEntry) => {
    const msg = `Hello ${entry.name},\n\n This is the Details of Arecanut Dehusking\n Date : ${entry.date}\n Total Arecanut (in Kg) : ${entry.arecunent}\n Dehusking Price(Per Kg) : ${pricePerKg} \n Total Amount: ₹${entry.amount}`;
    const url = `https://wa.me/${entry.phone}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  const sendSMS = (entry: BillingEntry) => {
    const msg = `Hello ${entry.name},
    This is the Details of Arecanut Dehusking
    Date : ${entry.date}
    Total Arecanut (in Kg) : ${entry.arecunent}
    Dehusking Price(Per Kg) : ${pricePerKg}
    Total Amount: ₹${entry.amount}`;
    const smsUrl = `sms:${entry.phone}?body=${encodeURIComponent(msg)}`;
    window.location.href = smsUrl;
};

  return (
    <table className="w-full border mt-4" id="default-table">
      <thead>
        <tr className="bg-gray-300">
          <th className="p-2">Date</th>
          <th className="p-2">Name</th>
          <th className="p-2">Phone</th>
          <th className="p-2">Arecanent</th>
          <th className="p-2">Amount</th>
          <th className="p-2">Actions</th>
        </tr>
      </thead>

      <tbody>
        {entries.map((e) => (
          <tr key={e._id} className="border-b">
            <td className="p-2">{e.date}</td>
            <td className="p-2">{e.name}</td>
            <td className="p-2">{e.phone}</td>
            <td className="p-2">{e.arecunent}</td>
            <td className="p-2 font-semibold">₹{e.amount}</td>

            <td className="p-2 flex gap-2" style={{justifyContent: 'center'}}>
              <button
                onClick={() => sendSMS(e)}
                className="p-2 bg-green-500 text-white rounded"
              >
                <FaSms size={16} />
              </button>

              <button
                onClick={() => sendWhatsApp(e)}
                className="p-2 bg-green-500 text-white rounded"
              >
                <FaWhatsapp size={16} />
              </button>

              <button
                onClick={() => onEdit(e)}
                className="px-2 py-1 bg-yellow-500 text-white rounded"
              >
                Edit
              </button>

              <button
                onClick={() => {
                  if (window.confirm("Are you sure you want to delete this item?")) {
                    onDelete(e._id!);
                  }
                }}
                className="px-2 py-1 bg-red-500 text-white rounded"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
