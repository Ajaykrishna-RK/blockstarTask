import HeaderLinks from "../../components/HeaderLinks/HeaderLinks";

function About() {
  return (
    <div className=" flex items-center  flex-col justify-center p-4">
      <p className="text-3xl font-bold ">About Page</p>
      <p className="text-lg mb-2 mt-2 text-gray-800 max-w-2xl text-center">
        This React application is part of a task that demonstrates basic
        concepts like routing, navigation, and conditional rendering. It
        includes a simple interactive game and pages styled with Tailwind CSS.
      </p>

      <HeaderLinks excludeIndex={1} />
    </div>
  );
}

export default About;
