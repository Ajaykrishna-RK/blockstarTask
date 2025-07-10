import HeaderLinks from "../../components/HeaderLinks/HeaderLinks";

function About() {
  return (
    <div className=" flex items-center  flex-col justify-center p-4">
      <p className="text-3xl font-bold ">About Page</p>
      <p className="text-lg mb-2 mt-2 text-gray-800 max-w-2xl text-center">
        This is a simple React app showcasing routing and component structure.
        Use the links below to explore the Home section and play the Head & Tail
        game.
      </p>

      <HeaderLinks excludeIndex={1} />
    </div>
  );
}

export default About;
