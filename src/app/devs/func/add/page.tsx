"use client";

import React from "react";
import ToolForm from "../../data/form";
import PageAdd from "@/components/custom/page-add";
import { itemSchema, iniValue, setValues } from "../../data/schema";

const AddPage = () => {
  return (
    <PageAdd
      ToolForm={ToolForm}
      iniValue={iniValue}
      itemSchema={itemSchema}
      setValues={setValues}
    />
  );
};

export default AddPage;