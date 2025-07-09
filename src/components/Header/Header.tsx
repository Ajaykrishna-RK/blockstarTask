import { Link } from "react-router-dom";

function Header() {
  const headerLinks = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 1,
      name: "About",
      link: "/about",
    },
    {
      id: 3,
      name: "Head & Tail",
      link: "/headtail",
    },
  ];

  return (
    <div className="bg-blue-900 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <h1 className="text-xl font-bold">React Vite App</h1>
        <div className="space-x-4 text-lg font-[600]">
          {headerLinks?.map((item) => (
            <Link to={item?.link} className="hover:text-gray-200 transition">
              {item?.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
