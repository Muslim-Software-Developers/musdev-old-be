<template>
      <footer class="container-fluid" id="footer">
            <div class="row">
                <div class="col-sm-2 col-md-4 col-lg-3" id="img-foot">
                    <a href="index.html"> <img src="../assets/img/footer_logo1.png" alt="" id="footer-img"> </a>
                </div>
                <div class="col-sm-7 col-md-5 col-lg-6 touch">
                    <div class="row">
                        <div class="col-12" id="in-touch"> Stay in touch</div>
                        <div class="col-12 pt-4 icons">
                            <a href="telegram.musdev.org" title="Connect to telegram"> <i class="fa fa-telegram"></i>  </a>
                            <a href=" slack.musdev.org" title="Join us on slack"> <i class="fa fa-slack"></i>   </a>
                            <a href="https://www.facebook.com/groups/607846749339376/" title="Connect with us on Facebook"> <i class="fa fa-facebook-square"></i> </a>
                        </div>
                        <div class="col-12 pt-4" id="copyright"> &copy; 2019 Musdev Developers Community, Africa </div>
                    </div>
                </div>
                
                <div class="col-sm-3 col-md-3  col-lg-3 links foot">
                    <ul class="footer-list">
                        <li> <a href="" v-on:click.prevent="navigate('about')">      About Us </a> </li>
                        <li> <a href="" v-on:click.prevent="navigate('members')">      The Team </a> </li>
                        <li> <a href="" v-on:click.prevent="navigate('signup')">    Become A Member   </a> </li>   
                        <li> <a href="" v-on:click.prevent="navigate('contact')">   Contact Us  </a> </li>   
                        <li> <a href="" v-on:click.prevent="navigate('login')">   Login </a> </li>
                        <li> <a href="" v-on:click.prevent="navigate('donate')">     Support Us </a> </li>
                    </ul>
                </div>
            </div>
      </footer>
</template>
<script>
import { Footer as TheFooter } from '@coreui/vue'
export default {
  name: 'DefaultFooterFe',
  components: {
    TheFooter
  },
  methods: {
      navigate (thePage) {
          this.$router.push({
              name: thePage
          })
      }
  }
}
</script>

<style>
/* footer css starts */
#footer{
    background-color: #3C7B5C;
    color: white;
    text-align: center;
    padding: 50px;
    margin-top: 50px;
}

div.icons a {
    color: white;
    font-size: 25px;
    padding: 5px;
}
div#in-touch{
    font-size: 1.7em;
    font-weight: bold;
}

div#copyright{
    font-size: 1em;
    font-weight: bold
}

.footer-list li{
    list-style: none;
    font-size: 20px;
    
    margin-bottom: 15px;
    /* margin-bottom: -20px */
}

ul.footer-list a{
    color: white;
}

ul.footer-list a:hover{
    background-color: white;
    color: #3C7B5C;
    padding: 10px;
    text-decoration: none;
}

#img-foot{
    max-width: 100%;
    height: auto;
}
/*footer content media queries for screen  sizes */
@media only screen and (max-width:575px){
    div.links{
        display: none;
    }
}

@media only screen and (min-width:576px) and (max-width:767px) {
    ul.footer-list {
        display: flex;
        /* border: 1px solid red; */
        margin: 25px 0px;
        width: 500px;
    }

    ul.footer-list li{
        padding-left: 15px;
    } 

    ul.footer-list a{
        text-decoration: underline;
    }
}
/* meetups.html styling here */
.carousel-inner{
    height: 100%;
}
.carousel-inner img{
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: 50% 50%;
}

.notification_section{
    color: #3E6752;
    width: 80%;
    margin: auto;
    text-align: center;
}

#notification_text{
    font-weight: bold;
    font-size: 25px;
}

.btn-append input{
    background: #2E5A44;
    border: 1px solid #2E5A44;
    color: white;
}

/* media queries */
@media only screen and (min-width:311px) and (max-width:350px){
    .notification_section{
        width: 100%;
        margin: auto;
    }
}

@media only screen and (min-width:507px) and (max-width:564px){
    .notification_section{
        width: 70%;
        margin: auto;
    }
}

@media only screen and (min-width:565px) and (max-width:767px){
    div#notification_text{
        width: 60%;
        margin: auto;
    }
}

.contact--heading {
    color: #8ec441;
    font-weight: 900;
}

.contact--submit {
    background: #8ec441;
    border: none;
    border-radius: 15px;
    color: #fff;
    width: 30%;
}

.form-group {
    position: relative;
    margin-bottom: 1.5rem;
}

.contact--label {
    color: #8d8d8d;
    position: absolute;
    top: 0;
    padding: 7px 0 0 0px;
    transition: all 200ms;
    opacity: 0.5;
}
 
.form-control:focus + .contact--label,
.form-control:valid + .contact--label {
    font-size: 75%;
    transform: translate3d(0, -100%, 0);
    opacity: 1;
}

.contact--input {
      border-radius: 0;
      border-top: 0;
      border-left: 0;
      border-right: 0;
      border-bottom: 1px solid #8ec441;
}

.contact--input:focus {
      box-shadow: none;
      border-color: #8ec441;
}

.contact--textarea {
    border-radius: 0;
    border-color: #8ec441;
}

.contact--textarea:focus {
    box-shadow: none;
    border-color: #8ec441;
}

.textarea--label {
    color: #8d8d8d;
}
</style>