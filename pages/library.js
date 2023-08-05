import Navbar from "@/components/navbar";
import Tooltip from "@/components/tooltip";

export default function Home() {
    return(
        <>
        <Navbar />
        <div className="flex items-center justify-between flex-col">
            <div className="flex flex-col justify-center mt-4">
        
                <h1 className="text-3xl text-[#737df0] font-bold text-center">Library</h1> 
                <div className="text-sm pt-2">Hover over to see some thoughts!</div>
                

               
               

                <div className="text-[#737df0] text-center pt-4">
                    <Tooltip text="Cures my life crises'" positionX="left-2" positionY="bottom-full">
                    <div className="cursor-pointer m-3">How to Live</div>
                    </Tooltip>
                    
                    <Tooltip text="AdventurexRevenge" positionX="right-2"positionY="bottom-full" >
                    <div className="cursor-pointer m-3">The Odyssey</div>
                    </Tooltip>
                    <Tooltip text="jurassic park but *universe*" positionX="left-2" positionY="bottom-full">
                    <div className="cursor-pointer m-3">Three Body Problem</div>
                    </Tooltip>
                    <Tooltip text="made my brain hurt" positionX="right-2" positionY="bottom-full">
                    <div className="cursor-pointer m-3">The Big Short</div>
                    </Tooltip>
                    <Tooltip text="intellectualxscary" positionX="left-1/2" positionY="bottom-full">
                    <div className="cursor-pointer m-3">Jurassic Park</div>
                    </Tooltip>
                    <Tooltip text="3 huge plot twists" positionX="left-2" positionY="bottom-full">
                    <div className="cursor-pointer m-3">Scythe</div>
                    </Tooltip>
                    <Tooltip text="got me out the status game" positionX="left-2" positionY="bottom-full">
                    <div className="cursor-pointer m-3">Naval's Almanack</div>
                    </Tooltip>
                    <Tooltip text="cried" positionX="left-1/2" positionY="bottom-full">
                    <div className="cursor-pointer m-3">The Little Prince</div>
                    </Tooltip>
                   
                    
                </div>
                
               
        </div>
        </div>
        </>
    )
}