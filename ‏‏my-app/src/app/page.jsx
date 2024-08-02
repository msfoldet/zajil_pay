"use client"

import styles from './page.module.css'
import Image from 'next/image'
import img1 from "../../public/image1.png"
import img2 from "../../public/image2.jpg"
import img3 from "../../public/image3.png"
import img4 from "../../public/image4.png"
import postive from "../../public/icons8-positive-dynamic-26.png"
import database from "../../public/icons8-database-48.png"
import tick from "../../public/icons8-tick-64.png"
import pointer from "../../public/icons8-pointer-48.png"
import Link from 'next/link'

import { useState } from 'react'


export default function Home() {
  const [track,setTrack]=useState();
  const isTrue = (track != undefined )

  return (
    
    <main className={styles.main}>
      <div className={styles.backback}></div>
      <div className={styles.backtow}></div>
      <div className={styles.sec1}>
        <div>
        <h3>حلول لوجستية سهلة وموثوقة وبأسعار تنافسية</h3>
        <p>اكتشف كيف يمكننا مساعدتك على تنمية أعمالك وزيادة أرباحك من خلال حلولنا الاحترافية وشبكتنا اللوجستية العالمية</p>
        <a href='/fozajil'>اطلب الخدمة الان</a>
        </div>
      
      </div>

      <div className={styles.sec2}>
        <div>
          <Image
            src={img1}
            style={{width:"100%"}}
            height={250}
          />
          <p>نقل البضائع من مكان لآخر ومن دولة إلى أخرى إما عن طريق الشحن البحري عبر الموانئ بواسطة السفن أو الشحن الجوي عبر المطارات بواسطة الطائرات أو الشحن البري بواسطة الشاحنات والقطارات</p>
        </div>
        <div>
        <Image
            src={img2}
            style={{width:"100%"}}
            height={250}
          />
          <p>هل تبحث عن شبكة توصيل سريعة تجمع بين جودة الخدمة وكفاءة الخبير؟
كل يوم ، تعمل فرقنا للشحن بكد لضمان تسليم المنصات الخاصة بك في الوقت المناسب إلى المكان المناسب – والتي قد تكون قريبة من المنزل أو على الجانب الآخر من منطقة الخليج . يتحمل خبراؤنا المسؤولية الكاملة عن المواعيد النهائية والميزانيات وصورة العلامة التجارية الخاصة بكم.</p>
        </div>
        <div>
        <Image
            src={img3}
            style={{width:"100%"}}
            height={250}
          />
          <p>هل تبحث عن شبكة توصيل سريعة تجمع بين جودة الخدمة وكفاءة الخبير؟
كل يوم ، تعمل فرقنا للشحن بكد لضمان تسليم المنصات الخاصة بك في الوقت المناسب إلى المكان المناسب – والتي قد تكون قريبة من المنزل أو على الجانب الآخر من منطقة الخليج . يتحمل خبراؤنا المسؤولية الكاملة عن المواعيد النهائية والميزانيات وصورة العلامة التجارية الخاصة بكم.</p>
        </div>
        <div>
        <Image
            src={img4}
            style={{width:"100%"}}
            height={250}
          />
          <p>هل تبحث عن شبكة توصيل سريعة تجمع بين جودة الخدمة وكفاءة الخبير؟
كل يوم ، تعمل فرقنا للشحن بكد لضمان تسليم المنصات الخاصة بك في الوقت المناسب إلى المكان المناسب – والتي قد تكون قريبة من المنزل أو على الجانب الآخر من منطقة الخليج . يتحمل خبراؤنا المسؤولية الكاملة عن المواعيد النهائية والميزانيات وصورة العلامة التجارية الخاصة بكم.</p>
        </div>
      </div>
     
       <div className={styles.sec3}>
       <div className={styles.backthree}></div>
        <div className={styles.backfour}></div>
          <div className={styles.continer}>
            <div>
            <Image 
              src={postive}
              width={50}
            />
            <h2>تحديد ومراقبة أهداف الجودة الخاصة بك</h2>
          </div>

          <div>
            <Image 
              src={database}
              width={50}
            />
            <h2>الوصول إلى المعلومات وإدارتها</h2>
          </div>

          <div>
            <Image 
              src={tick}
              width={50}
            />
            <h2>
تحسين جودة الخدمة التي نقدمها للعملاء</h2>
          </div>

          <div>
            <Image 
              src={pointer}
              width={50}
            />
            <h2>كيف ندير ميزانيتك</h2>
          </div>
          </div>
      </div> 
    </main>
  )
  
}


