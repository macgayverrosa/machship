import { useRouter } from "next/navigation";
import { Button } from "../../ui/button";
import { Trash, Edit, ArrowLeftCircle, PlusCircle } from "lucide-react";

import { X } from "lucide-react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
const DialogClose = DialogPrimitive.Close;

interface FormFooterProps {
  act: string;
  submitting: any;
  tool: string;
}

const FormFooter = ({ act, submitting, tool }: FormFooterProps) => {
  const router = useRouter();
  const toolFooter = tool.substr(0, tool.length - 1);
  return (
    <>
      <DialogPrimitive.Close>
        <Button className="mr-4" variant={"ghost"}>
          <ArrowLeftCircle className="mr-1 h-5 w-5" /> Return
        </Button>
      </DialogPrimitive.Close>

      <Button type="submit" disabled={submitting}>
        {act === "Add" ? <PlusCircle className="mr-1 h-5 w-5" /> : ""}
        {act === "Edit" ? <Edit className="mr-1 h-5 w-5" /> : ""}
        {act === "Delete" ? <Trash className="mr-1 h-5 w-5" /> : ""}
        {submitting ? `${act}ing...` : act + " " + toolFooter}
      </Button>
    </>
  );
};

export default FormFooter;
