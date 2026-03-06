import React from 'react'

interface CliWindowProps {
  title?: string
  children: React.ReactNode
}

export function CliWindow({
  title = 'C:\\\\0xmuon - Command Prompt',
  children,
}: CliWindowProps) {
  return (
    <div className="border border-border bg-black">
      <div className="flex items-center justify-between px-2 py-1 bg-[#000080] text-xs text-white">
        <span className="flex items-center gap-1">
          <span className="h-3 w-3 bg-black border border-white" />
          <span className="font-semibold">{title}</span>
        </span>
        <span className="flex items-center gap-1 text-[10px]">
          <span className="border border-white px-1">_</span>
          <span className="border border-white px-1">□</span>
          <span className="border border-white px-1">X</span>
        </span>
      </div>

      <div className="px-3 py-4 sm:px-4 sm:py-5 font-mono text-xs sm:text-sm text-emerald-300">
        {children}
      </div>
    </div>
  )
}

