"use client";

import type { ReactNode } from "react";

import { motion } from "framer-motion";

import {
  Activity,
  CloudUpload,
  Database,
  LockKeyhole,
  Server,
  ShieldCheck,
} from "lucide-react";

export default function TechHeroVisual() {
  return (
    <div className="relative mx-auto h-[510px] w-full max-w-[760px] overflow-hidden">
      {/* =====================================================
          ORBIT / NETWORK SYSTEM
      ====================================================== */}

      <div className="absolute left-1/2 top-[46%] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d9a441]/20" />

      <div className="absolute left-1/2 top-[46%] h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d9a441]/20" />

      <div className="absolute left-1/2 top-[46%] h-[255px] w-[255px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#d9a441]/25" />

      {/* rotating outer arc */}

      <motion.div
        className="absolute left-1/2 top-[46%] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border-r-2 border-t-2 border-[#ffc400]/55"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* =====================================================
          ORBIT PARTICLES
      ====================================================== */}

      <motion.span
        className="absolute left-[73%] top-[19%] h-2 w-2 rounded-full bg-[#ffc400] shadow-[0_0_18px_rgba(255,196,0,0.8)]"
        animate={{
          opacity: [0.45, 1, 0.45],
        }}
        transition={{
          duration: 2.6,
          repeat: Infinity,
        }}
      />

      <motion.span
        className="absolute left-[32%] top-[27%] h-[6px] w-[6px] rounded-full bg-[#d9a441]"
        animate={{
          opacity: [0.35, 1, 0.35],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: 0.7,
        }}
      />

      <motion.span
        className="absolute right-[27%] top-[34%] h-[5px] w-[5px] rounded-full bg-[#ffc400]/70"
        animate={{
          opacity: [0.3, 0.9, 0.3],
        }}
        transition={{
          duration: 2.4,
          repeat: Infinity,
          delay: 1.1,
        }}
      />

      {/* =====================================================
          CONNECTION LINES
      ====================================================== */}

      <svg
        viewBox="0 0 760 510"
        className="pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="lineLeft"
            x1="0"
            x2="1"
          >
            <stop
              offset="0%"
              stopColor="#d9a441"
              stopOpacity="0"
            />

            <stop
              offset="70%"
              stopColor="#d9a441"
              stopOpacity="0.55"
            />

            <stop
              offset="100%"
              stopColor="#ffc400"
              stopOpacity="0.8"
            />
          </linearGradient>

          <linearGradient
            id="lineRight"
            x1="1"
            x2="0"
          >
            <stop
              offset="0%"
              stopColor="#d9a441"
              stopOpacity="0"
            />

            <stop
              offset="70%"
              stopColor="#d9a441"
              stopOpacity="0.55"
            />

            <stop
              offset="100%"
              stopColor="#ffc400"
              stopOpacity="0.8"
            />
          </linearGradient>
        </defs>

        <path
          d="M180 155 C250 165 275 195 335 216"
          fill="none"
          stroke="url(#lineLeft)"
          strokeWidth="1.4"
        />

        <path
          d="M580 160 C510 168 487 195 425 216"
          fill="none"
          stroke="url(#lineRight)"
          strokeWidth="1.4"
        />

        <path
          d="M185 395 C250 370 285 345 340 325"
          fill="none"
          stroke="url(#lineLeft)"
          strokeWidth="1.4"
        />

        <path
          d="M580 390 C515 370 475 345 420 324"
          fill="none"
          stroke="url(#lineRight)"
          strokeWidth="1.4"
        />
      </svg>

      {/* =====================================================
          CLOUD CORE
      ====================================================== */}

      <motion.div
        className="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2"
        animate={{
          y: [-4, 5, -4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* cloud glow */}

        <div className="absolute left-1/2 top-1/2 h-[195px] w-[195px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffc400]/15 blur-[30px]" />

        {/* glass cloud core */}

        <div className="relative flex h-[176px] w-[176px] items-center justify-center rounded-full border border-[#d9a441]/20 bg-white/70 shadow-[0_25px_90px_rgba(217,164,65,0.14)] backdrop-blur-md">
          <div className="absolute inset-[20px] rounded-full bg-gradient-to-br from-white via-[#fffaf0] to-[#fff0b6]/75" />

          <CloudUpload
            size={92}
            strokeWidth={1.25}
            className="relative z-10 text-[#d69c27] drop-shadow-[0_0_14px_rgba(217,164,65,0.32)]"
          />
        </div>
      </motion.div>

      {/* =====================================================
          DATA STREAM
      ====================================================== */}

      <div className="absolute left-1/2 top-[51%] h-[85px] w-px -translate-x-1/2 bg-gradient-to-b from-[#ffc400]/80 via-[#ffc400]/30 to-transparent" />

      <motion.div
        className="absolute left-1/2 top-[53%] h-2 w-2 -translate-x-1/2 rounded-full bg-[#ffc400] shadow-[0_0_16px_rgba(255,196,0,0.8)]"
        animate={{
          y: [0, 55, 0],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 2.3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =====================================================
          INFRASTRUCTURE / SERVERS
      ====================================================== */}

      <div className="absolute bottom-[115px] left-1/2 z-10 flex -translate-x-1/2 items-end gap-[7px]">
        <ServerTower
          height={54}
          delay={0}
        />

        <ServerTower
          height={73}
          delay={0.1}
        />

        <ServerTower
          height={96}
          delay={0.2}
        />

        <ServerTower
          height={79}
          delay={0.3}
        />

        <ServerTower
          height={58}
          delay={0.4}
        />
      </div>

      {/* =====================================================
          PREMIUM PLATFORM
      ====================================================== */}

      <div className="absolute bottom-[48px] left-1/2 h-[105px] w-[340px] -translate-x-1/2">
        {/* lower glow */}

        <div className="absolute bottom-[-12px] left-1/2 h-[60px] w-[285px] -translate-x-1/2 rounded-[50%] bg-[#ffc400]/18 blur-[26px]" />

        {/* bottom platform */}

        <div className="absolute bottom-0 left-1/2 h-[64px] w-[335px] -translate-x-1/2 rounded-[50%] border border-[#d9a441]/30 bg-gradient-to-b from-[#3a3a3a] via-[#171717] to-[#070707] shadow-[0_25px_40px_rgba(0,0,0,0.2)]" />

        {/* lower gold detail */}

        <div className="absolute bottom-[22px] left-1/2 h-[38px] w-[300px] -translate-x-1/2 rounded-[50%] border border-[#ffc400]/40 bg-[#171717]" />

        {/* middle level */}

        <div className="absolute bottom-[37px] left-1/2 h-[48px] w-[255px] -translate-x-1/2 rounded-[50%] border border-[#d9a441]/55 bg-gradient-to-b from-[#363636] to-[#101010]" />

        {/* top level */}

        <div className="absolute bottom-[57px] left-1/2 h-[42px] w-[200px] -translate-x-1/2 rounded-[50%] border border-[#ffc400]/60 bg-gradient-to-b from-[#292929] to-[#0d0d0d]" />

        {/* energy center */}

        <motion.div
          className="absolute bottom-[65px] left-1/2 h-[23px] w-[120px] -translate-x-1/2 rounded-[50%] bg-gradient-to-r from-[#8d650d] via-[#ffc400] to-[#8d650d] shadow-[0_0_24px_rgba(255,196,0,0.6)]"
          animate={{
            opacity: [0.65, 1, 0.65],
          }}
          transition={{
            duration: 2.3,
            repeat: Infinity,
          }}
        />
      </div>

      {/* =====================================================
          FLOATING HUD CARDS
      ====================================================== */}

      <HudCard
        className="left-[0%] top-[13%]"
        icon={
          <ShieldCheck size={17} />
        }
        title="SYSTEM STATUS"
        value="Architecture Connected"
        status
      />

      <HudCard
        className="right-[0%] top-[17%]"
        icon={
          <LockKeyhole size={17} />
        }
        title="SECURITY"
        value="Security Enabled"
      />

      <HudCard
        className="bottom-[8%] left-[1%]"
        icon={
          <Activity size={17} />
        }
        title="PERFORMANCE"
        value="Performance Ready"
      />

      <HudCard
        className="bottom-[11%] right-[0%]"
        icon={
          <Server size={17} />
        }
        title="CLOUD INFRASTRUCTURE"
        value="Scalable & Secure"
      />

      {/* =====================================================
          SMALL DATA UI ELEMENT
      ====================================================== */}

      <motion.div
        className="absolute left-[28%] top-[48%] flex items-center gap-2 rounded-md border border-[#d9a441]/15 bg-white/50 px-2 py-1 backdrop-blur"
        animate={{
          opacity: [0.45, 0.9, 0.45],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      >
        <Database
          size={11}
          className="text-[#d9a441]"
        />

        <span className="text-[7px] font-bold tracking-[0.08em] text-neutral-400">
          DATA SYNC
        </span>
      </motion.div>
    </div>
  );
}

/* ============================================================
   SERVER TOWER
============================================================ */

function ServerTower({
  height,
  delay,
}: {
  height: number;
  delay: number;
}) {
  return (
    <motion.div
      style={{
        height,
      }}
      className="relative w-[20px] overflow-hidden rounded-[3px_3px_1px_1px] border border-[#d9a441]/30 bg-gradient-to-r from-[#090909] via-[#333333] to-[#080808] shadow-[4px_6px_12px_rgba(0,0,0,0.2)]"
      initial={{
        y: 8,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.7,
        delay,
      }}
    >
      <div className="absolute inset-x-[4px] top-[11px] space-y-[8px]">
        {[1, 2, 3, 4, 5].map((item) => (
          <motion.span
            key={item}
            className="block h-[2px] rounded-full bg-[#ffc400]/70 shadow-[0_0_4px_rgba(255,196,0,0.4)]"
            animate={{
              opacity: [0.45, 1, 0.45],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: item * 0.18,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}

/* ============================================================
   HUD CARD
============================================================ */

function HudCard({
  className,
  icon,
  title,
  value,
  status = false,
}: {
  className: string;
  icon: ReactNode;
  title: string;
  value: string;
  status?: boolean;
}) {
  return (
    <motion.div
      className={`absolute z-30 w-[190px] rounded-[12px] border border-[#d9a441]/25 bg-white/80 p-[15px] shadow-[0_18px_50px_rgba(0,0,0,0.065)] backdrop-blur-xl ${className}`}
      initial={{
        opacity: 0,
        y: 10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.7,
      }}
      whileHover={{
        y: -4,
      }}
    >
      {/* card header */}

      <div className="mb-3 flex items-center justify-between">
        <span className="text-[#d9a441]">
          {icon}
        </span>

        <div className="flex items-center gap-2">
          {status && (
            <motion.span
              className="h-[6px] w-[6px] rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.55)]"
              animate={{
                opacity: [0.45, 1, 0.45],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
              }}
            />
          )}

          <span className="text-[8px] font-extrabold tracking-[0.15em] text-neutral-400">
            TF
          </span>
        </div>
      </div>

      {/* title */}

      <div className="text-[8px] font-extrabold tracking-[0.11em] text-neutral-500">
        {title}
      </div>

      {/* value */}

      <div className="mt-1.5 text-[11px] font-bold leading-[1.35] text-[#111]">
        {value}
      </div>
    </motion.div>
  );
}