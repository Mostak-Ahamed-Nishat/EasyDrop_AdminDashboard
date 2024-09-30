import ButtonFill from "@/components/ButtonFill";
import TokenMessage from "@/components/token/TokenMessage";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Plus } from "lucide-react";
import { useParams } from "react-router-dom";

function TokenDetailsPage() {
  let { token_number } = useParams();

  // File handler
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
  };

  return (
    <div>
      {/* Parent Div */}

      <div className="mt-8">
        <h1 className="font-bold text-xl mb-8">Token Details</h1>
        {/* Container */}
        <div className="w-4/5 mx-auto grid grid-cols-8 gap-4">
          {/* left side */}
          <div className="col-span-6 flex flex-col justify-between h-[85vh]">
            <div
              className="flex flex-col gap-3 overflow-y-scroll"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              <TokenMessage
                user="Admin: MD. Mostak Ahamed"
                message="Hello, I hope this message finds you well. I am writing to express my dissatisfaction with an issue..."
                admin
              />
              <TokenMessage
                user="Admin: MD. Mostak Ahamed"
                message="Hello, I hope this message finds you well. I am writing to express my dissatisfaction with an issue..."
              />
              <TokenMessage
                user="Admin: MD. Mostak Ahamed"
                message="Hello, I hope this message finds you well. I am writing to express my dissatisfaction with an issue..."
                admin
              />
              <TokenMessage
                user="Admin: MD. Mostak Ahamed"
                message="Hello, I hope this message finds you well. I am writing to express my dissatisfaction with an issue..."
              />
              <TokenMessage
                user="Admin: MD. Mostak Ahamed"
                message="Hello, I hope this message finds you well. I am writing to express my dissatisfaction with an issue..."
                admin
              />
              <TokenMessage
                user="Admin: MD. Mostak Ahamed"
                message="Hello, I hope this message finds you well. I am writing to express my dissatisfaction with an issue..."
              />
              <TokenMessage
                user="Admin: MD. Mostak Ahamed"
                message="Hello, I hope this message finds you well. I am writing to express my dissatisfaction with an issue..."
                admin
              />
              <TokenMessage
                user="Admin: MD. Mostak Ahamed"
                message="Hello, I hope this message finds you well. I am writing to express my dissatisfaction with an issue..."
              />
              <TokenMessage
                user="Admin: MD. Mostak Ahamed"
                message="Hello, I hope this message finds you well. I am writing to express my dissatisfaction with an issue..."
                admin
              />
              <TokenMessage
                user="Admin: MD. Mostak Ahamed"
                message="Hello, I hope this message finds you well. I am writing to express my dissatisfaction with an issue..."
              />
            </div>

            <div className="border-t-2 shadow-sm rounded-md p-4 bg-white">
              <div>
                <p className="font-bold text-lg pb-4">Write a Reply</p>
                <Textarea placeholder="Write your issue" />
                <div className="py-4">
                  <div className="relative inline-block">
                    {/* Hidden file input */}
                    <input
                      type="file"
                      className="absolute inset-0 opacity-0 cursor-pointer"
                      onChange={handleFileChange}
                    />
                    {/* Custom button */}
                    <Button className="bg-[#DDDDDD] hover:bg-[#DDDDDD] text-black flex items-center cursor-pointer">
                      <Plus className="mr-2" />
                      Attachment
                    </Button>
                  </div>
                </div>
                <ButtonFill label="Submit" />
              </div>
            </div>
          </div>
          {/* Right Side  */}
          <div className="col-span-2 flex flex-col gap-4">
            {/* Ticket Info */}
            <div className="p-6 border-2 rounded-md">
              <h2 className="text-lg font-bold my-2">Ticket Info</h2>
              <p className="text-md font-semibold my-2">Subject</p>
              <p className="my-1">#016451 Order Problem</p>
              <p className="my-2">
                <span className="font-semibold">Status:</span>
                <span className="border-2 p-1 text-center rounded-sm ml-2 font-semibold">
                  Closed
                </span>
              </p>
              <p>
                <span className="font-semibold my-2">Priority:</span> High
              </p>
            </div>

            {/* Opened Details */}
            <div className="p-6 border-2 rounded-md">
              <h2 className="text-lg font-bold my-2">Opened</h2>
              <p className="my-1">30/08/24 06:20:00</p>
              <br />
              <p className="font-semibold text-lg my-1">Last Response</p>
              <p className="my-1">30/08/24 06:20:00</p>

              <div className="text-center py-4">
                <ButtonFill label="Go To Reply" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TokenDetailsPage;
