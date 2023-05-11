import { card } from '../assets'
import styles, {layout} from '../style'
import Button from './Button'

const CardDeal = () =>  (
    <section id='card' className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>Find a better card deal <br className='sm:block hidden'/> in few eazy steps</h2>
        <p className={`${styles.paragraph} max-w-[480px] mt-5`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus assumenda inventore quas sit vero quos laudantium quis asperiores eos totam? Quia, necessitatibus consectetur. Rerum, dolores! Hellooo phe</p>
        <Button styles='mt-10'/>
      </div>
      <div className={`${layout.sectionImg}`}>
        <img src={card} alt="card" className='w-[100%] h-[100%]'/>
      </div>

    </section>
  )


export default CardDeal