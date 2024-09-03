import ProductReview from "@/components/ProductReview";
import pro1 from "../../assets/images/products/pro-1.jpg";
import pro2 from "../../assets/images/products/pro-2.jpg";
import pro3 from "../../assets/images/products/pro-3.jpg";
import pro4 from "../../assets/images/products/pro-4.jpg";

import { Star } from "lucide-react"; // You can use react-icons or lucide-react for icons
import ButtonFill from "@/components/ButtonFill";

const ProductDetailsPage = () => {
  return (
    // <div className="container mx-auto p-4">
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Product Images */}
        <div className="col-span-1">
          <div className="p-4 border rounded-lg bg-[#d9d9d981] flex-1">
            <img className="w-full rounded-lg" src={pro1} alt="Main product" />
            <div className="flex mt-4 space-x-4">
              <img
                className="w-[120px] h-[120px] rounded-lg"
                src={pro2}
                alt="Product thumbnail 1"
              />
              <img
                className="w-[120px] h-[120px] rounded-lg"
                src={pro3}
                alt="Product thumbnail 2"
              />
              <img
                className="w-[120px] h-[120px] rounded-lg"
                src={pro4}
                alt="Product thumbnail 3"
              />
              <img
                className="w-[120px] h-[120px] rounded-lg"
                src={pro2}
                alt="Product thumbnail 1"
              />
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="col-span-1 md:col-span-2 flex">
          <div className="p-4 border rounded-lg bg-[#d9d9d981] flex-1">
            <p className="text-md my-1 font-medium">Product ID:12314</p>
            <h2 className="text-2xl font-bold">Men Slim Fit T-Shirt</h2>
            <div className="flex items-center mt-2">
              <Star size={18} fill="#FFC700" className="text-yellow-500" />
              <p className="ml-2 text-lg">4.5</p>
              <p className="ml-2 text-sm text-gray-500">(44 reviews)</p>
            </div>

            <div className="mt-4">
              <p className="text-md text-gray-600 my-1">
                <strong> Resell Price:</strong> Tk. 600
              </p>
              <p className="text-md text-gray-600 my-1">
                <strong> Retail Price:</strong>Tk. 600
              </p>
              <p className="text-md text-gray-600 my-1">
                <strong>Suggested Price:</strong> Tk. 600
              </p>
              <div className="mt-4">
                <p className="text-md text-gray-600">
                  <strong>Colors:</strong>
                </p>
                <div className="flex gap-2 mt-2">
                  <span className="px-2 py-1 bg-[#bbbaba] text-gray-700 rounded-md">
                    White: 20
                  </span>
                  <span className="px-2 py-1 bg-[#bbbaba] text-gray-700 rounded-md">
                    Black: 20
                  </span>
                  <span className="px-2 py-1 bg-[#bbbaba] text-gray-700 rounded-md">
                    Red: 20
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-md text-gray-600">
                  <strong>Sizes:</strong>
                </p>
                <div className="flex gap-2 mt-2">
                  <span className="px-2 py-1 bg-[#bbbaba] text-gray-700 rounded-md">
                    S
                  </span>
                  <span className="px-2 py-1 bg-[#bbbaba] text-gray-700 rounded-md">
                    M
                  </span>
                  <span className="px-2 py-1 bg-[#bbbaba] text-gray-700 rounded-md">
                    L
                  </span>
                  <span className="px-2 py-1 bg-[#bbbaba] text-gray-700 rounded-md">
                    XL
                  </span>
                </div>
              </div>
              <p className="mt-4 text-md text-gray-600">
                <strong className="mr-2"> Stock:</strong>12 pieces available
              </p>
              <p className="text-md text-gray-600 mt-4 my-2">
                <strong className="mr-2"> Added By:</strong>Sristy
              </p>
              <p className="text-md text-gray-600">
                <strong className="mr-2">Added On: </strong>25-8-2024
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="mt-8 ">
        <h3 className="text-xl font-semibold">Description</h3>
        <p className="mt-2 text-md text-gray-600 bg-[#d9d9d981] p-8 border rounded-lg">
          A comfortable and versatile t-shirt made from soft, breathable cotton,
          featuring a classic crew neck and short sleeves. It offers a regular
          fit, making it perfect for everyday wear. Available in various colors.
        </p>
      </div>

      {/* Reviews Section */}
      {/* <div className="mt-8 bg-white p-4 border rounded-lg"> */}
      <div className="mt-8">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold">Review</h3>
          <ButtonFill label="Load More" />
        </div>

        {/* Review Card */}
        <div className="mt-4 flex gap-4">
          <ProductReview
            name="Henny K. Mark"
            location="Bangladesh"
            date="16 November 2023"
            reviewText="Medium thickness. Did not shrink after wash. Good elasticity. XL
              size fits perfectly for 5.10 height and heavy body. Did not fade
              after wash. Only for the maroon color, the shirt color lightly
              faded on the first wash but not too bad. Highly recommended at
              this low price."
          />
          <ProductReview
            name="Henny K. Mark"
            location="Bangladesh"
            data="16 November 2023"
            reviewText="Medium thickness. Did not shrink after wash. Good elasticity. XL
              size fits perfectly for 5.10 height and heavy body. Did not fade
              after wash. Only for the maroon color, the shirt color lightly
              faded on the first wash but not too bad. Highly recommended at
              this low price."
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
