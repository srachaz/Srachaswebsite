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
        <div className="flex flex-row justify-center pt-20">
          
          <div>
           
              <h1 className="text-3xl text-[#737df0] font-bold ">Sarah Z </h1> 
             
              
              <div className="text-sm pt-3">Life is best lived <a href="https://medium.com/@sracha/interesting-life-85ccf33054e2" class="text-[#737df0] font-bold">interestingly</a>. 
              <br/> I like <a href="https://x.com/sracha_z" class="text-[#737df0] font-bold"> crypto.</a> 
              <br/>Exploring at <a href="https://twitter.com/ebisu_finance" class="text-[#737df0] font-bold">Ebisu Finance.</a>
              <br/> 
             
              </div>
              
             
          </div>
          
        </div>
      
    </div>
    </>
  )
}
