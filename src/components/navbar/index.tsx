import Img from "next/image";
import Dropdown from "./dropdown";

export default function Index() {
  return (
    <div className="bg-fondo w-full px-8 text-white py-4">
      <div className="flex justify-between container">
        <div className="w-20 h-9 relative ">
          <Img src="/logohero.png" alt="" layout="fill" objectFit="cover" />
        </div>
        <Dropdown />
      </div>
    </div>
  );
}
