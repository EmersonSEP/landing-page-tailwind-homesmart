import { useState } from "react"
import imgLogo from "../../assets/logo.svg"

export function Header () {
  const [navOpen, setNavOpen] = useState(false);
  const ToggleMode = () => {
    setNavOpen(!navOpen)
  }
  
  return (
    <nav className="mx-auto p-4 bg-amber-400 border-r-32">
    <div className="container mx-auto flex items-center justify-between
    ">
      <a href="/" className="focus:online-none focus-visible:ring-4 ring-neutral-900 rounded-sm ring-offset-4 ring-offset-amber-400 lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-9 z-50 hover:opacity-75 transition-opacity " aria-label="Go To homepage">
        <img src={imgLogo} className="w[200px] md: w-64 lg:w-72" alt="Home Smart Logo"/>
      </a>
    <button id="menu" className="lg:hidden focus:online-none focus-visible:ring-4 ring-neutral-900 rounded-sm ring-offset-4 ring-offset-amber-400 text-neutral-900 hover:text-neutral-500 transition-colors ">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
</svg>
    </button>
    <div role="menubar" className="hidden flex-col gap-4 absolute right-0 left-0 top-16 bg-amber-400 shadow-xl text-center p-6 items-center lg:flex lg:flex-row lg:static lg:shadow-none lg:justify-between lg:w-full >">
      <a role="menuitem" className="py-1 px-6 dark:text-neutral-900 focus:online-none focus-visible:ring-4 ring-neutral-900 rounded-sm ring-offset-4 ring-offset-amber-400 text-neutral-900 hover:text-neutral-500 transition-colors" href="/">Home</a>
      <a role="menuitem" className="py-1 px-6 dark:text-neutral-900 focus:online-none focus-visible:ring-4 ring-neutral-900 rounded-sm ring-offset-4 ring-offset-amber-400 text-neutral-900 hover:text-neutral-500 transition-colors lg:mr-auto" href="/">Contact</a>
      <a role="menuitem" className="py-1 px-6 dark:text-neutral-900 focus:online-none focus-visible:ring-4 ring-neutral-900 rounded-sm ring-offset-4 ring-offset-amber-400 text-neutral-900 hover:text-neutral-500 transition-colors" href="/">Login</a>
      <a role="menuitem" className="py-2 px-6 bg-teal-900 text-white focus:online-none focus-visible:ring-4 ring-neutral-900 rounded-sm ring-offset-4 ring-offset-amber-400 hover:text-neutral-500 transition-colors" href="/">Sign Up</a>
    </div>
    </div>
      </nav>
  )
}