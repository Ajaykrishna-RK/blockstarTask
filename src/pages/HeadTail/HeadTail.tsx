import { useState } from "react";

type ValueType = "H" | "T";
type Column = {
  type: ValueType;
  values: ValueType[];
};

function HeadTail() {
  const [selected, setSelected] = useState("");
  const [columns, setColumns] = useState<Column[]>([]);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setError("");
    setSelected(e.target.value);
  };

  const handleSubmit = () => {
    if (selected !== "H" && selected !== "T") {
      setError("Please select value from dropdown");
      return;
    }

    setColumns((prevColumns) => {
      const updatedColumns = prevColumns.map((col) => ({
        type: col.type,
        values: [...col.values],
      }));
      const lastColumn = updatedColumns[updatedColumns.length - 1];
      if (lastColumn && lastColumn.type === selected) {
        lastColumn.values.push(selected as ValueType);
      } else {
        updatedColumns.push({
          type: selected as ValueType,
          values: [selected as ValueType],
        });
      }
      return updatedColumns;
    });
    setSelected("");
  };

  return (
    <div
      style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 4px 32px 0px" }}
      className="max-w-3xl mx-auto mt-10 p-[20px] rounded-[10px]   bg-white"
    >
      <h2 className="text-2xl font-bold ">Head & Tail Columns</h2>

      <select
        value={selected}
        onChange={handleChange}
        className="border focus:outline-none border-gray-300 px-3 mt-4 py-2 cursor-pointer rounded w-full "
      >
        <option value="">Select Value</option>
        <option value="H">H</option>
        <option value="T">T</option>
      </select>
      {error && <p className="text-red-500 text-md py-2">{error}</p>}
      <button
        onClick={handleSubmit}
        className="bg-blue-900 cursor-pointer mt-4 text-white px-4 py-2 rounded w-full hover:bg-blue-800"
      >
        Submit
      </button>
      <div className="mt-6 flex gap-4 items-start">
        {columns?.map((type, i) => (
          <div key={i} className="flex flex-col gap-1 items-center">
            {type?.values.map((value, index) => (
              <div
                key={index}
                className="w-10 h-10 flex items-center justify-center border rounded bg-gray-100 font-bold"
              >
                {value}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeadTail;
