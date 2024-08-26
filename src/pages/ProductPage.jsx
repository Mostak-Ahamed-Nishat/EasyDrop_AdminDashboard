import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Eye } from 'lucide-react';
import { PencilLine } from 'lucide-react';
import { Trash2 } from 'lucide-react';
import { Ellipsis } from 'lucide-react';
import prodImage from '../assets/images/prod.jpg';

function ProductPage({ data }) {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Stock</TableHead>
            <TableHead >Variant</TableHead>
            <TableHead >Price</TableHead>
            <TableHead >Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          
          <TableRow>
            <TableCell >
              <span className="flex items-center"> <img src={prodImage} alt="Product Image" className="h-[100px] w-[100px] " />
                <p className=" font-bold ml-2">Fashionable Tote Bag RM 14</p></span>
            </TableCell>
            <TableCell>Beauty</TableCell>
            <TableCell>21</TableCell>
            <TableCell className="flex flex-col justify-center items-start text-center gap-1">
              <Badge className="rounded-sm">Black 14</Badge>
              <Badge className="rounded-sm">White 20</Badge>
              <Badge className="rounded-sm">Red 18</Badge>
            </TableCell>
            <TableCell >
              <p>Buying Price Tk 600</p>
              <p>Resell Price Tk 590</p>
              <p>Retail Price Tk 570</p>
              <p>Suggested Price Tk 650</p>
            </TableCell>
            <TableCell className="text-right">
              <div className=" flex gap-2 items-center"> <Eye className="bg-[#EEF2F7] rounded-sm py-[5px] px-[8px]" size={30} />
                <PencilLine className="bg-[#b5d0f0] rounded-sm py-[5px] px-[8px]" size={30} />
                <Trash2 className="bg-[#f0c6b5] rounded-sm py-[5px] px-[8px]" size={30} />
                <Ellipsis className="bg-[#a1d6bc] rounded-sm py-[5px] px-[8px]" size={30} /></div>
            </TableCell>
          </TableRow>

          {/* ********************TWO******************* */}

          <TableRow>
            <TableCell >
              <span className="flex items-center"> <img src={prodImage} alt="Product Image" className="h-[100px] w-[100px] " />
                <p className=" font-bold ml-2">Fashionable Tote Bag RM 14</p></span>
            </TableCell>
            <TableCell>Beauty</TableCell>
            <TableCell>21</TableCell>
            <TableCell className="flex flex-col justify-center items-start text-center gap-1">
              <Badge className="rounded-sm">Black 14</Badge>
              <Badge className="rounded-sm">White 20</Badge>
              <Badge className="rounded-sm">Red 18</Badge>
            </TableCell>
            <TableCell >
              <p>Buying Price Tk 600</p>
              <p>Resell Price Tk 590</p>
              <p>Retail Price Tk 570</p>
              <p>Suggested Price Tk 650</p>
            </TableCell>
            <TableCell className="text-right">
              <div className=" flex gap-2 items-center"> <Eye className="bg-[#EEF2F7] rounded-sm py-[5px] px-[8px]" size={30} />
                <PencilLine className="bg-[#b5d0f0] rounded-sm py-[5px] px-[8px]" size={30} />
                <Trash2 className="bg-[#f0c6b5] rounded-sm py-[5px] px-[8px]" size={30} />
                <Ellipsis className="bg-[#a1d6bc] rounded-sm py-[5px] px-[8px]" size={30} /></div>
            </TableCell>
          </TableRow>

          {/* ********************THREE******************* */}

          <TableRow>
            <TableCell >
              <span className="flex items-center"> <img src={prodImage} alt="Product Image" className="h-[100px] w-[100px] " />
                <p className=" font-bold ml-2">Fashionable Tote Bag RM 14</p></span>
            </TableCell>
            <TableCell>Beauty</TableCell>
            <TableCell>21</TableCell>
            <TableCell className="flex flex-col justify-center items-start text-center gap-1">
              <Badge className="rounded-sm">Black 14</Badge>
              <Badge className="rounded-sm">White 20</Badge>
              <Badge className="rounded-sm">Red 18</Badge>
            </TableCell>
            <TableCell >
              <p>Buying Price Tk 600</p>
              <p>Resell Price Tk 590</p>
              <p>Retail Price Tk 570</p>
              <p>Suggested Price Tk 650</p>
            </TableCell>
            <TableCell className="text-right">
              <div className=" flex gap-2 items-center"> <Eye className="bg-[#EEF2F7] rounded-sm py-[5px] px-[8px]" size={30} />
                <PencilLine className="bg-[#b5d0f0] rounded-sm py-[5px] px-[8px]" size={30} />
                <Trash2 className="bg-[#f0c6b5] rounded-sm py-[5px] px-[8px]" size={30} />
                <Ellipsis className="bg-[#a1d6bc] rounded-sm py-[5px] px-[8px]" size={30} /></div>
            </TableCell>
          </TableRow>

          {/* ********************Four******************* */}

          <TableRow>
            <TableCell >
              <span className="flex items-center"> <img src={prodImage} alt="Product Image" className="h-[100px] w-[100px] " />
                <p className=" font-bold ml-2">Fashionable Tote Bag RM 14</p></span>
            </TableCell>
            <TableCell>Beauty</TableCell>
            <TableCell>21</TableCell>
            <TableCell className="flex flex-col justify-center items-start text-center gap-1">
              <Badge className="rounded-sm">Black 14</Badge>
              <Badge className="rounded-sm">White 20</Badge>
              <Badge className="rounded-sm">Red 18</Badge>
            </TableCell>
            <TableCell >
              <p>Buying Price Tk 600</p>
              <p>Resell Price Tk 590</p>
              <p>Retail Price Tk 570</p>
              <p>Suggested Price Tk 650</p>
            </TableCell>
            <TableCell className="text-right">
              <div className=" flex gap-2 items-center"> <Eye className="bg-[#EEF2F7] rounded-sm py-[5px] px-[8px]" size={30} />
                <PencilLine className="bg-[#b5d0f0] rounded-sm py-[5px] px-[8px]" size={30} />
                <Trash2 className="bg-[#f0c6b5] rounded-sm py-[5px] px-[8px]" size={30} />
                <Ellipsis className="bg-[#a1d6bc] rounded-sm py-[5px] px-[8px]" size={30} /></div>
            </TableCell>
          </TableRow>
          
        </TableBody>
      </Table>

    </div>
  )
}

export default ProductPage