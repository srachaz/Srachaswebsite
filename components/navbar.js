import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="right-0 left-0 fixed z-10 py-10">
        <div className="container mx-auto mt-0 pt-0 flex items-center justify-center">
            <div className="pr-4"> <Link href="/" className="text-blue text-lg">Home</Link></div>
            {/* <div className="pr-4"> <Link href="/" className="text-blue text-lg">Projects</Link></div> */}
            <div className="pr-4"> <Link href="/" className="text-blue text-lg">Thoughts</Link></div>
            <div className="pr-4"> <Link href="/" className="text-blue text-lg">Library</Link></div>
        </div>
        
      </nav>  
  );
};

export default Navbar;
