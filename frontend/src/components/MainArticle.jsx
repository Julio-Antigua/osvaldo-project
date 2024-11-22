import imageMobile from '../assets/images/Deep-web.png'
import imageDesktop from '../assets/images/Deep-web.png'
import { Link } from "react-router-dom";

export const MainArticle = () => {
  return (
    <section className='mb-12 md:mb-0'>
      <picture>
        <source media='(max-width: 640px)' srcSet={imageMobile} />
        <source media='(min-width: 641px)' srcSet={imageDesktop} />
        <img src={imageMobile} alt="image" />
      </picture>
      <div className='sm:flex'>
        <div className='flex-1 py-6'>
          <h2 className='text-[40px] leading-none font-bold sm:text-[48px] animate-fadeInLeft'>Need access to what others fear to search for?</h2>
        </div>
        <div className='flex-1  pt-9 px-4'>
          <p className='mb-10 text-[13px] sm:text-[15px] '>Everything you're looking for, just one click away. Guaranteed access to the most exclusive: identities, accounts, tools... only for those who dare. Leave no traces. Do it fast.</p>
          <Link
                to="/services/page/app"
              >
                <button className='bg-SoftRed w-[185px] h-[48px] uppercase text-OffWhite hover:bg-VeryDarkBlue animate-scaleInOut'>Chat here</button>
              </Link>
          
        </div>
      </div>
    </section>
  )
}
