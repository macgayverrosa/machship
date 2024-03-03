"use client";

import { useRouter } from "next/navigation";
import { Button } from "../../ui/button";
import { ArrowLeftCircle } from "lucide-react";

interface FormHeaderProps {
  tool: string;
}

const FormHeader = ({ tool }: FormHeaderProps) => {
  const router = useRouter();
  return (
    <div className="flex-col md:flex">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">
            <div className="capitalize">{tool} Management</div>
          </h2>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" onClick={() => router.back()}>
              <ArrowLeftCircle className="mr-1 h-4 w-4" /> Return Overview
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormHeader;