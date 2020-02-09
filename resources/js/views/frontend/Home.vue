<template>
      <!-- main body section here -->
        <main class="bgImage main">
            <img src="../../assets/img/bg2.png" class="" alt="images" id="bgImgPlain">
            <div class="container-fluid">
                <div class="row landing-section">
                    <div class="col-lg-7 bg-text">
                        <p id="codingText"> Coding for the deen </p>
                        <p> A growing multinational community of muslim developer and tech enthusiast all overthe world.</p>
                        <a href="member.html" type="button" class="btn btn-light" id="butn">Become A Member</a>
                    </div>
                    <div class="col-lg-5" id="imgIllustration-div">
                        <img src="../../assets/img/Musdev_Illustration1.png"  id="imgCode" alt="images" >
                    </div>
                </div>
                
                <div class="row indexpage-content">
                    <div class="col-lg-4 indexpage-icons">
                        <a href="#">
                            <img src="../../assets/img/mentorship1.png" alt="images"> 
                        </a>
                        <p class="three-icons"> <a href="#"> Mentorship </a> </p>
                        <p class="mentor three-icons-text">
                            <a href="#">
                                The community connects members with professional and industry leaders who can provide career guidance.
                            </a>
                        </p>
                    </div>
                    <div class="col-lg-4 indexpage-icons otherImg"> 
                        <a href="#">
                            <img src="../../assets/img/meetups1.png" alt="images">
                        </a>
                        <p class="three-icons"> <a href="#"> Meetups </a> </p>
                        <p class="meetup three-icons-text">
                            <a href="#">
                                Connect with fellow muslim developers, professionals and industry leaders at the annual meetup.
                            </a>
                        </p>
                        
                    </div>
                    <div class="col-lg-4 indexpage-icons otherImg">
                        <a href="#">
                            <img src="../../assets/img/opportunities1.png" alt="images">
                        </a>
                        <p class="three-icons"> <a href="#"> Opportunities </a> </p>
                        <p class="opp three-icons-text"> 
                            <a href="#">
                                connected with gigs and jobs opportunities help from the community.
                            </a> 
                        </p>
                    </div>
                </div> <br><br>
                <div class="row">
                        <!-- col-sm-6 offset-sm-3 col-lg-6 offset-lg-3 -->
                    <div class="col-6 offset-3">
                        <hr id="horizontal">
                    </div>
                </div>
                <div class="row notification_section mt-5" id="meetup-news">
                    <div class="col-lg-12 mt-5">
                        <p id="sponsors">News Letters</p>
                    </div>
                    <div class="col-sm-8 col-md-12" id="notification_text">
                        <p> Stay notified about upcoming meetups </p>
                    </div>
                    <div class="col-sm-12 col-lg-8 offset-lg-2" id="email_input_field">
                        <form>
                            <div class="input-group">
                                <input type="email" class="form-control" placeholder="musdev@example.com" id="user_email">
                                <div class="input-group-append btn-append">
                                    <input type="submit" class="input-group-text btn" value="GO">
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
</template>

<script>
import { Callout } from '@coreui/vue'

export default {
  name: 'home',
  components: {
    Callout
  },
  data: function () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style>

.bgImage{
    min-width: 100%;
    position: relative;
    top: 0px;
    z-index: 1;
}

#bgImgPlain{
    position: absolute;
    top: 0px;
    width: 100%;
    height: 580px;
    z-index: 2;
}

.landing-section{
    position: relative;
    top: 0px;
    z-index: 3;
}

#imgIllustration-div{
    margin-top: 55px;
}

#imgCode{
    width: 100%;
    height: auto;
}

.bg-text{
    padding-top: 150px;
    padding-left: 40px;
    color: #ffffff;
    font-weight: 600;
    font-size: 25px;
}

#codingText{
    font-size: 55px;
}

#butn{
    border-radius: 20px;
    width: 250px;
    font-size: 20px;
    font-weight: bold;
    color: #3C7B5C;
}

.indexpage-content{
  margin-top: 100px;
    text-align: center;
}

.otherImg{
    padding-top: 30px;
    /* border: 1px solid red; */
}

.otherImg p{
    padding-top: 10px;
}

.three-icons a{
    font-size: 25px;
    font-weight: bold;
    color: #3C7B5C;
}

p.three-icons-text a{
    color: #3C7B5C;
}

.three-icons a:hover, .three-icons-text a:hover{
    text-decoration: none;
    
}

#horizontal{
    border: 2px solid #3C7B5C;
}

#sponsors{
    font-size: 50px;
    font-weight: bold;
    text-align: center;
    color: #3c7b5c;
}

.sponsors-logos{
    width: 70%;
    padding-bottom: 25px;
}

/* media queries */
@media only screen and (max-width:575px) {
    .landing-section{
        display: flex;
        flex-direction: column-reverse;
        text-align: center;
    }
   
    .bg-text{
        font-size: 15px;
        margin-top: -200px;
        padding-right: 50px;
    }

    #codingText{
        font-size: 25px;  
    }

    #imgIllustration-div{
        /* border: 1px solid red; */
        top: -50px
    }
    #imgCode{
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
    }

    .indexpage-content{
        padding-top: 200px;
        font-size: 14px;
    }
    
    .indexpage-icons{
        width: 70%;
        margin: auto;
    }
    
    #sponsors{
        font-size: 30px;
    }

    .sponsors-logos{
        width: 30%;
    }
}

@media only screen and (min-width:576px) and (max-width:767px) {
    .landing-section{
        display: flex;
        flex-direction: column-reverse;
        text-align: center;
    }
   
    .bg-text{
        font-size: 15px;
        margin-top: -200px;
        padding-right: 50px;
    }

    #codingText{
        font-size: 25px;  
    }

    #imgIllustration-div{
        /* border: 1px solid red; */
        top: -50px
    }
    #imgCode{
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
    }

    .indexpage-content{
        padding-top: 90px;
        font-size: 17px;
    }
    
    .indexpage-icons{
        width: 70%;
        margin: auto;
    }
    
    
    #sponsors{
        font-size: 30px;
    }

    .sponsors-logos{
        width: 50%;
    }
}

@media only screen and (min-width:768px) and (max-width:991px) {
    .landing-section{
        display: flex;
        flex-direction: column-reverse;
        text-align: center;
    }
   
    .bg-text{
        font-size: 20px;
        margin-top: -230px;
        width: 70%;
        margin-left: auto;
        margin-right: auto;
    }

    #codingText{
        font-size: 50px;  
    }

    #imgIllustration-div{
        /* border: 1px solid red; */
        top: -50px
    }
    #imgCode{
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 40%;
    }

    .indexpage-content{
        padding-top: 50px;
        font-size: 17px;
    }
    
    .indexpage-icons{
        width: 70%;
        margin: auto;
    }

    #sponsors{
        font-size: 30px;
    }
    .sponsors-logos{
        width: 50%;
    }
}

@media only screen and (min-width: 992px){
    .indexpage-content{
        /* padding-top: 100px; */
        font-size: 17px;
    }
}
</style>
