import Image from "next/image";

export default function TechnicalLimits({ limits }) {
  return (
      <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200 w-full">
         {limits.map((limit, i) => {
          const Icon = limit.icon;
          return (
            <div
              key={i}
              className="relative flex flex-col items-center text-center px-4 py-6"
            >
              
              {/* Icon */}
{/*               <Icon className="w-12 h-12 text-blue-400 mb-4"  strokeWidth={1}/>
 */}
              {/* Value */}
              <span className="text-blue-600 font-extrabold text-3xl xl:text-4xl">
                {limit.value}
              </span>

              {/* Title */}
              <span className="text-gray-700 mt-1 text-base">{limit.title}</span>
              
            </div>
          );
        })}
      </div>
  );
}
