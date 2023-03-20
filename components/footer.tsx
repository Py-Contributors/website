import Link from 'next/link'

import { Container } from '@/components/container'

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="transition hover:text-[#00843D] dark:hover:text-yellow-400"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-16">
      <Container>
        <div className="pt-10 pb-10">
          <Container>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex gap-5 text-md font-semibold font-mono text-zinc-800 dark:text-zinc-200">
                <NavLink href="/about">About</NavLink>
                <NavLink href="/projects">Projects</NavLink>
                <NavLink href="/community">Community</NavLink>
              </div>
              <p className="text-sm text-zinc-400 dark:text-zinc-500 font-mono">
                &copy; 2023 Pycontributors. All rights reserved.
              </p>
            </div>
          </Container>
        </div>
      </Container>
    </footer>
  )
}