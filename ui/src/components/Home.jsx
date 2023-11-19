
import rocket from "../Images/rocket.webp"


function Home(){
 
     

    return(
    <>
    {/* section banner */}
    {/* <style type="text/css">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
body {
    font-family: 'Roboto', sans-serif;
}
.btn {
    padding: 14px 26px;
    font-weight: 700;
    font-size: 13px;
    letter-spacing: 1px;
    text-transform: uppercase;
}
.btn-danger {
    background-color: #e34c43;
    border-color: #e34c43;
}
.banner-image{
    background: linear-gradient(rgba(29, 38, 113, 0.8), rgba(195, 55, 100, 0.8)), url(img/banner-image-three.jpg);
    background-size: cover;
    background-position: center;
}
.banner-phone-image img{
    width:300px;
}
.star-rating a{
color:rgba(255,255,255,0.5);
margin-right:10px;
}
.star-rating a:hover{
color:#fff;
}
.aa{
line-height:26px;    
}
</style>
 
  */}
<div className="banner-image">

  <div className="container pb-5">
    <div className="row py-5 align-items-center">
      <div className="col-lg-6">
        <h5 className="display-4 mb-4 font-weight-bold text-black">A modular UI Kit for Bootstrap</h5>
        <div className="d-flex star-rating mb-5"> <a href=""><i className="lni lni-star-filled"></i></a> <a href=""><i className="lni lni-star-filled"></i></a> <a href=""><i className="lni lni-star-filled"></i></a> <a href=""><i className="lni lni-star"></i></a> <a href=""><i className="lni lni-star"></i></a> </div>
        <p className="h5 aa mb-4 pb-3 text-black-50">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nunc nisi, suscipit id dapibus sit amet, lacinia nec lorem. Aenean eget urna rutrum suscipit.</p>
        <h3 className="text-black mb-5">5.20$</h3>
        <div className="d-flex gap-3">
        <a href="" className="btn btn-lg btn-danger mr-2"><i className="lni lni-apple mr-2"></i> Download for IOS</a>
        <a href="" className="btn btn-lg btn-danger"><i className="lni lni-play-store mr-2"></i> Download for Android</a>
        </div>
      </div>
      <div className="col-lg-6 text-lg-right text-center mt-5 mt-lg-0">
        <div className="banner-phone-image"> <img src={rocket} style={{width:"37em", height:"32em",marginLeft:"10em", }}/> </div>
      </div>
    </div>
  </div>
</div>
 
             </>
    )
}
export default Home