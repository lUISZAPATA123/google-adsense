import Img from "next/image";
export default function Index() {
  return (
    <div className="container mx-auto">
      <div className="grid-cols-3 p-20 space-y-2 bg-yellow-200 lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3">
        <div className=" w-full rounded relative">
          <Img
            src="https://res.cloudinary.com/ingenio/image/upload/v1637220699/c6zhgnn9zp2axovjtmbi.jpg"
            alt="image"
            objectFit="cover"
            layout="fill"
          />
        </div>
        <div className=" w-full col-span-2 row-span-2 rounded">
          <Img
            src="https://res.cloudinary.com/ingenio/image/upload/v1637220699/c6zhgnn9zp2axovjtmbi.jpg"
            alt="image"
            objectFit="contain"
            layout="fill"
          />
        </div>
        <div className=" w-full col-span-2 row-span-2 rounded relative">
          <Img
            src="https://res.cloudinary.com/ingenio/image/upload/v1637220699/c6zhgnn9zp2axovjtmbi.jpg"
            alt="image"
            objectFit="cover"
            layout="fill"
          />
        </div>
      </div>
    </div>
  );
}
