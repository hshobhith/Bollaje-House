import * as XLSX from "xlsx";

type Props = {
  id: string[];
  date: string[];
  name: string[];
  phone: string[];
  arecunent: string[];
  amount: number[]; 
};

export default function DownloadXLSX({ id, date, name, arecunent, amount }: Props) {
  const download = () => {
    if (!id || id.length === 0) {
      alert("No data available to download.");
      return;
    }

    const worksheet = XLSX.utils.json_to_sheet(id.map((_, index) => ({
      Date: date[index],
      Name: name[index],
      Arecunent: arecunent[index],
      Amount: amount[index],
    })));
    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, "Billing Data");

    XLSX.writeFile(workbook, "billing-data.xlsx");
  };

  return (
    <button
      onClick={download}
      className="mt-4 px-4 py-2 bg-blue-500 rounded hover:bg-blue-400"
    >
      Download XLSX
    </button>
  );
}
