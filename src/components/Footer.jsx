import styles from "../style";
import { logo } from "../assets";
import { footerLinks,socialMedia } from "../constants";

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col bod`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full bod`}>
        <div className=" flex flex-col justify-start mr-10 bod">
          <img src={logo} alt="" className="w-[266px] h-[72px] object-contain"/>
          <p className={`${styles.paragraph} mt-4 w-[310px] upperCase`}>A new way to make the payment easy, reliable and  secure.</p>
          {/* <p className={`${styles.paragraph} mt-4 w-[310px] upperCase`}>A new way to make the payment easy, reliable and  secure.</p> */}
        </div>
        <div className="flex w-full flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map(footerLink=>(
            <div key={footerLink.key} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
              <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">{footerLink.title}</h4>
              <ul>
                {footerLink.links.map((Link,index)=>(
                  <li key={Link.name} className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer">{Link.name}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      
      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">2022 Hoobank. All Right Reserved.</p>
        
        <div className="flex flex-row md:mt-10 mt-6">
          {socialMedia.map((social,index)=>(
            <img key={social.id} src={social.icon} alt="" className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length-1? 'mr-6':'mr-0'} `} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Footer