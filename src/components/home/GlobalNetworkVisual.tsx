export default function GlobalNetworkVisual() {
  const nodes = [
    [130, 95],
    [180, 135],
    [235, 90],
    [285, 145],
    [350, 95],
    [405, 155],
    [465, 103],
    [520, 155],
    [580, 95],
    [155, 220],
    [220, 245],
    [300, 210],
    [370, 260],
    [445, 220],
    [530, 250],
  ];

  const connections = [
    [0, 1],
    [0, 2],
    [1, 3],
    [2, 3],
    [2, 4],
    [3, 5],
    [4, 5],
    [4, 6],
    [5, 7],
    [6, 7],
    [6, 8],
    [1, 9],
    [3, 10],
    [5, 11],
    [5, 12],
    [7, 13],
    [7, 14],
    [9, 10],
    [10, 11],
    [11, 12],
    [12, 13],
    [13, 14],
  ];

  return (
    <div className="relative h-full min-h-[320px] overflow-hidden bg-[#111]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,196,0,0.16),transparent_60%)]" />

      <svg
        viewBox="0 0 700 360"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <radialGradient id="globeGlow">
            <stop offset="0%" stopColor="#FFC400" stopOpacity=".28" />
            <stop offset="100%" stopColor="#FFC400" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="connection">
            <stop offset="0%" stopColor="#FFC400" stopOpacity=".2" />
            <stop offset="50%" stopColor="#FFC400" stopOpacity=".9" />
            <stop offset="100%" stopColor="#D9A441" stopOpacity=".2" />
          </linearGradient>
        </defs>

        <circle cx="350" cy="180" r="185" fill="url(#globeGlow)" />

        {/* Globe */}
        <circle
          cx="350"
          cy="180"
          r="135"
          fill="none"
          stroke="#D9A441"
          strokeWidth="1.5"
          strokeOpacity=".8"
        />

        <ellipse
          cx="350"
          cy="180"
          rx="70"
          ry="135"
          fill="none"
          stroke="#FFC400"
          strokeOpacity=".38"
        />

        <ellipse
          cx="350"
          cy="180"
          rx="115"
          ry="135"
          fill="none"
          stroke="#FFC400"
          strokeOpacity=".16"
        />

        <ellipse
          cx="350"
          cy="180"
          rx="135"
          ry="53"
          fill="none"
          stroke="#FFC400"
          strokeOpacity=".32"
        />

        <ellipse
          cx="350"
          cy="180"
          rx="135"
          ry="92"
          fill="none"
          stroke="#FFC400"
          strokeOpacity=".15"
        />

        {/* network connections */}
        {connections.map(([from, to], index) => (
          <line
            key={index}
            x1={nodes[from][0]}
            y1={nodes[from][1]}
            x2={nodes[to][0]}
            y2={nodes[to][1]}
            stroke="url(#connection)"
            strokeWidth="1"
          />
        ))}

        {nodes.map(([x, y], index) => (
          <g key={index}>
            <circle
              cx={x}
              cy={y}
              r="7"
              fill="#FFC400"
              opacity=".08"
            />

            <circle
              cx={x}
              cy={y}
              r="2.4"
              fill="#FFC400"
            />
          </g>
        ))}

        {/* continent-like tech geometry */}
        <path
          d="M295 122l34-22 38 13 15 24 31 9-18 28-34 4-22 26-42-15-18-33z"
          fill="#FFC400"
          opacity=".16"
          stroke="#FFC400"
          strokeOpacity=".65"
        />

        <path
          d="M381 202l35-18 34 14 16 31-20 35-41 12-30-24z"
          fill="#D9A441"
          opacity=".12"
          stroke="#D9A441"
          strokeOpacity=".6"
        />
      </svg>

      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/45 to-transparent" />
    </div>
  );
}