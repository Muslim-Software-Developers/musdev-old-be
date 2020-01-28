<template>
    <main class="bgImage">
        <img src="../../../assets/img/bg2.png" class="myimg" alt="images" id="bgImgPlai" width="100%">

        <div class="row landingPage">
            <div class="col-lg-6 bg-txt">
                <p id="codingText"> Join our community of halal coding :)</p>
            </div>
            <div class="col-lg-6 form">
                <div class="mediaOne">
                    <h5>Sign up with</h5>
                    <div class="media-new">
                        <a class="icon" href="#">
                            <img src="../../../assets/img/git.png" alt="facebook" width="25px" height="25px">
                        </a>
                        
                        <a class="icon" href="#">
                            <img src="../../../assets/img/link.png" alt="linkedin" width="25px" height="25px">
                        </a>
                        
                        <a class="icon" href="#">
                            <img src="../../../assets/img/twitter.png" alt="twitter" width="25px" height="25px">
                        </a>
                    </div>
                </div>
                <div class="form-group">
                    <label for="" class="signup">
                        Or sign up with your email
                    </label>
                    <input type="text" class="form-control" name="name" id="name" aria-describedby="helpId" placeholder="Name">
                    <input type="email" class="form-control" name="email" id="email" aria-describedby="emailHelpId" placeholder="Email">
                    <input type="password" class="form-control" name="password" id="password" aria-describedby="emailHelpId" placeholder="Password">
                    <a name="Sign Up" id="Sbutton" class="btn btn-primary" href="#" role="button">Sign Up</a>
                    <p id="emailHelpId" class="form-text ">Alread have an account?<a href="#" class="login"> Log in</a></p>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: 'register',
    components: {

    },
    data: function () {
        return {

        }
    },
    methods: {
        
    }
}
</script>

<style lang="css">
.landingPage {
    margin :0px;
    position: absolute;
    top:0px;
    width: 100%;
    color: white;
}
.bg-txt {
    padding :4rem 5%;
    padding-right: 2px;
}
.bgImage {
    margin-bottom: -2px;

}
.form {
    padding :4rem 5%;
    padding-left: 2px;
    
}
#codingText {
    font-family: "adobe-clean", sans-serif;
    font-size: 50px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.37;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
}
input#name.form-control, input#email.form-control, input#password.form-control {
    width: 50%;
    margin-bottom: 20px;
    border: 2px solid #8dc43f;
    border-radius: 25px;
}
.signup {
    margin-bottom: 1rem;
}
#Sbutton {
    width: 25%;
    height: 40px;
    border-radius: 25px;
    box-shadow: 0 5px 6px 0 rgba(0, 0, 0, 0.16);
    background-color: #8dc43f;
    font-family: "adobe-clean", sans-serif;
    font-size: 20px;
    font-weight: bold;
    font-style: normal;
    line-height: 1.36;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
    border-color: #8dc43f;
    margin-bottom: 1rem;
}
p.form-text {
    font-size: 17px;
}
.login {
    color: white;
    text-decoration: underline;
}
.login:hover {
    color: white;
}
.form-group {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.mediaOne {
    height: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 20px;
}
.mediaOne > h5 {
    font-size: 25px;
    margin: 0px;
}
.media-new {
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
#footer {
    margin-top: 0px;
    margin-bottom: 0px;
}

/*media queries*/

@media only screen and (max-width: 570px) {
    #codingText {
        font-size: 30px;
        text-align: center;
    }
    footer {
        margin:50px;
    }
    .landingPage, .myimg {
        height: 37rem;
    }
    .bg-txt {
        padding-top: 2rem;
        padding-bottom: 0px;
        padding-right: 1rem;
    }
    .form {
        padding: 0px;
    }
    #Sbutton {
        width: 28%;
        font-size: 15px;
        padding-top: 10px;
    }
}

@media only screen and (min-width:571px) and (max-width: 767px) {
    #codingText {
        font-size: 35px;
        text-align: center;
    }
    footer {
        margin:50px;
    }
    .landingPage, .myimg {
        height: 35rem;
    }
    .bg-txt {
        padding-top: 2rem;
        padding-bottom: 0px;
        padding-right: 1rem;
    }
    .form {
        padding: 0px;
    }
    #Sbutton {
        width: 28%;
        font-size: 15px;
        padding-top: 10px;
    }
}
@media only screen and (min-width:768px) and (max-width: 991px) {
    #codingText {
        font-size: 45px;
        text-align: center;
    }
    footer {
        margin:50px;
    }
    .landingPage, .myimg {
        height: 40rem;
    }
    .bg-txt {
        padding-top: 2.5rem;
        padding-bottom: 0px;
        padding-right: 1rem;
    }
    .form {
        padding: 0px;
    }
    #Sbutton {
        width: 28%;
        padding-top: 10px;
    }
}
</style>