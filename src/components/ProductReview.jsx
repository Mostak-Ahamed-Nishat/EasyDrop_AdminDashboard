import { Star, ThumbsUp, OctagonAlert } from "lucide-react";

function ProductReview({ name, image = "", location, date, reviewText }) {
  return (
    <>
      <div className="p-4 bg-[#d9d9d981] border rounded-lg flex-1">
        <div className="flex items-center gap-4 ml-6">
          <img
            className="w-12 h-12 rounded-full object-cover object-center"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Reviewer"
          />
          <h4 className="font-bold text-[16px] ml-3">{name}</h4>
        </div>

        <div className="my-3">
          <p className="text-yellow-500 flex gap-1 items-center">
            <Star size={14} fill="#FFC700" color="#FFC700" />
            <Star size={14} fill="#FFC700" color="#FFC700" />
            <Star size={14} fill="#FFC700" color="#FFC700" />
            <Star size={14} fill="#FFC700" color="#FFC700" />
            <Star size={14} fill="#FFC700" color="#FFC700" />

            <span className="text-sm ml-2 font-semibold text-[16px] text-black">
              Excellent Quality
            </span>
          </p>
        </div>

        <p className=" text-gray-500 text-[16px] ">
          Reviewed in {location} on {date}
        </p>

        <p className="mt-4 text-sm text-gray-600 text-[16px]">{reviewText}</p>
        <div className="flex items-center justify-center mt-4 text-sm">
          <div className="flex gap-4">
            <button className="text-blue-600">
              <span className="flex gap-1 items-center">
                <ThumbsUp size={16} />
                Helpful
              </span>
            </button>
            <button className="text-red-600">
              <span className="flex gap-1 items-center">
                <OctagonAlert size={16} />
                Report
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductReview;
