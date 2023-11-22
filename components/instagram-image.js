import Image from "next/legacy/image";
import { FaInstagram } from "react-icons/fa";

const InstagramImage = ({ socialImage }) => {
  return (
    <div className="relative">
      <Image
        src={socialImage}
        alt="/"
        className="h-full w-full rounded-md"
        layout="responsive"
      />
      {/* overlay start */}
      <div className="group absolute bottom-0 left-0 right-0 top-0 flex h-full w-full items-center justify-center hover:bg-black/50">
        <p className="hidden text-gray-300 group-hover:block">
          <FaInstagram size={30} className="z-10" />
        </p>
      </div>
      {/* overlay end */}
    </div>
  );
};
export default InstagramImage;
