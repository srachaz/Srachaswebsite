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
      <div className="flex items-center flex-col p-5 min-h-screen">
        <div className="flex flex-row justify-center pt-20 ">
          
          <div>
           
              <h1 className="text-3xl text-[#737df0] font-bold ">Sarah Z. </h1> 
             
              

              <div className="text-sm pt-3">
              UCLA sophomore making <a href="https://www.instagram.com/srachasauce/" class="text-[#737df0] font-bold"> videos</a> on how to live an interesting life.
              <br/> Exploring <a href="https://x.com/sracha_z" class="text-[#737df0] font-bold"> crypto</a> at <a href="https://www.anagram.xyz/" class="text-[#737df0] font-bold">Anagram</a>, previously at <a href="https://twitter.com/ebisu_finance" class="text-[#737df0] font-bold">Ebisu Finance</a>.
              
              <br/>Find me in SF, UCLA, or 🗺.
              <br/> 
              Life is best lived <a href="https://medium.com/@sracha/control-over-my-life-fc20dd74317d" class="text-[#737df0] font-bold">with control</a>. 

              </div>
              
             
          </div>
          
        </div>
      
    </div>
    </>
  )
}
