import {  faArrowLeft, faArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { Header } from "../../components/header/Header"
import { Navbar } from "../../components/navbar/Navbar"
import {MailList} from "../../components/mailList/MailList"
import {Footer} from "../../components/footer/Footer"
import "./hotel.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"


export const Hotel = () => {


  
  const [slideNumber,setSlideNumber]= useState(0)
  const [open,setOpen]= useState(false)
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/409725381.jpg?k=fef00fac5adf6f9cb26806360d4703d3cd7f9c2e9ae956f6049cc50e8eb59133&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/148875530.jpg?k=159a77006e854831e36a98123180f3f972c03c2aa0386b005c6c4b2c29183175&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/436316427.jpg?k=2c6695bf5ac97516effcb1aa732c31dcc1b61ae41e62e568af0cb75a709d9db9&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/404007608.jpg?k=edb5577019efe46e6ef77f42b79d7c46029c59a24578a63b2569dfe01a0018f3&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/400426987.jpg?k=554e0374ad4191dffa8912ac83a52eb396c15ca191a9dec1d13be814e4d5b00a&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/409725156.jpg?k=b8c33a382faa3004394971442274a115e38c02af3117332d12affe843eb95ea0&o=&hp=1"
    },
  ];

 const handleOpen = (i) =>{
  setSlideNumber(i)
  setOpen(true)
 }
  const handleMove = (direction)=>{
   let newSlideNumber;
   if (direction === "l") {
    newSlideNumber = slideNumber === 0 ? 5 : slideNumber -1;
   }else{
    newSlideNumber = slideNumber === 5 ? 0 : slideNumber +1;
   }
   setSlideNumber(newSlideNumber)
  };
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && <div className="slider">
        <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
          <FontAwesomeIcon icon={faArrowLeft} className="arrow" onClick={()=>handleMove("l")}/>
          <div className="sliderWraper">
            <img src={photos[slideNumber].src} alt="" className="sliderImg" />
          </div>
          <FontAwesomeIcon icon={faArrowRight} className="arrow" onClick={()=>handleMove("r")}/>
        </div>}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now</button>
          <h1 className="hotelTitle">La Maison Hotel Doha </h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Qatar st 759 Doha</span>
          </div>
          <span className="hotelDistance">
            Al Jazeera Street, Doha, Qatar
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over ‎QAR 1,127‏ and get a free private taxi from the airport
          </span>
          <div className="hotelImages">
            {photos.map((photo,i) => (
              <div className="hotelImgWrapper">
                <img 
                  onClick={()=>handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of Qatar</h1>
              <p className="hotelDEsc">
                Located in Doha, 1.8 miles from Diwan Emiri Royal Palace, La Maison Hotel Doha provides accommodations with an outdoor swimming pool, free private parking, a fitness center and a terrace. This 4-star hotel offers a restaurant. The property has a 24-hour front desk, airport transportation, room service and free WiFi throughout the property.
                The hotel will provide guests with air-conditioned rooms offering a desk, an electric tea pot, a safety deposit box, a flat-screen TV and a private bathroom with a bidet.
                All guest rooms feature a closet.
                Guests at La Maison Hotel Doha can enjoy a buffet or an American breakfast.
                Al Arabi Sports Club is 2.5 miles from the accommodation, while Jassim Bin Hamad Stadium at Al Sadd Club is 2.6 miles away.
                Couples in particular like the location * they rated it 8.7 for a two-person trip.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for 9-nights stay!</h1>
              <span>
                Located in the real heart of the Doha , this property
                has an excellant location score of 9.8!
              </span>
              <h2>
                <b>$835</b>(9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  )
}
