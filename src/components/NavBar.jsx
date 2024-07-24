"use client";
import { useContext } from "react";
import Link from "next/link";
import { AuthContext } from "@/context/authContext";
import LogoutIcon from "@mui/icons-material/Logout";
const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link href="/">MySite</Link>
        </div>
        <div className="flex gap-4 items-center">
          <Link href="/userposts" className="block py-2 px-4 hover:bg-gray-700">
            My Posts
          </Link>
          <Link href="/write" className="block py-2 px-4 hover:bg-gray-700">
            Write
          </Link>
          {currentUser ? (
            <>
              <div className="flex justify-center items-center flex-col">
                <img
                  className=" h-[35px] w-[35px] rounded-full"
                  src={currentUser.img || "/account.png"}
                  alt="Account-logo"
                />
                <span className="text-sm">
                  {currentUser.username || currentUser.email}
                </span>
              </div>
              <button
                onClick={() => logout()}
                title="Log Out"
                className="hover:bg-slate-600 p-3 rounded-md text-red-500">
                <LogoutIcon />
              </button>
            </>
          ) : (
            <Link href="/login" className="block py-2 px-4 hover:bg-gray-700">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
