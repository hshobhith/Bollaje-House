"use client";

import { BillingEntry } from "../admin/dashboard/page";

type TotalAmountProps = {
  entries: BillingEntry[];
};

export default function TotalAmount({ entries }: TotalAmountProps) {
  const totalAmount = entries.reduce((sum, e) => sum + Number(e.amount), 0);
  const totalArecanut = entries.reduce((sum, e) => sum + Number(e.arecunent), 0);

  return (
    <div className="mt-4 text-xl font-bold">
       Total Arecanut: {totalArecanut} KG | Total Amount: ₹{totalAmount}
    </div>
  );
}
