<template>
        <!-- header section starts here -->
        <nav class=" row navbar  navbar-expand-md navbar-light bg-light">
            <a class="col-2  col-lg-2 navbar-brand pl-4" href="" v-on:click.prevent="navigate('home')">
                <img src="../assets/img/header_logo.png" alt="">
            </a>
            <button class="navbar-toggler nav-btn" type="button" data-toggle="collapse" data-target="#menu-items">
                <span class="navbar-toggler-icon"></span>
            </button>  

            <div class="col-10 col-lg-9 pr-1 collapse navbar-collapse" id="menu-items">
                <ul class="navbar-nav" >
                    <li class="nav-item">
                        <a class="nav-link list-item" href="" v-on:click.prevent="navigate('about')"> About Us </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link list-item" href="" v-on:click.prevent="navigate('members')"> The Team </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link list-item" href="" v-on:click.prevent="navigate('signup')"> Become A Member </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link list-item" href="" v-on:click.prevent="navigate('contact')"> Contact </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link list-item" href="" v-on:click.prevent="navigate('login')"> Login </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link btn btn-danger" href="" role="button" id="support-btn" v-on:click.prevent="navigate('donate')"> Support Us </a>
                    </li>
                </ul> 
            </div> 
        </nav>
            
        <!-- header section ends here -->
</template>
<script>
//import { Header as AppHeader, SidebarToggler, AsideToggler } from '@coreui/vue'

export default {
  name: 'DefaultHeaderFe',
  components: {
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
/* custom css for header file */
#support-btn{
    border-radius: 20px;
    width: 130px;
    /* padding: 5px 30px; */
    color: white;
}

.navbar-light .navbar-nav .nav-item {
  width: fit-content;
}

.navbar-light .navbar-nav .nav-link{
    color: rgb(8, 8, 8);
    font-weight: 400;
}

.navbar-light .navbar-nav .list-item:hover{
    background-color: #3C7B5C;
    color: white;
}
/* media queries for screen  sizes */
@media only screen and (max-width: 768px) {
    .navbar-light .navbar-nav .list-item:hover{
        width: 20%;
        padding: 10px;
    }
    #support-btn{
        margin-top: 10px;
    }
}

@media only screen and (min-width: 768px) and (max-width:890px)  {
    ul.navbar-nav li{
        padding: 3px;
    }
}

@media only screen and (min-width: 891px) and (max-width: 950px)  {
    ul.navbar-nav li{
        padding: 10px;
    }
}

@media only screen and (min-width: 951px) and (max-width: 1140px)   {
    ul.navbar-nav li{
        padding: 13px;
    }
}

@media only screen and (min-width:1141px)   {
    ul.navbar-nav li{
        padding: 5px;
        margin-left: 40px;
    }
}

/* header css ends here */
</style>
