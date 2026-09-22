function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-5">
      <a href="#" className="text-xl font-bold">
        Sami.
      </a>

      <div className="flex gap-6 text-sm">
        <a href="#about" className="transition hover:text-gray-500">
          About
        </a>

        <a href="#projects" className="transition hover:text-gray-500">
          Projects
        </a>

        <a href="#contact" className="transition hover:text-gray-500">
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;