import Navbar from "@/components/navbar";

export default function Home() {
    return(
        <>
        <Navbar />
        <div className="flex items-center justify-between flex-col p-5">
            <div className="flex flex-col justify-center mt-12">
        
                <h1 className="text-3xl text-[#737df0] font-bold text-center">Time is Finite</h1> 
                <div className="text-sm text-[#737df0] font-semibold text-center">17 Jun 23</div> 
                
               <div className=" pt-4 pr-40 pl-40">
               Everyone says that life is a long long journey, that life is a marathon. <br/> <br/>

I was reading The 3 Body Problem, and I fell upon this passage:

“Ye felt this interminable wave was an abstract view of the universe: one end connected to the endless past, the other to the endless future…” <br/>

The universe has an infinite timeline, and it&apos;s only a tiny break, a tiny glitch in the grand scheme of the universe, where I have time to live. <br/>  <br/>

If you think about it like that, it feels like there&apos;s a very finite time to get what I want in life. And I don&apos;t know when I will run out of the peaceful time I enjoy now, where my parents and I are safe and everything is real. The life I have now is stable, the life I want in the future is exciting—a tragic life disaster could upend it anytime. I can&apos;t shake off the sense of urgency to act optimally at every given moment. Perhaps long term it will bring more good than the anxiousness I have today. <br/>  <br/>

When I&apos;m 60 years old, I will dream about the time I was living today. Because the next 5 years of my life, may be the best in all my life. That&apos;s why everyday is a blessing, and every hour is invaluable—I have the uninterruptible freedom to live how I want, and the focused time to get what I want.<br/>  <br/>

Time itself is infinite, but my time is finite.
            </div>
        </div>
        </div>
        </>
    )
}