"use client"
import styles from './finish.module.css'
import {useState,useEffect} from 'react'
import {useRouter,useSearchParams} from 'next/navigation'
const Finish = ()=>{
    const [showPage,setShowPage]=useState(true);
    const router = useRouter();
    const x = useSearchParams();
    const datas = x.get("names");

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPage(false)
            router.push(`/fozajil/pay/code/codeto?names=${datas}`)
        }, 7000);
        return () => clearTimeout(timer);
    },[])
    
    
       
    return(
       <div className={styles.continer}>
         <div className={styles.loader}></div>
       
           {showPage && <p>سيتم تحويلك الى الصفحة التالية في غضون 7 ثواني</p>}
     </div>
           
)

}

export default Finish;
