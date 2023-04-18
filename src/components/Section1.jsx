import Location from "./Location"
import style from '../styles/firstSection.module.css'
const Section1 = ({locationUniverse}) => {
  return (
    <section className={`${style.firstSection} h-[30vh] flex content-center justify-center w-full flex-wrap z-10`}> 
        <img className='w-[43rem] z-20  absolute  mx-auto' src="/imgs/Ellipse.png" alt="" />
        <div className={`${style.portal} h-64 w-full max-w-sm absolute mx-auto`}>
            <img className="w-[90%] mx-auto relative top-7" src="/imgs/logo.png" alt="" />
        </div>
    
        <Location locationUniverse={locationUniverse}/>
    </section>
  )
}
export default Section1