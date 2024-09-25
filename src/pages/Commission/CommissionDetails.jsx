// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { CommissionDataApi as data } from "@/api/CommissionDataApi";

// function CommissionDetails() {
//   const { id } = useParams();
//   const [commission, setCommission] = useState(null);

//   useEffect(() => {
   
//     const selectedCommission = data.find((commission) => commission.id === parseInt(id));
//     setCommission(selectedCommission);
//   }, [id]);

//   if (!commission) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="px-5">
//       <h1 className="text-2xl font-bold mb-4">Commission Details</h1>
//       <div className="grid gap-4">
//         <div>
//           <p className="font-semibold">Commission Name:</p>
//           <p>{commission.commission_name}</p>
//         </div>
//         <div>
//           <p className="font-semibold">Commission Amount:</p>
//           <p>{commission.commission_amount}</p>
//         </div>
//         <div>
//           <p className="font-semibold">Description:</p>
//           <p>{commission.description}</p>
//         </div>
//         <div>
//           <p className="font-semibold">Starting Date:</p>
//           <p>{commission.start_date}</p>
//         </div>
//         <div>
//           <p className="font-semibold">Ending Date:</p>
//           <p>{commission.end_date}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CommissionDetails;


import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CommissionDataApi as data } from "@/api/CommissionDataApi";
import { Pencil, Save } from 'lucide-react'; 
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

function CommissionDetails() {
  const { id } = useParams();
  const [commission, setCommission] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({
    commission_name: "",
    commission_amount: "",
    description: "",
    start_date: "",
    end_date: ""
  });

  useEffect(() => {
  
    const selectedCommission = data.find((commission) => commission.id === parseInt(id));
    setCommission(selectedCommission);
    setEditedData(selectedCommission); // Seting initial form values
  }, [id]);

  const handleEditToggle = () => {
    setIsEditing(!isEditing); 
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSave = () => {
    // Here you can add the logic to save the updated data, e.g., send it to an API or update your data store
    setCommission(editedData);
    setIsEditing(false); // Exit edit mode after saving
  };

  if (!commission) {
    return <div>Loading...</div>;
  }

  return (
    <div className="px-5">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Commission Details</h1>
        <button onClick={isEditing ? handleSave : handleEditToggle}>
          {isEditing ? <Save size={24} className="text-green-500" /> : <Pencil size={24} className="text-blue-500" />}
        </button>
      </div>

      {isEditing ? (
        // If in edit mode, display form inputs for editing the data
        <div className="grid gap-4 w-3/6">
          <div>
            <Label className="font-semibold">Commission Name:</Label>
            <Input
              type="text"
              name="commission_name"
              value={editedData.commission_name}
              onChange={handleInputChange}
              className="border  mt-2 w-full rounded"
            />
          </div>
          <div>
            <Label className="font-semibold">Commission Amount:</Label>
            <Input
              type="number"
              name="commission_amount"
              value={editedData.commission_amount}
              onChange={handleInputChange}
              className="border  mt-2 w-full rounded"
            />
          </div>
          <div>
            <Label className="font-semibold">Description:</Label>
            <Textarea
              name="description"
              value={editedData.description}
              onChange={handleInputChange}
              className="border  mt-2 w-full rounded"
            />
          </div>
          <div>
            <Label className="font-semibold">Starting Date:</Label>
            <Input
              type="date"
              name="start_date"
              value={editedData.start_date}
              onChange={handleInputChange}
              className="border  mt-2 w-full rounded"
            />
          </div>
          <div>
            <Label className="font-semibold">Ending Date:</Label>
            <Input
              type="date"
              name="end_date"
              value={editedData.end_date}
              onChange={handleInputChange}
              className="border  mt-2 w-full rounded"
            />
          </div>
        </div>
      ) : (
        // If not in edit mode, display the data
        <div className="grid gap-4 w-3/6">
          <div>
            <Label className="font-semibold ">Commission Name:</Label>
             <Input
                className="mt-2"             
                value={commission.commission_name}/>
                      </div>
                      
          <div>
            <Label className="font-semibold ">Commission Amount:</Label>
             <Input
                className="mt-2"             
                value={commission.commission_amount}/>
                      </div>
                      
          <div>
           <Label className="font-semibold ">Description:</Label>
             <Textarea
                className="mt-2"             
                value={commission.description}/>
                      </div>
                      
          <div>
          <Label className="font-semibold ">Starting Date:</Label>
             <Input
                className="mt-2"             
                value={commission.start_date}/>
                      </div>
                      
          <div>
          <Label className="font-semibold ">Ending Date:</Label>
             <Input
                className="mt-2"             
                value='Ending Date'/>
          </div>
        </div>
      )}
    </div>
  );
}

export default CommissionDetails;
