import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./Feedback";

const Testimonial = () => {
  return (
    <section
      id="client"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    >
      {/* {TODO} */}
      <div />
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h1 className={`${styles.heading2}`}>
          What people are <br className="sm:block hidden" /> saying about us
        </h1>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            Anything you need to accept card payment and grow your busiiness
            anywhere on this planet
          </p>
        </div>
      </div>

      <div className="flex flex-wrap sm:justify-start justiofy-center w-full feedback-container relative z-[1]">
        {feedback.map((card) => {
          return <FeedbackCard key={card.id} {...card}/>;
        })}
      </div>
    </section>
  );
}

export default Testimonial
