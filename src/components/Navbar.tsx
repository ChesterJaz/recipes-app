

const Navbar = () => {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto py-6 px-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="ml-6 text-[30px] font-extrabold">Recipes</h1>
          <nav className="ml-6 space-x-4 flex float-end justify-center items-center">
            <a href="#" className="hover:underline font-medium">Home</a>
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Services</a>
            <a href="#" className="hover:underline">Contact</a>
          </nav>
        </div>
        <div>
          {/* Add any additional content or components for the right side of the header */}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
