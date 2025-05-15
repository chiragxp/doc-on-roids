import Image from "next/image";

const Loader = () => {
  return (
    <div className="loader">
      <Image
        src="/assets/icons/loader.svg"
        className="animate-spin"
        width={32}
        height={32}
        alt="loader"
      />
      Loading...
    </div>
  );
};

export default Loader;
