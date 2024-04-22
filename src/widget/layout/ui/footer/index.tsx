import Image from 'next/image'
import Link from 'next/link'

export const Footer = () => (
  <footer className="card py-4 border-t sticky top-[100vh] min-h-10 mt-10">
    <div className="container">
      <div className="flex text-xs justify-center items-center flex-wrap gap-4">
        <div className="flex gap-3 items-center">
          <Image src={'/images/logo.png'} alt="logo" width={30} height={30} />{' '}
          2La-trade© 2024
        </div>
        <div className="flex gap-3">
          <span className="font-medium">Email: </span>
          <Link target="_blank" href="mailto:2laartmorozov@gmail.com">
            2laartmorozov@gmail.com
          </Link>
        </div>
        <div className="flex gap-3">
          <span className="font-medium">Telegram: </span>
          <Link target="_blank" href="https://t.me/Al2laart">
            @Al2laart
          </Link>
        </div>
        <div className="flex gap-3">
          <span className="font-medium">Github: </span>
          <Link target="_blank" href="https://github.com/2laArt">
            2laArt
          </Link>
        </div>
      </div>
    </div>
  </footer>
)
