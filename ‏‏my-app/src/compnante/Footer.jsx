import styles from './footer.module.css'
import Image from 'next/image'
import whts from "../../public/icons8-whatsapp-32.png"
import yout from "../../public/icons8-youtube.svg"
import twi from "../../public/icons8-twitter.svg"
import face from "../../public/icons8-facebook.svg"
import logo from "../../public/logo.svg"
import linksfoter from '@/app/(footer)/linksfoter'
import Link from 'next/link'
const Footer = () => {
  return (
    <div dir='ltr'>
        <div className={styles.dirc}>
        <Image 
                src={logo}
                width={50}
              />
            <div>
              <Image 
                src={whts}
                width={25}
              />
              <Image 
                src={yout}
                width={25}
              />
              <Image 
                src={twi}
                width={25}
              />
              <Image 
                src={face}
                width={25}
              />
            </div>
            <div className={styles.links}>
              {
                linksfoter.map((link) => {
                  return <Link key={link.id} href={link.pathname}>{link.title}</Link>
                })
              }
            </div>
            <p>© 2022 زاجل جميع الحقوق محفوظة</p>
        </div>

    </div>
  )
}

export default Footer