
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CommissionDataApi as data } from "@/api/CommissionDataApi";
import { Pencil, Save } from 'lucide-react'; 
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Header from "../Header/Header";

// function CommissionDetails() {
//   const { id } = useParams();
//   const [commission, setCommission] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedData, setEditedData] = useState({
//     commission_name: "",
//     commission_amount: "",
//     description: "",
//     start_date: "",
//     end_date: ""
//   });

//   useEffect(() => {
  
//     const selectedCommission = data.find((commission) => commission.id === parseInt(id));
//     setCommission(selectedCommission);
//     setEditedData(selectedCommission);
//   }, [id]);

//   const handleEditToggle = () => {
//     setIsEditing(!isEditing);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setEditedData((prevData) => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   const handleSave = () => {
    
//     setCommission(editedData);
//     setIsEditing(false);
//   };

//   if (!commission) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="px-5">
//       <Header/>
//       <div className="flex justify-end items-center mb-4 py-5 px-5">
//           <button
//             className="bg-[#EEF2F7] p-2 rounded-sm "
//             onClick={isEditing ? handleSave : handleEditToggle}>
//           {isEditing ? (
//             <Save size={20} className="text-black " />) : (
//             <Pencil size={20} className="text-black" />
//                 )}
//                 </button>
//             </div>


//       {isEditing ? (
//         <div className="grid gap-4 md:w-2/6 w-full">
//           <div>
//             <Label className="font-semibold">Commission Name:</Label>
//             <Input
              
//               type="text"
//               name="commission_name"
//               value={editedData.commission_name}
//               onChange={handleInputChange}
//               className="border  mt-2 w-full rounded"
//             />
//           </div>
//           <div>
//             <Label className="font-semibold">Commission Amount:</Label>
//             <Input
//               type="number"
//               name="commission_amount"
//               value={editedData.commission_amount}
//               onChange={handleInputChange}
//               className="border  mt-2 w-full rounded"
//             />
//           </div>
//           <div>
//             <Label className="font-semibold">Description:</Label>
//             <Textarea
//               name="description"
//               value={editedData.description}
//               onChange={handleInputChange}
//               className="border  mt-2 w-full rounded"
//             />
//           </div>
//           <div>
//             <Label className="font-semibold">Starting Date:</Label>
//             <Input
//               type="date"
//               name="start_date"
//               value={editedData.start_date}
//               onChange={handleInputChange}
//               className="border  mt-2 w-full rounded"
//             />
//           </div>
//           <div>
//             <Label className="font-semibold">Ending Date:</Label>
//             <Input
//               type="date"
//               name="end_date"
//               value={editedData.end_date}
//               onChange={handleInputChange}
//               className="border  mt-2 w-full rounded"
//             />
//           </div>
//         </div>
//       ) : (
//         <div className="grid gap-4 w-3/6">
//           <div>
//             <Label className="font-semibold ">Commission Name:</Label>
//              <Input
//                 className="mt-2"
//                 value={commission.commission_name}/>
//                       </div>
                      
//           <div>
//             <Label className="font-semibold ">Commission Amount:</Label>
//              <Input
//                 className="mt-2"
//                 value={commission.commission_amount}/>
//                       </div>
                      
//           <div>
//            <Label className="font-semibold ">Description:</Label>
//              <Textarea
//                 className="mt-2"
//                 value={commission.description}/>
//                       </div>
                      
//           <div>
//           <Label className="font-semibold ">Starting Date:</Label>
//              <Input
//                 className="mt-2"
//                 value={commission.start_date}/>
//                       </div>
                      
//           <div>
//           <Label className="font-semibold ">Ending Date:</Label>
//              <Input
//                 className="mt-2"
//                 value='Ending Date'/>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default CommissionDetails;

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
    setEditedData(selectedCommission);
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
    setCommission(editedData);
    setIsEditing(false); 
  };

  if (!commission) {
    return <div>Loading...</div>;
  }

  return (
    <div className="px-2 md:px-5">
      <Header />
      
      <div className="flex justify-end items-center mb-4 py-5 px-2 md:px-5">
        <button
          className="bg-[#EEF2F7] p-2 rounded-sm "
          onClick={isEditing ? handleSave : handleEditToggle}>
          {isEditing ? (
            <Save size={20} className="text-black " />
          ) : (
            <Pencil size={20} className="text-black" />
          )}
        </button>
      </div>

      {isEditing ? (
        <div className="grid gap-4 w-full md:w-2/6">
          <div>
            <Label className="font-semibold">Commission Name:</Label>
            <Input
              type="text"
              name="commission_name"
              value={editedData.commission_name}
              onChange={handleInputChange}
              className="border mt-2 w-full rounded"
            />
          </div>
          <div>
            <Label className="font-semibold">Commission Amount:</Label>
            <Input
              type="number"
              name="commission_amount"
              value={editedData.commission_amount}
              onChange={handleInputChange}
              className="border mt-2 w-full rounded"
            />
          </div>
          <div>
            <Label className="font-semibold">Description:</Label>
            <Textarea
              name="description"
              value={editedData.description}
              onChange={handleInputChange}
              className="border mt-2 w-full rounded"
            />
          </div>
          <div>
            <Label className="font-semibold">Starting Date:</Label>
            <Input
              type="date"
              name="start_date"
              value={editedData.start_date}
              onChange={handleInputChange}
              className="border mt-2 w-full rounded"
            />
          </div>
          <div>
            <Label className="font-semibold">Ending Date:</Label>
            <Input
              type="date"
              name="end_date"
              value={editedData.end_date}
              onChange={handleInputChange}
              className="border mt-2 w-full rounded"
            />
          </div>
        </div>
      ) : (
        <div className="grid gap-4 w-full md:w-3/6">
          <div>
            <Label className="font-semibold">Commission Name:</Label>
            <Input
              className="mt-2"
              value={commission.commission_name}
              readOnly
            />
          </div>
          <div>
            <Label className="font-semibold">Commission Amount:</Label>
            <Input
              className="mt-2"
              value={commission.commission_amount}
              readOnly
            />
          </div>
          <div>
            <Label className="font-semibold">Description:</Label>
            <Textarea
              className="mt-2"
              value={commission.description}
              readOnly
            />
          </div>
          <div>
            <Label className="font-semibold">Starting Date:</Label>
            <Input
              className="mt-2"
              value={commission.start_date}
              readOnly
            />
          </div>
          <div>
            <Label className="font-semibold">Ending Date:</Label>
            <Input
              className="mt-2"
              value={commission.end_date}
              readOnly
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default CommissionDetails;
