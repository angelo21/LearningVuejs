<template>
    <div class="container">
        <form v-if="!form.submitted">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->
                    <h1>Sign Up</h1>
                    <hr>
                    <div class="form-group">
                        <label for="name">Full Name</label>
                        <input 
                        type="text" 
                        id="name" 
                        class="form-control"
                        v-model="form.name">
                    </div>

                    <div class="form-group">
                        <label for="email">Email</label>
                        <input 
                        type="email" 
                        id="email" 
                        class="form-control"
                        v-model="form.email">
                    </div>

                    <div class="form-group">
                        <label for="password">Password</label>
                        <input 
                        type="password" 
                        id="password" 
                        class="form-control"
                        v-model="form.password">
                    </div>

                    <p>Store Data?</p>
                    <label for="yes">
                        <input 
                        name="data"
                        type="radio" 
                        id="yes" 
                        value="Yes"
                        v-model="form.data"> Yes 
                    </label>

                    <label for="no">
                        <input 
                        name="data"
                        type="radio" 
                        id="no" 
                        value="No"
                        v-model="form.data"> No 
                    </label>
                </div>
            </div>
            <button 
                type="button" 
                class="btn btn-primary"
                @click.prevent="form.submitted = true">Submit
            </button>
        </form>
        <hr>
        <div class="row" v-if="form.submitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ form.name }}</p>
                        <p>Mail: {{ form.email }}</p>
                        <p>Password: {{ form.password }}</p>
                        <p>Store in Database?: {{ form.data }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return  {
                form: {
                    name: "",
                    email: "",
                    password: "",
                    data: "Yes",
                    submitted: false,
                }
            }
        }
    }
</script>

<style>
</style>


