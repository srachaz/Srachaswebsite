import Navbar from "@/components/navbar";
import Thoughtbar from "@/components/thoughtbar";

export default function Home() {
    return(
        <>
        <Navbar />
        
        
        <div className="flex items-center justify-between flex-col ">
            <div className="flex flex-col justify-center mt-4 mx-6 sm:mx-40 md:mx-60 lg:mx-80">


            <a href="https://medium.com/@sracha/beginners-crypto-31a9be60dbb5" class="text-3xl text-[#737df0] font-bold text-center pt-20">7 Nov 23 — Beginner's Crypto</a>
            <a href="https://medium.com/@sracha/interesting-life-85ccf33054e2" class="text-3xl text-[#737df0] font-bold text-center pt-20">21 Aug 23 — Interesting Lives</a>
            <a href="https://medium.com/@sracha/time-is-finite-d77904380c94" class="text-3xl text-[#737df0] font-bold text-center pt-20">17 Jun 23 — Time is Finite</a>

            
                
               
        </div>
        </div>
        </>
    )
}