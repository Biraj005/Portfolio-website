import './Hero.css'
function Hero() {
  return (
    <div className="wraper">
    <div className='hero-container'>
         <div className='Text-contain'>
            <span className='name'>I'm Biraj Roy</span>
            <h2>Webdeveloper based in India</h2>
            <span className='hero-about'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ex blanditiis necessitatibus porro itaque reiciendis hic sapiente, minima eaque ipsam maiores laborum unde iste molestias animi esse distinctio nostrum tempore.</span>
        </div>
        <div className="Hero-links">
            <button className="connect-with-me">Connect with me</button>
            <button className="my-resume">My resume</button>
        </div>
    </div>
    </div>
  )
}

export default Hero