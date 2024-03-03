"use client";

import React from "react";
import ToolForm from "../data/form";
import PageCreate from "@/components/custom/PageCreate";
import { itemSchema, iniValue, setValues } from "../../data/schema";

const AddPage = () => {
  return (
    <PageCreate
      ToolForm={ToolForm}
      iniValue={iniValue}
      itemSchema={itemSchema}
      setValues={setValues}
    />
  );
};

export default AddPage;