import React from 'react'
import styles from "./style"
import {NavBar,Billing,CardDeal,Business,CallToAction,Client,Stats,Footer,Testimonial,Heroo} from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden BODY">
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter} border-b-[1px] head`}>
      <div className={`${styles.boxWidth}`}>
        <NavBar />
      </div>
    </div>

    <div className={`${styles.paddingX} ${styles.flexStart} sm:mt-10 mt-20`}>
      <div className={`${styles.boxWidth}`}>
        <Heroo />
      </div>
    </div>

    <div className={`${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonial />
        <Client />
        <CallToAction />
        <Footer />
      </div>
    </div>
  </div>
); 

export default App