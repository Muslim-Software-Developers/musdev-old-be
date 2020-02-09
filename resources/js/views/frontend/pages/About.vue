<template>
    <main class="bgImage">
            <div class="container-fluid">
                
                <div class="row aboutpage-content">
                    <div class="about-section  col-12">
                        <p class="abt-header text-center"> A place for muslim programmers </p>  
                    </div>
                    <div class="abt-cntnt col-8 offset-2">
                        <p class="text-justify">
                            Muslim Developers Community is an international community of developers and programmers from the Islamic faith
                            founded in YYYY to serve as a haven of
                            togetherness and belonging for muslims to network, connect, collaborate and find opportunities amongst their
                            brethren. The community is current at N+ Members.
                        </p>
                    </div>   
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <img src="../../../assets/img/meetup.png" class="meetup-img" alt="image">
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12 col-sm-10 mt-5">
                        <p id="sponsors">Stay notified about upcoming meetups</p>
                    </div>
                    <div class="input-group col-lg-4 col-md-4 col-sm-3 mr-auto ml-auto mb-3">
                        <input style="border-color: #3c7b5c; text-decoration-color: #3c7b5c;" type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2">
                        <div class="input-group-append">
                            <button style="background-color: #3c7b5c;" class="btn btn-outline-secondary" type="button" id="button-addon2">Ok</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
</template>

<script>
export default {
    name: 'about',
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
.aboutpage-content {
    align-content: center;
    /* margin: 20px; */
    padding-top: 55px;
    /* padding-left: 30px;
    padding-right: 30px; */
    /* width: 100%; */
    margin: 20px;
    padding-top: 55px;
    font-size: 20px;
}

/* .aboutpage-content>.about-section {
    padding-left: 60px;
    padding-bottom: 50px;
} */

.aboutpage-content>.about-section>.abt-header {
    padding-bottom: 15px;
    /* text-align: left; */
    justify-content: flex-start;
    font-family:  sans-serif, serif, 'Times New Roman', Georgia, Times;
    font-weight: 700;
    font-size: 45px;
    color: #8bc34a;
}

.aboutpage-content>.about-section>.abt-cntnt {
    /* text-align: left; */
    justify-content: flex-start;
    font-family:  sans-serif, serif, 'Times New Roman', Georgia, Times;
    font-weight: normal;
    font-size: 15px;
    color: #616161;
}

div>.meetup-img {
    max-width: 100%;
    height: auto;
    /* margin: auto; */
}

.aboutpage-content>div>.meetup-img {
    width: 100%;
}

#abtnotice {
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    color: #3c7b5c;
}
</style>