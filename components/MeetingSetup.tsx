import { DeviceSettings, useCall, VideoPreview } from '@stream-io/video-react-sdk'
import React, { useEffect } from 'react'
import { Button } from './ui/button'

const MeetingSetup = ({setIsSetupComplete}:{setIsSetupComplete:React.Dispatch<React.SetStateAction<boolean>>}) => {
  const [isMicCamToggledOn, setIsMicCamToggledOn] = React.useState(false)
  const call = useCall()
  if(!call)  throw new Error('Call not found')
  useEffect(() => {
        if(isMicCamToggledOn){
          call?.camera.disable()
          call?.microphone.disable()
        }else {
          call?.camera.enable()
          call?.microphone.enable()
        }
  }, [isMicCamToggledOn,call?.camera,call?.microphone])
  return (
    <div className='flex h-screen w-full flex-col items-center justify-center gap-3 text-white '>
      <h1 className='text-2xl font-bold'>Setup</h1>
      <VideoPreview/>
      <div className="flex h-16 items-center justify-center gap-3">
        <label  className=" flex items-center justify-center gap-2 font-medium">
           <input type="checkbox" checked={isMicCamToggledOn} onChange={() => setIsMicCamToggledOn(!isMicCamToggledOn)} />
           join with mic and cam off
        </label>
        <DeviceSettings/>
      </div>
      <Button className='rounded-md bg-green-500 px-4 py-2.5'
      onClick={()=>{
        call.join()
        setIsSetupComplete(true)
      }}>
join meeting
      </Button>
    </div>
  )
}

export default MeetingSetup