import { Link } from "react-router-dom";
import { headerLinks } from "../../common/Common";

function Home() {
  return (
    <div className=" flex flex-col items-center justify-center text-center p-4">
      <h2 className="text-3xl font-bold mb-4">Welcome to Block Stars Task</h2>
      <p className="mb-6 text-gray-700 max-w-md">
        This is a simple React app showcasing routing and component structure.
        Use the links below to explore the About section and play the Head &
        Tail game.
      </p>
      {headerLinks.slice(1).map((item) => (
        <Link
          key={item.id}
          to={item.link}
          className="bg-green-600 mt-4 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}

export default Home;
