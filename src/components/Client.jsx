import { clients } from "../constants";
import styles from "../style";

const Client = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {
          clients.map(client=>{
            return <div key={client.id} className={`${styles.flexCenter} flex-1 sm:min-w-[192px] min-w-[120px]`}>
              <img src={client.logo} alt="" className="sm:w-[192px] w-[100px] object-contain"  style={{filter:"grayscale(100%)"}} />
            </div>
          })
        }
      </div>
    </section>
  );
}

export default Client