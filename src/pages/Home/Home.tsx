import { Link } from "react-router-dom";
import { headerLinks } from "../../common/Common";
import HeaderLinks from "../../components/HeaderLinks/HeaderLinks";

function Home() {
  return (
    <div className=" flex flex-col items-center justify-center text-center p-4">
      <p className="text-3xl font-bold mb-4">Welcome to Block Stars Task</p>
      <p className=" text-gray-700 max-w-2xl mb-2">
        This is a simple React app showcasing routing and component structure.
        Use the links below to explore the About section and play the Head &
        Tail game.
      </p>
      <HeaderLinks excludeIndex={0} />
    </div>
  );
}

export default Home;
