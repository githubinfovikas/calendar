import React from 'react'
import { MdOutlineEmergencyRecording } from "react-icons/md";
import { MdMenuBook } from "react-icons/md";
import { useLocation } from 'react-router-dom';


const item = ['Nature', 'Nature', 'Nature', 'Nature'];

const SessionDairy = () => {
    const state = useLocation();
    console.log("data",state.state);
    return (
        <>
            <div>
                <div className=' border-2 sm:w-full border-green-500'>
                    <div className=' flex items-center gap-x-6 p-1 pl-14 pr-14 justify-between'>
                        <div className=' flex flex-col items-start justify-start'>
                            <div className='text-xl font-bold'>{state.state.subjects}</div>
                            <div className='text-sm '>{state.state.startTiming} to {state.state.endTiming}</div>
                            <div className='flex'>
                                <div>Facilty : </div>
                                <div>{state.state.professors}</div>
                            </div>
                            <div>***********</div>
                        </div>
                        <div className='flex items-center justify-center gap-x-2'>
                            <div><MdMenuBook style={{ fontSize: '30px' }}/></div>
                            <div>Session Notes</div>
                        </div>
                    </div>
                </div>
                <div className=' border-2 mt-4 bg-green-50 flex items-center justify-center border-green-500 pt-2'>
                    <div>
                        <div className='text-2xl font-bold flex items-center justify-center p-2 pb-4'>Key Take on Culture</div>
                        <div className='mb-4'>We'll touch upon key themes as power dynamic vikas accordion   jkfdaja kladsfj kasjfdl kajfd </div>
                        <div className="pl-8">
                            <ul className="list-disc mb-8">
                                {item.map((item: string, index: number) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="text-white  flex items-end justify-end pt-2 pr-2">
                    <button className='btn flex items-center gap-3 text-sm button bg-green-400'>
                        <MdOutlineEmergencyRecording />
                        Class Recordings
                    </button >

                </div>
            </div>
        </>
    )
}

export default SessionDairy
