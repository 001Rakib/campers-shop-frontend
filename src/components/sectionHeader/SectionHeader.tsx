const SectionHeader = ({
  header1,
  header2,
}: {
  header1: string;
  header2: string;
}) => {
  return (
    <div className="my-10 ">
      <h1 className="text-center text-3xl font-semibold font-inter">
        <span className="bg-blue-300 px-4 py-2 rounded-lg text-black">
          {header1} <span className="text-blue-600"> {header2} </span>
        </span>
      </h1>
    </div>
  );
};

export default SectionHeader;
