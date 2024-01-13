import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href='/'>
          <Image 
            src="/assets/images/bagong_pilipinas.png"
            alt="logo"
            width={98}
            height={38}
          />
        </Link>

        <p className="font-semibold">DPWH Region X | All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer