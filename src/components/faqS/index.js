import {useState} from 'react';
import { BlogRow } from './blogRow';


export const FaqS = () => {
  

  const [faqs, setFaqs] = useState(null)


  return (
    <div className='blog-container'>
        <h3 style={{marginBottom: '50px'}}>Часто задаваемые вопросы</h3>
        {faqs && faqs.map(faq => 
          <BlogRow faq={faq} key={faq.id}/>
        )}
    </div>
  );
}
