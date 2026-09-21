function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-5">
      <h2 className="text-xl font-bold">
        Sami.
      </h2>

      <div className="flex gap-6 text-sm">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;