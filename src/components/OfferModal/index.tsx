import "./style.scss";
type Props = {
  offerValues: {
    price: number;
    text: string;
  };
  setOfferValues: React.Dispatch<
    React.SetStateAction<{
      price: number;
      text: string;
    }>
  >;
  setIsOfferOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function OfferModal({ offerValues, setOfferValues, setIsOfferOpen }: Props) {
  return (
    <div className="OfferModal w-full flex items-center justify-center flex-col  py-4 rounded-lg  bg-white">
      <label htmlFor="" className="w-full text-left font-semibold mb-2">
        Your offer
      </label>
      <input
        type="number"
        placeholder="Suggested price"
        required
        value={offerValues.price}
        onChange={(e) =>
          setOfferValues((prev) => ({ ...prev, price: +e.target.value }))
        }
        className="p-2 rounded w-full mb-2"
      />

      <textarea
        placeholder="Description"
        value={offerValues.text}
        onChange={(e) =>
          setOfferValues((prev) => ({ ...prev, text: e.target.value }))
        }
        className=" p-2 rounded w-full mb-2"
      />

      <button
        onClick={() => {
          setIsOfferOpen(false);
        }}
        className=" text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </div>
  );
}

export default OfferModal;
