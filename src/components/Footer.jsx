import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 MySite. All rights reserved.</p>
      </div>
      <p>Attributions</p>
      <Link
        className="text-blue-500"
        href="https://www.flaticon.com/free-icons/profile"
        title="profile icons">
        Profile icons created by icon_small - Flaticon
      </Link>
      <Link
        className="text-blue-500"
        href="https://unsplash.com/"
        title="icons">
        unsplash
      </Link>
    </footer>
  );
};

export default Footer;
