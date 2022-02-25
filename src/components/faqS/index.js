import {useEffect, useState} from 'react';
import { DATABASE_URL } from '../../firebase-config';
import { BlogRow } from './blogRow';


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
        <h3 style={{marginBottom: '50px'}}>Часто задаваемые вопросы</h3>
        {faqs && faqs.map(faq => 
          <BlogRow faq={faq} key={faq.id}/>
        )}
    </div>
  );
}
