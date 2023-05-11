import styles from "../style";
import { discount,robot } from '../assets';
import GetStarted from './getStarted';

const Heroo = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} `}>
      {/* ====Left===== */}
      <div className={`LEFT flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row item-center py-[16px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>

        <div className="flex flex-row justify-between item-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation</span>
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className=" font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px]w-full">
          Payment Method
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of designers uses a unique system to identify the credit
          cards most likely to fit your purpose of usage and need.We examin
          annual persentage rate and annual fee
        </p>
      </div>
       {/*====Right=====  */}
      <div className="RIGHT">
        <img src={robot} alt="billing" className="w-[100%] h-[100%] z-[5] overflow-hidden" />

        {/* <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient buttom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 buttom-20 blue__gradient" /> */}
      </div>
      <div className={` ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
}

export default Heroo