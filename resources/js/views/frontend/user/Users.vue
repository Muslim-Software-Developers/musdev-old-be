<template>
    <main class="bgImage"> 
        <div class="container-fluid">
            <div  id="main">
                <div class="text">
                <h1 class="h2">Brotherhood of code.</h1>
                </div>
                <div class="images">
                <div id="image">
                    <img src="../../../assets/img/lead1.png" class="myimg img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt="">
                    <a href="#">
                    <div id="profile">
                        <span id="name">Yahaya Bello</span>
                        <span id="job">Front End Dev</span>
                        <span id="username">@yahyadee</span>
                    </div>
                    </a>
                </div>
                <div id="image">
                    <img src="../../../assets/img/lead2.png" class="myimg img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt="">
                    <a href="#">
                        <div id="profile">
                            <span id="name">Yahaya Bello</span>
                            <span id="job">Front End Dev</span>
                            <span id="username">@yahyadee</span>
                        </div>
                    </a>
                </div>
                <div id="image">
                    <img src="../../../assets/img/lead3.png" class="myimg img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt="">
                    <a href="#">
                        <div id="profile">
                            <span id="name">Yahaya Bello</span>
                            <span id="job">Front End Dev</span>
                            <span id="username">@yahyadee</span>
                        </div>
                    </a>
                </div>
                <div id="image">
                    <img src="../../../assets/img/lead4.png" class="myimg img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt="">
                    <a href="#">
                        <div id="profile">
                            <span id="name">Yahaya Bello</span>
                            <span id="job">Front End Dev</span>
                            <span id="username">@yahyadee</span>
                        </div>
                    </a>
                </div>
                <div id="image">
                    <img src="../../../assets/img/lead3.png" class="myimg img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt="">
                    <a href="#">
                        <div id="profile">
                            <span id="name">Yahaya Bello</span>
                            <span id="job">Front End Dev</span>
                            <span id="username">@yahyadee</span>
                        </div>
                    </a>
                </div>
                <div id="image">
                    <img src="../../../assets/img/lead4.png" class="myimg img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt="">
                    <a href="#">
                        <div id="profile">
                            <span id="name">Yahaya Bello</span>
                            <span id="job">Front End Dev</span>
                            <span id="username">@yahyadee</span>
                        </div>
                    </a>
                </div>
                <div id="image">
                    <img src="../../../assets/img/lead2.png" class="myimg img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt="">
                    <a href="#">
                        <div id="profile">
                            <span id="name">Yahaya Bello</span>
                            <span id="job">Front End Dev</span>
                            <span id="username">@yahyadee</span>
                        </div>
                    </a>
                </div>
                <div id="image">
                    <img src="../../../assets/img/lead1.png" class="myimg img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt="">
                    <a href="#">
                        <div id="profile">
                            <span id="name">Yahaya Bello</span>
                            <span id="job">Front End Dev</span>
                            <span id="username">@yahyadee</span>
                        </div>
                    </a>
                </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: 'users',
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
* {
    box-sizing: border-box;
}
body {
    font-family: "adobe-clean", sans-serif;

    margin: 0;
    padding: 0;

    height: 100%;
}
#main {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 3rem 1%;
    padding-bottom: 0px;
}
.text {
    width: 30%;
    padding-left: 2rem!important;}
.h2 {
    font-size: 55px;
    font-weight: 800;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.35;
    letter-spacing: normal;
    text-align: left;
    color: #8dc43f;
}
div.images {
    width: 55%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
}
#image {
    height: 150px;
    margin-left: 10px;
    margin-bottom: 10px;
    transform: scale(1);
	-webkit-transition: .3s ease-in-out;
    transition: .3s ease-in-out;
    overflow: hidden;
}

.myimg {
    width: 150px;
    height: 150px;
}

#profile {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    background: #00800078;
    color: white;
    top: -150px;
    width: 150px;
    height: 150px;
    padding: 0.5rem;
    line-height: 1.3;
    visibility: hidden;
}
#image:hover #profile{
    visibility: visible;

}
#image:hover .myimg{
    transition: all .80s ease-out;
    -webkit-transform: scale(1);
	transform: scale(1.2);
}


span#name {
    font-size: 0.7em;
    font-weight: 900;
}
span#job {
    font-size: 0.7em;
}
span#username {
    font-size: 0.6em;
}

@media only screen and (max-width:550px) { 
    #main {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        text-align: center;
    }
    .h2 {
        width: 60%;
        font-size: 25px;
    }
    #image {
        width: 23vmin;
        height: 23vmin;
    }
    .myimg {
        width: 23vmin;
        height: 23vmin;
    }
    #profile {
        justify-content: flex-end;
        align-items: flex-start;
        text-align: center;
        padding: 5px;
    }
    span#name {
        font-size: .5rem;
        font-weight: 900;
    }
    span#job {
        font-size: .5rem;
    }
    span#username {
        font-size: .4rem;
    }
    
    div.images {
        width: 100%;
        padding-left: 1.5rem!important;
        margin-top: 20px;
    }
    .text {
        width: 100%;
    }
}
@media only screen and (min-width:551px) and (max-width:770px) {    
    #main {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        text-align: center;
    }
    div.images {
        width: 100%;
        padding-left: 1.5rem!important;
        margin-top: 20px;
    }
    .text {
        width: 100%;
    }
    .h2 {
        width: 60%;
        font-size: 35px;
    }

}
@media only screen and (min-width:771px) and (max-width:961px) { 
    #main {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        text-align: center;
    }
    .text {
        width: 100%;
    }
    .h2 {
        width: 50%;
        font-size: 50px;
    }
    #image .myimg #profile{
        width: 15vmin;
        height: 15vmin;
    }
    div.images {
        width: 100%;
        padding-left: 1.5rem!important;
        margin-top: 20px;
    }
}
</style>