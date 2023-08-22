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
              <div className="flex flexrow justify-end space-x-4"><GithubIcon/><InstaIcon/><TwitterIcon/><LinkedInIcon/><SpotifyIcon/><MailIcon/></div>
              
          </div>
          <div className="w-1/2 ">
            
              <h1 className="text-3xl text-[#737df0] font-bold">Hi I&apos;m Sarah RJ Zhang: <br /> Freedom, & people lover!</h1>
              
              <div className="text-sm"><br/>UCLA freshman curious about microeconomics, investment theory, and DeFi!</div>
              <div className="text-sm pt-3">Life got interesting after I snuck into <a href="https://twitter.com/sracha_z/status/1627588736870682625" class="text-[#737df0] font-bold">Treehacks</a>—met extremely cool people, read books, and had fascinating life experiences that changed my <Link href="/thoughts" class="text-[#737df0] font-bold">life philosophies. </Link></div>
              <div className="text-sm pt-3">Figuring out how to live life like an adventure! So much to learn in the world—excited for surprises life can bring!</div>
              <div className="text-sm pt-3">Currently reading: Tomorrow, And Tomorrow, And Tomorrow</div>
              <div className="text-sm pt-8"><br/>Constantly seeking new adventures and interesting conversations—reach out to me!</div>
            
            <div className="text-sm text-gray-300 relative inline-block border-t top-3">Built & Designed by me </div>
          </div>
          
        </div>
      
    </div>
    </>
  )
}
