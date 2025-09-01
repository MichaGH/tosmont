// components/about/Timeline.jsx
export default function Timeline({ items = [] }) {
  return (
    <div className="border-l border-gray-200 pl-6">
      <ul className="space-y-8">
        {items.map((m, i) => (
          <li key={i} className="relative">
            <span className="absolute -left-3 top-1 w-6 h-6 rounded-full bg-white border border-blue-600 flex items-center justify-center text-xs text-blue-600 font-bold">
              {m.year}
            </span>
            <div className="ml-2">
              <div className="text-lg font-semibold text-gray-900">{m.title}</div>
              <div className="text-gray-600 mt-1">{m.text}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
