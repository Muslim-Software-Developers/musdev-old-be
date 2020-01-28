<template>
    <main class="main">
        <div class="row">
            <div class="col-sm-12 col-md-6"><h1 class="header-text">Welcome back</h1></div>
            <div class=" col-sm-12 col-md-6">
                <div class="col-lg-6 form">
                    <div class="mediaOne">
                        <h5>Login with</h5>
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
                    <form class="login-form">
                        <div class="form-headerText">
                            <label for="" class="signup">
                                Or sign up with your email
                            </label>
                            <h3 class="social-text">Log in with</h3>
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control" placeholder="Email">
                            <small class="form-text errorMessage"><p>Sorry, wrong password</p></small>
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" placeholder="Password">
                            <small class="form-text errorMessage"><p>Sorry, wrong password</p></small>
                        </div>
                        <button type="submit" class="btn btn-primary button">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: 'login',
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

</style>