import { toast } from "react-hot-toast";

const SinglePC = ({ allPC }) => {
  const handlePCbuild = () => {
    toast.success("PC Build Complete");
  };

  return (
    <div>
      <h1 className="text-4xl text-center">What you choice the products</h1>
      <div className="flex justify-center">
        <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 m-6 gap-3">
          {allPC?.data?.map((pc) => (
            <div key={pc?.id} className="card  bg-base-100 shadow-xl">
              <figure className="w-full h-60 rounded-xl">
                <img className="w-[100%] h-72" src={pc?.image} alt="Shoes" />
              </figure>

              <div className="card-body">
                <h2 className="card-title">{pc?.category}</h2>
                <p className="font-semibold">Model: {pc?.product_name}</p>
                <p className="font-semibold">Rating:{pc?.average_rating}</p>
                <p className="font-semibold">Status:{pc?.status}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={handlePCbuild}
          disabled={allPC?.data?.length != 6}
          className="btn btn-outline text-black"
        >
          Pc build complete
        </button>
      </div>
    </div>
  );
};

export default SinglePC;
