import Navbar from "@/components/navbar";
import Tooltip from "@/components/tooltip";

export default function Home() {
    return(
        <>
        <Navbar />
        <div className="flex items-center justify-between flex-col">
            <div className="flex flex-col justify-center mt-4">
        
                <h1 className="text-3xl text-[#737df0] font-bold text-center">Library</h1> 
                <div className="text-sm pt-2 text-center">Hover over to see some thoughts!</div>
                

               
               

                <div className="text-[#737df0] text-center pt-4">
                <Tooltip text="fragility of life" positionX="left-2" positionY="bottom-full">
                    <div className="cursor-pointer m-3">When Breath Becomes Air</div>
                    </Tooltip>
                   
                    <Tooltip text="*you just need to manifest* for 200 pages" positionX="left-2"positionY="bottom-full" >
                    <div className="cursor-pointer m-3">The Law of Attraction</div>
                    </Tooltip>
                    <Tooltip text="argues against shitcoin trading" positionX="left-2"positionY="bottom-full" >
                    <div className="cursor-pointer m-3">The Intelligent Investor</div>
                    </Tooltip>
                    <Tooltip text="Lived 45 years. Reread immediately." positionX="left-2"positionY="bottom-full" >
                    <div className="cursor-pointer m-3">Tomorrow, & Tomorrow, & Tomorrow</div>
                    </Tooltip>
                    
                    <Tooltip text="I want to study math now" positionX="right-2" positionY="bottom-full">
                    <div className="cursor-pointer m-3">The Man Who Solved The Market</div>
                    </Tooltip>
                    <Tooltip text="AdventurexRevenge" positionX="left-2"positionY="bottom-full" >
                    <div className="cursor-pointer m-3">The Odyssey</div>
                    </Tooltip>
                    <Tooltip text="made my brain hurt" positionX="right-2" positionY="bottom-full">
                    <div className="cursor-pointer m-3">The Big Short</div>
                    </Tooltip>
                    <Tooltip text="jurassic park but *universe*" positionX="left-2" positionY="bottom-full">
                    <div className="cursor-pointer m-3">Three Body Problem</div>
                    </Tooltip>
                    
                    <Tooltip text="got me out the status game" positionX="left-2" positionY="bottom-full">
                    <div className="cursor-pointer m-3">Naval&apos;s Almanack</div>
                    </Tooltip>
                    <Tooltip text="intellectualxscary" positionX="left-1/2" positionY="bottom-full">
                    <div className="cursor-pointer m-3">Jurassic Park</div>
                    </Tooltip>
                    <Tooltip text="cried" positionX="left-1/2" positionY="bottom-full">
                    <div className="cursor-pointer m-3">The Little Prince</div>
                    </Tooltip>
                    <Tooltip text="3 huge plot twists" positionX="left-2" positionY="bottom-full">
                    <div className="cursor-pointer m-3">Scythe</div>
                    </Tooltip>
                    <Tooltip text="my life bible" positionX="left-2" positionY="bottom-full">
                    <div className="cursor-pointer m-3">How to Live</div>
                    </Tooltip>
                    <div><br/><br/></div>
                    
                </div>
                
               
        </div>
        </div>
        </>
    )
}