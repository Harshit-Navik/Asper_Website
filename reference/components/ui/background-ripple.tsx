"use client"
import type React from "react"
import { useMemo, useRef, useState } from "react"
import { cn } from "@/lib/utils"

export const BackgroundRipple = ({
  rows = 8,
  cols = 27,
  cellSize = 56,
}: {
  rows?: number
  cols?: number
  cellSize?: number
}) => {
  const [clickedCell, setClickedCell] = useState<{
    row: number
    col: number
  } | null>(null)
  const [rippleKey, setRippleKey] = useState(0)
  const ref = useRef<any>(null)

  return (
    <div
      ref={ref}
      className={cn(
        "absolute inset-0 h-full w-full",
        "[--cell-border-color:var(--color-neutral-300)] [--cell-fill-color:var(--color-neutral-100)] [--cell-shadow-color:var(--color-neutral-500)]",
        "dark:[--cell-border-color:var(--color-neutral-700)] dark:[--cell-fill-color:var(--color-neutral-900)] dark:[--cell-shadow-color:var(--color-neutral-800)]",
      )}
    >
      <style jsx global>{`
        @keyframes cell-ripple {
          0% {
            background-color: var(--cell-fill-color);
            transform: scale(1);
            opacity: 0.4;
          }
          50% {
            background-color: var(--ripple-color);
            transform: scale(1.5);
            opacity: 0.8;
          }
          100% {
            background-color: var(--cell-fill-color);
            transform: scale(1);
            opacity: 0.4;
          }
        }
        .animate-cell-ripple {
          animation: cell-ripple var(--duration) linear var(--delay) forwards;
        }
      `}</style>
      <div className="relative h-auto w-auto overflow-hidden">
        <div className="pointer-events-none absolute inset-0 z-[2] h-full w-full overflow-hidden" />
        <DivGrid
          key={`base-${rippleKey}`}
          className="mask-radial-from-20% mask-radial-at-top opacity-600"
          rows={rows}
          cols={cols}
          cellSize={cellSize}
          borderColor="var(--cell-border-color)"
          fillColor="var(--cell-fill-color)"
          clickedCell={clickedCell}
          onCellClick={(row, col) => {
            setClickedCell({ row, col })
            setRippleKey((k) => k + 1)
          }}
          interactive
        />
      </div>
    </div>
  )
}

type DivGridProps = {
  className?: string
  rows: number
  cols: number
  cellSize: number // in pixels
  borderColor: string
  fillColor: string
  clickedCell: { row: number; col: number } | null
  onCellClick?: (row: number, col: number) => void
  interactive?: boolean
}

type CellStyle = React.CSSProperties & {
  ["--delay"]?: string
  ["--duration"]?: string
  ["--ripple-color"]?: string
}

// Google Brand Colors (Pastel versions for better background blend)
const GOOGLE_PASTEL_COLORS = [
  "#4285F4", // Blue
  "#EA4335", // Red
  "#FBBC05", // Yellow
  "#34A853", // Green
]

const DivGrid = ({
  className,
  rows = 7,
  cols = 30,
  cellSize = 56,
  borderColor = "#e4e4e7",
  fillColor = "rgba(14,165,233,0.3)",
  clickedCell = null,
  onCellClick = () => { },
  interactive = true,
}: DivGridProps) => {
  // Track which cell is hovered (index)
  const [hoveredCell, setHoveredCell] = useState<number | null>(null)
  // Track color for current hover
  const [hoverColor, setHoverColor] = useState<string>("")

  const cells = useMemo(() => Array.from({ length: rows * cols }, (_, i) => i), [rows, cols])

  const gridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
    gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
    width: cols * cellSize,
    height: rows * cellSize,
    marginInline: "auto",
  }

  // pick a random color from the 4 Google pastel colors
  const getRandomGoogleColor = () =>
    GOOGLE_PASTEL_COLORS[Math.floor(Math.random() * GOOGLE_PASTEL_COLORS.length)]

  return (
    <div className={cn("relative z-[3]", className)} style={gridStyle}>
      {cells.map((idx) => {
        const rowIdx = Math.floor(idx / cols)
        const colIdx = idx % cols

        const distance = clickedCell
          ? Math.hypot(clickedCell.row - rowIdx, clickedCell.col - colIdx)
          : 0
        const delay = clickedCell ? Math.max(0, distance * 55) : 0
        const duration = 200 + distance * 80
        const colorIndex = Math.floor(distance) % GOOGLE_PASTEL_COLORS.length
        const rippleColor = GOOGLE_PASTEL_COLORS[colorIndex]

        const style: CellStyle = clickedCell
          ? {
            "--delay": `${delay}ms`,
            "--duration": `${duration}ms`,
            "--ripple-color": rippleColor,
          }
          : {}

        // When hovered, use hoverColor with more opacity; else, default fillColor
        const isHovered = hoveredCell === idx
        const backgroundColor = isHovered ? `${hoverColor}80` : fillColor

        return (
          <div
            key={idx}
            className={cn(
              "cell relative border-[0.5px] opacity-50 transition-all duration-200 ease-out will-change-transform hover:opacity-90 dark:shadow-[0px_0px_40px_1px_var(--cell-shadow-color)_inset]",
              clickedCell && "animate-cell-ripple",
              !interactive && "pointer-events-none",
            )}
            style={{
              backgroundColor,
              borderColor,
              animationFillMode: "none", // ✅ prevents permanent override
              ...style,
            }}
            onMouseEnter={() => {
              setHoveredCell(idx)
              setHoverColor(getRandomGoogleColor())
            }}
            onMouseLeave={() => {
              setHoveredCell(null)
            }}
            onAnimationEnd={(e) => {
              // ✅ Remove ripple class after animation finishes to restore normal styles
              e.currentTarget.classList.remove("animate-cell-ripple")
            }}
            onClick={interactive ? () => onCellClick?.(rowIdx, colIdx) : undefined}
          />
        )
      })}
    </div>
  )
}
