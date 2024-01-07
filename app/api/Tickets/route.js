import Ticket from "@/app/(models)/Ticket"
import { NextResponse } from "next/server";

export async function POST(req){
    console.log("POST RAN")
    try{
        const body = await req.json();
        const ticketdata = body.formData;
        await Ticket.create(ticketdata);
        return NextResponse.json({message: "Ticket Created", error},{status: 201})
    }catch(error){
        return NextResponse.json({message: "Error", error},{status: 500})
    }
}
export async function GET ()  {
    try{
        const tickets = await Ticket.find();
        return NextResponse.json({tickets},{status: 200})
    }catch(error){
        return NextResponse.json({message: "Error", error},{status: 500})
    }
}