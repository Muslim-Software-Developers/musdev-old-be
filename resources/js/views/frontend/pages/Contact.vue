<template>
    <main class="main">
        <div class="row p-5">
            <div class="col-12 col-md-6 mb-5">
                <h1 class="contact--heading">Salam, world.</h1>
            </div>

            <div class="col-12 col-md-6">

                <form action="#" method="POST">

                    <div class="form-group">
                        <input type="text" class="form-control contact--input" id="name" name="name" required> 
                        <label for="name" class="contact--label">Name</label>
                    </div>

                    <div class="form-group">
                        <input type="email" class="form-control contact--input" id="email" name="email" required>
                        <label for="email" class="contact--label">Email</label>
                    </div>

                    <div class="form-group">
                        <input type="text" class="form-control contact--input" id="subject" name="subject" required>
                        <label for="subject" class="contact--label">Subject</label>
                    </div>

                    <div class="form-group">
                        <label for="subject" class="textarea--label">Message</label>
                        <textarea name="message" class="form-control contact--textarea" id="" cols="30" rows="5" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-success btn-lg contact--submit">Send</button>
                </form>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: 'contact',
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