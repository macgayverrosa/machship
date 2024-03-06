import type { NextApiRequest, NextApiResponse } from "next";
// import { ItemSchema } from "@/app/devs/data/schema";
import prisma from "../../../../prisma/client";

export default async function handler( 
  req: NextApiRequest,
  res: NextApiResponse
  // res: NextApiResponse<ItemSchema>
){
  if(req.method === 'GET'){
    try{
      const data = await prisma.dev.findMany()
      return res.status(200).json(data)
    }catch(error){
      return res.status(500).json(error)
    }
  }
}

// interface RootProps {
//   request: any;
//   tool: string;
//   Model: any;
//   fields?: any;
// }

// export async function apiGET({ request, tool, Model }: RootProps) {
//   try {
//     await connectToDB();
//     const objs = await Model.find({});
//     if (!objs) {
//       return NextResponse.json(`${tool} not found`, { status: 404 });
//     } // Find the existing customer by ID
//     return NextResponse.json(objs, { status: 200 });
//   } catch (error) {
//     return NextResponse.json(`Error fetching all ${tool} ${error}`, {
//       status: 500,
//     });
//   }
// }