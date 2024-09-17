import { useEffect } from 'react'
import Router from 'next/router'
import { InlineWidget } from "react-calendly";
import css from '../../styles/sections/index/contact.module.scss'

import Icon from '../../components/utils/icon.util'

import footercss from '../../styles/structure/footer.module.scss'

import content from '../../content/footer.json'



const Contact = () => {

    useEffect(() => {


        //  Router.reload()

    }, [])

    return (
        <>
         
           <div className={css.section}>

            <h2>Get Started</h2>
            <p>Find a suitable time slot in my calendar, and let&apos;s discuss your project.</p>

            <ul className={css.social}>
                <li><h4>SOCIAL</h4></li>
                <li className={css.socialList}>
                    {
                        content.social.map(({ url, icon }, index) => {
                            return (
                                <a key={index} href={url} rel="noreferrer" target="_blank"><Icon icon={['fab', icon]} /></a>
                            )
                        })
                    }
                </li>
            </ul>



            <div className={css.canvas}>

                    
                   <div 
                       style={{
                       height:"100%",
                       width:'100%',
                       backgroundColor:"transparent",
                      }}
                      >

                    <InlineWidget 
                     id="csb"
                     url="https://calendly.com/csb_2024/cs-bhagwant?hide_gdpr_banner=1"
                     styles={{
                       height: '800px',

                      }}
                     />
                   </div>
                   
                 
                    

                    <div
                        className="powr-form-builder "
                        style={{
                           width:'500px',
                           
                    }}
                        id="813ed9e4_1712147726">
                        .
                    </div>

            </div>

            {/* <span >
                <p>Github</p>

                <svg  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd" />
                </svg>
            </span>
            <span>
                <p>Linked</p>

                <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" id="linkedin">
                    <g fill="none" fill-rule="evenodd">
                        <g>
                            <rect width="72" height="72" fill="#117EB8" rx="4"></rect>
                            <path fill="#FFF" d="M13.139 27.848h9.623V58.81h-9.623V27.848zm4.813-15.391c3.077 0 5.577 2.5 5.577 5.577 0 3.08-2.5 5.581-5.577 5.581a5.58 5.58 0 1 1 0-11.158zm10.846 15.39h9.23v4.231h.128c1.285-2.434 4.424-5 9.105-5 9.744 0 11.544 6.413 11.544 14.75V58.81h-9.617V43.753c0-3.59-.066-8.209-5-8.209-5.007 0-5.776 3.911-5.776 7.95V58.81h-9.615V27.848z"></path>
                        </g>
                    </g>
                </svg>
            </span>
            <span>
                <p>Twitter</p>

                <svg  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M13.8 10.5 20.7 2h-3l-5.3 6.5L7.7 2H1l7.8 11-7.3 9h3l5.7-7 5.1 7H22l-8.2-11.5Zm-2.4 3-1.4-2-5.6-7.9h2.3l4.5 6.3 1.4 2 6 8.5h-2.3l-4.9-7Z" />
                </svg>
            </span>
 */}

        </div>
        
        </>
     

    )
}

export default Contact
