import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-left"><span>Biraj</span>
            <br />
            I am a frontend developer from, INDIA with  experience in React js ,Node js, Expres js,
            MongoDb .</div> 
        </div>
        <hr />
        <div className="footer-bottom">
            <div className="bottom-left">© 2025 Biraj Roy. All rights reserved.</div>
            <div className="bottom-right">
                <span>Term of Services</span>
                <span>Privacy Policy</span>
                <span>Connect with me</span>
            </div>
        </div>
    </div>
  )
}

export default Footer