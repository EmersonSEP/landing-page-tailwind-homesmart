import imgLogo from "../../assets/logo.svg"

export function Header () {
  return (
    <nav className="mx-auto p-4 bg-amber-400">
    <div className="container mx-auto flex items-center justify-between
    ">
      <a href="/" className="focus:online-none focus-visible:ring-4 ring-neutral-900 rounded-sm ring-offset-4 ring-offset-amber-400 lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-9 z-50" aria-label="Go To homepage">
        <img src={imgLogo} className="w[200px] md: w-64 lg:w-72" alt="Home Smart Logo"/>
      </a>
    <button id="menu" className="lg:hidden">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
</svg>
    </button>
    </div>
      </nav>
  )
}