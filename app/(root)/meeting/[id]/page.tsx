'use client'
import Loader from "@/components/Loader";
import MeetingRoom from "@/components/MeetingRoom";
import MeetingSetup from "@/components/MeetingSetup";
import { UseGetCallById } from "@/hooks/UseGetCallById";
import { useUser } from "@clerk/nextjs"
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import React, { useState } from "react"

const Meeting = ({ params : {id} }: { params: { id: string }})=>{

    const {user, isLoaded} = useUser();
    const[isSetupComplete, setIsSetupComplete] = useState(false);

    const {call, isCallLoading} = UseGetCallById(id);

    if(!isLoaded || isCallLoading) return <Loader/>

    return (
        <div className="h-screen w-full">
            <StreamCall call={call}>
                <StreamTheme>
                    {!isSetupComplete ? (
                        <MeetingSetup setIsSetupComplete={setIsSetupComplete}/>
                    ):(
                        <MeetingRoom/>
                    )}
                </StreamTheme>
            </StreamCall>
        </div>
    )
}

export default Meeting