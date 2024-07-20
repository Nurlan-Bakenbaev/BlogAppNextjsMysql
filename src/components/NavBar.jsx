import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="bg-slate-800 p-4">
      <ul className="flex justify-between gap-2">
        <li>
          <Link href="/login">
            <span className="text-white hover:text-gray-400">Login</span>
          </Link>
        </li>
        <li>
          <Link href="/post">
            <span className="text-white hover:text-gray-400">Post</span>
          </Link>
        </li>
        <li>
          <Link href="/addpost">
            <span className="text-white hover:text-gray-400">Add Post</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
