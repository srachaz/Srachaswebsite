import Navbar from "@/components/navbar";
import Thoughtbar from "@/components/thoughtbar";
import Link from 'next/link';


export default function Home() {
    return(
        <>
        <Navbar />
        <div className="flex items-center justify-between flex-col">
            <div className="flex flex-col justify-center mt-4 text-center">
        
    
                
                <Link href="/nomading" className="text-2xl text-[#737df0] pt-10">Nomading </Link>
            <a href="https://medium.com/@sracha/ethdenver-2024-fc0e2153d1a3" className="text-2xl text-[#737df0] pt-10">10 Mar 24 — ETHDenver</a>
            <a href="https://seb.stanfordblockchain.xyz/meta-protocols/brc-20" className="text-2xl text-[#737df0]  pt-10">15 Jan 24 — BRC-20</a>
            <a href="https://medium.com/@sracha/control-over-my-life-fc20dd74317d" className="text-2xl text-[#737df0] pt-10">20 Dec 23 — Control Over My Life</a>
            <a href="https://medium.com/@sracha/interesting-life-85ccf33054e2" className="text-2xl text-[#737df0] pt-10">21 Aug 23 — Interesting Lives</a>
               
               

                
                
               
        </div>
        </div>
        
        
        </>
    )
}

