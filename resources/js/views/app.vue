<template>
    <router-view></router-view>
</template>
<script>
    //import PageHeader from '../components/Header'
    export default {
        name: 'app',
        components: {
            //PageHeader
        }
    }
</script>

<style lang="scss">
// CoreUI Icons Set
@import '~@coreui/icons/css/coreui-icons.min.css';
/* Import Font Awesome Icons Set */
$fa-font-path: '~font-awesome/fonts/';
@import '~font-awesome/scss/font-awesome.scss';
/* Import Simple Line Icons Set */
$simple-line-font-path: '~simple-line-icons/fonts/';
@import '~simple-line-icons/scss/simple-line-icons.scss';
/* Import Flag Icons Set */
@import '~flag-icon-css/css/flag-icon.min.css';
/* Import Bootstrap Vue Styles */
@import '~bootstrap-vue/dist/bootstrap-vue.css';
</style>

<style>
/* Body Css here */
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