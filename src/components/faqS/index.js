import {useEffect, useState} from 'react';
import { DATABASE_URL } from '../../firebase-config';
import { FaqSrow } from './faqSrow';
import './index.css'


export const FaqS = () => {
  

  const [faqs, setFaqs] = useState(null)

  useEffect(()=>{

    fetch(`${DATABASE_URL}/FAQ.json`)
      .then(r => r.json())
      .then(data => {
        const formattedData = Object.keys(data).map(key => ({
          id: key, ...data[key]
        }))
        setFaqs(formattedData)
      })
      .catch(()=>{

      })
  }, [])

  return (
    <div className='blog-container'>
        <h3 style={{marginBottom: '50px'}}>FAQ's</h3>
        {faqs && faqs.map(faq => 
          <FaqSrow faq={faq} key={faq.id}/>
        )}
    </div>
  );
}
