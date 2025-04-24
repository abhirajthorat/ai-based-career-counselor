export function Textarea({ placeholder, rows, value, onChange }) {
  return (
    <textarea
      className="w-full p-2 border border-gray-300 rounded"
      placeholder={placeholder}
      rows={rows}
      value={value}
      onChange={onChange}
    />
  );
}
