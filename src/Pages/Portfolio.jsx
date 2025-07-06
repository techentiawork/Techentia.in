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
  <PortfolioCard src="https://res.cloudinary.com/dmn1hq9nq/video/upload/v1751799130/nimbi_p81ev8.mp4" title="Nimbi" desc="Crypto project" />
</a>

<a href="">
  <PortfolioCard src="https://res.cloudinary.com/dmn1hq9nq/video/upload/v1751799140/paper_portfolio_b7em3j.mp4" title="Paper" desc="Portfolio website" />
</a>

<a href="" >
  <PortfolioCard src="https://res.cloudinary.com/dmn1hq9nq/video/upload/v1751798865/video4_ocjdmw.mp4" title="AI_Bank" desc="Payment Invoicing Service" />
</a>

<a href="">
  <PortfolioCard src="https://res.cloudinary.com/dmn1hq9nq/video/upload/v1751798825/brainwave_h4lhnk.mp4" title="Brainwave" desc="AI powered website" />
</a>

<a href="">
  <PortfolioCard src="https://res.cloudinary.com/dmn1hq9nq/video/upload/v1751799161/Taskmate_n0fjwv.mp4" title="Taskmate" desc="Task Management Tool" />
</a>
 </div>
      </div>
    </div>
  )
}

export default Portfolio
