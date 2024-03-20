import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '../components/navbar'
import TwitterIcon from '../components/twittericon'
import LinkedInIcon from '@/components/linkedinicon'
import MailIcon from '@/components/mailicon'
import SpotifyIcon from '@/components/spotify'
import GithubIcon from '@/components/githubicon'
import InstaIcon from '@/components/instaicon'
import Link from 'next/link';
import Head from 'next/head';




const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
   <Head>
    <link rel="icon" href="/icons/compass.png"/>
    <title>Sarah Zhang</title>
   </Head>
  <Navbar />
      <div className="flex items-center justify-between flex-col p-5">
        <div className="flex flex-row gap-6 justify-center mt-12">
          <div className = "align-right leading-4">
            <div><Image src="/headshot.png" alt="headshot"  width={200} height={200}/> </div>
              <div className="text-right text-sm pt-2">VAN🇨🇦 → SD → SF & LA🌁 </div>
              <div><br/></div>
              <div className="flex flexrow justify-end space-x-4"><GithubIcon/><TwitterIcon/><LinkedInIcon/><MailIcon/></div>
              
          </div>
          <div className="w-1/2 ">
            
              <h1 className="text-3xl text-[#737df0] font-bold">Hi, I&apos;m Sarah!</h1>
              
              <div className="text-sm"><br/>UCLA first-year excited about crypto and soon-to-be world-class DJ. </div>
              <div className="text-sm pt-3">Life changed after I sneaked into <a href="https://twitter.com/sracha_z/status/1627588736870682625" class="text-[#737df0] font-bold">Treehacks</a>
              , where I realized that life is best lived <a href="https://medium.com/@sracha/interesting-life-85ccf33054e2" class="text-[#737df0] font-bold">interestingly</a>. I love crypto, which I&apos;m exploring further on campus through <a href="https://www.blockchainatucla.com/" class="text-[#737df0] font-bold"> Blockchain @ UCLA</a> and the <a href="https://uclaconnectionlab.org/" class="text-[#737df0] font-bold"> Connection Lab</a>, and I also 
              lead growth at <a href="https://twitter.com/ebisu_finance" class="text-[#737df0] font-bold">Ebisu Finance</a>, a DeFi startup building a stablecoin backed by liquid restaking tokens. My first crypto conference at  <a href="https://medium.com/@sracha/ethdenver-2024-fc0e2153d1a3" class="text-[#737df0] font-bold"> ETHDenver</a> was an unforgetabble experience—I hope to travel the world and make more amazing friends! </div>
              <div className="text-sm pt-3">In my freetime, I&apos;ll either be running around LA, swimming, DJing, going on an adventure, self-fulfilling my prophecies, or drinking matcha at new cafes! When I have too much freetime, I become very existential...</div>
              <div className="text-sm pt-3">Still reading: Dune & Foundation</div>
              {/* <div className="text-sm pt-8"></div> */}
            
            <div className="text-sm text-gray-300 relative inline-block border-t top-3">Built & Designed by me </div>
          </div>
          
        </div>
      
    </div>
    </>
  )
}
