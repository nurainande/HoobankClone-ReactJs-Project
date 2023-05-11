import React from 'react'
import styles,{layout} from '../style'
import { apple,bill,google} from '../assets'

const Billing = () => (
  <section id="product" className={`${layout.sectionReverse}`}>
    <div className={`${layout.sectionImgReverse}`}>
      <img src={bill} alt="bill" className="w-[100%] h-[100%] relative z-[5]" />
    </div>
    <div className={`${layout.sectionInfo}`}>
      <h2 className={`${styles.heading2}`}>
        Easily control your <br className="sm:block hidden" />
        billing invoicinggggggg
      </h2>
      <p className={`${styles.paragraph} max-w-[450px] mt-5`}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur
        molestiae numquam, maxime eos beatae mollitia repellendus? Sed cum ab,
        ex adipisci deserunt sint blanditiis animi cumque ullam a repellat
        laborum.
      </p>
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="apple"  className=' w-[128px] h-[42px] object-contain mr-5 cursor-pointer'/>
        <img src={google} alt="google" className=' w-[128px] h-[42px] object-contain cursor-pointer'/>
      </div>
    </div>
  </section>
);


export default Billing