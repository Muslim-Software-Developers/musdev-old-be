<template>
    <div id="app">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="card card-danger">
                        <div class="card-header">Example Component</div>

                        <div class="card-body">
                            I'm an example components.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <v-app>
            <page-header />
            <main>
                <v-container fluid>
                    <router-view></router-view>
                </v-container>
            </main>
        </v-app> -->
    </div>

</template>
<script>
    import PageHeader from '../components/Header'
    export default {
        name: 'app',
        components: {
            PageHeader
        }
    }
</script>

<style>
.container{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;  
    margin-top: 60px;
}

.error {
    color: red;
}
</style>