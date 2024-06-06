import { useState } from 'react'
import './Works.css'
import WebDesign from './WorkComponents/WebDesign'
import ProductDesign from './WorkComponents/ProductDesign'
import Development from './WorkComponents/Development'
export default function Works() {
  const [Work,setWork] = useState('Web Design')
  const ListData = ['Web Design','Development','Illistration','Product Design','Social Media']
  return (
    <section className='f_works'>
      <ul className='left_work'>
        {ListData.map(item=>{
          return(
            <li key={item} onClick={()=>setWork(item)} >{item}</li>
          )
        })}
      </ul>
      <div className='right_work'>
        {Work==='Web Design' ? (<WebDesign/>) : Work==='Product Design' ? (<ProductDesign/>) : Work==='Development' ? (<Development/>) :
        Work === 'Illistration' ?'':''
      }
      </div>
    </section>
  )
}
