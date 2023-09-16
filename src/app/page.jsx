import HomeHeader from '@/components/HomeHeader'
import Image from 'next/image'
import HomeSearch from '@/components/HomeSearch'

export default function Home() {
  return (
    <>
      <HomeHeader />
      <div className="flex flex-col items-center mt-24">
        <Image src="/google.png" width={300} height={100} />
        <HomeSearch />
      </div>
    </>
  )
}
