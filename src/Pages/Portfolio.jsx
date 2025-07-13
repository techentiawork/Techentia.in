import PortfolioCard from '../components/cards/Portfoliocard'

function Portfolio({portfolioRef}) {
  return (
    <div ref={portfolioRef} className="pt-[4.5rem] md:pt-[7rem] w-[85%] mx-auto">
      <div className='flex flex-col gap-10'>
        <h3 className='font-bold text-xl'>_______ P O R T F O L I O</h3>
        <h1 className='text-3xl sm:text-6xl font-bold'>Here are are some of our samples provided</h1>
        <div className='gap-x-8 gap-y-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center'>
         <a href="https://send-me-hugs.vercel.app">
  <PortfolioCard src="https://res.cloudinary.com/dmn1hq9nq/video/upload/v1751800330/IMG_2747_ilwduv.mov" title="Send Me Hugs" desc="Fundraiser" />
</a>

<a href="https://nimbi2.vercel.app"  >
  <PortfolioCard src="https://res.cloudinary.com/dmn1hq9nq/video/upload/v1751799130/nimbi_p81ev8.mp4" title="Nimbi" desc="Crypto Project" />
</a>

<a href="https://runes-bridge-v5.vercel.app">
  <PortfolioCard src="https://res.cloudinary.com/dknid1fma/video/upload/v1752427491/runes_uxjtmp.mp4" title="Runes-Bridge" desc="Design That Moves You" />
</a>

<a href="" >
  <PortfolioCard src="https://res.cloudinary.com/dmn1hq9nq/video/upload/v1751798865/video4_ocjdmw.mp4" title="AI_Bank" desc="Payment Invoicing Service" />
</a>

<a href="https://coin.unibit.app">
  <PortfolioCard src="https://res.cloudinary.com/dknid1fma/video/upload/v1752430941/UNIBIT_cghi19.mp4" title="Unibit" desc="Gaming Platform" />
</a>

<a href="https://nika.finance">
  <PortfolioCard src="https://res.cloudinary.com/dknid1fma/video/upload/v1752427515/nika_cz9mzw.mp4" title="Nika" desc="Blogging Platform" />
</a>
 </div>
      </div>
    </div>
  )
}

export default Portfolio
