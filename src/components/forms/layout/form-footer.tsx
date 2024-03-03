import { useRouter } from "next/navigation";
import { Button } from "../../ui/button";
import { Plus, Trash, Edit, ArrowLeftCircle } from "lucide-react";

interface FormFooterProps {
  act: string;
  submitting: any;
  tool: string;
}

const FormFooter = ({ act, submitting, tool }: FormFooterProps) => {
  const router = useRouter();
  const toolFooter = tool.substr(0,tool.length-1);
  return (
    <>
      <Button className="mr-4" variant={"ghost"} onClick={() => router.back()}>
        <ArrowLeftCircle className="mr-1 h-4 w-4" /> Return
      </Button>
      <Button type="submit" disabled={submitting}>
        {act === "Add" ? <Plus className="mr-1 h-4 w-4" /> : ""}
        {act === "Edit" ? <Edit className="mr-1 h-4 w-4" /> : ""}
        {act === "Delete" ? <Trash className="mr-1 h-4 w-4" /> : ""}
        {submitting ? `${act}ing...` : act + ' ' + toolFooter}
      </Button>
    </>
  );
};

export default FormFooter;