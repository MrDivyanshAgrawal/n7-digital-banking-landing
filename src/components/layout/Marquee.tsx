import Image from "next/image";

export default function Marquee() {
  const items = [
    { text: "N7", highlight: true },
    { text: "Say 👋 to the new way of banking", highlight: false },
    { text: "CB7", highlight: true },
    { text: "Say 👋 to the new way of banking", highlight: false },
  ];

  const content = [...items, ...items, ...items, ...items];

  return (
    <div className="overflow-hidden border-y border-gray-200 bg-white py-2.5 sm:py-3">
      <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap">
        {content.map((item, i) => (
          <span key={i} className="flex items-center gap-3 text-sm font-medium">
            <Image
              src="/images/symbols/marquee-star.png"
              alt=""
              width={16}
              height={16}
              className="h-4 w-4 opacity-70"
              aria-hidden
            />
            <span
              className={
                item.highlight
                  ? "font-bold text-brand-blue"
                  : "text-gray-700"
              }
            >
              {item.text}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
