import styles from "../style"
import Button from "./Button"

const CallToAction = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className="flex-1 flex flex-col">
        <h2 className={`${styles.heading2}`}>Lets try our services now!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Anything yiu need to accept card payment and growyour bussiness anywhere around the world</p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button/>
      </div>
    </section>
  )
}

export default CallToAction