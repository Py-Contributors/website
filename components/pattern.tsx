import { useId } from 'react'

export function Pattern(props: React.SVGProps<SVGPatternElement>) {
  let patternId = useId()

  return (
    <svg aria-hidden="true" className="absolute inset-0 h-full w-full opacity-60">
      <defs>
        <pattern
          id={patternId}
          width="50"
          height="50"
          patternUnits="userSpaceOnUse"
          {...props}>
          <path d="M0 128V.5H128" fill="none" stroke="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  )
}