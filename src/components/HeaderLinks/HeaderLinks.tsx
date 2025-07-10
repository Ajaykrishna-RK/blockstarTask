import { Link } from "react-router-dom";
import { headerLinks } from "../../common/Common";

type HeaderLinksProps = {
  excludeIndex?: number;
};

function HeaderLinks({ excludeIndex }: HeaderLinksProps) {
  const filteredLinks =
    typeof excludeIndex === "number"
      ? [
          ...headerLinks?.slice(0, excludeIndex),
          ...headerLinks?.slice(excludeIndex + 1),
        ]
      : headerLinks;

  return (
    <>
      {filteredLinks?.map((item) => (
        <Link
          key={item?.id}
          to={item?.link}
          className="bg-blue-900 text-[18px] mt-2 flex gap-[5px] items-center text-[#ffffff] font-[600] px-4 py-2 hover:underline rounded hover:bg-blue-800 transition"
        >
          {item.name}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M13 4.58569L20.4142 11.9999L13 19.4141L11.5858 17.9999L16.5858 12.9999H4V10.9999H16.5858L11.5858 5.99991L13 4.58569Z"
              fill="#FFFFFF"
            />
          </svg>
        </Link>
      ))}
    </>
  );
}

export default HeaderLinks;
