<template>
    <main class="login">
        <section class="forms">
            <form class="register" @submit.prevent="register">
                <h2>Register</h2>
                <input type="email" placeholder="Username" v-model="register_form.email" />
                <input type="password" placeholder="Password" v-model="register_form.password" />
                <input type="password" placeholder="Confirm Password">
                <input type="submit" value="Register" />
            </form>
            <form action="" class="login" @submit.prevent="login">
                <h2>Login</h2>
                <input type="email" placeholder="Username" v-model="login_form.email" />
                <input type="password" placeholder="Password" v-model="login_form.password" />
                <input type="submit" value="Login" />
            </form>
        </section>
    </main>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';

export default {

    setup() {
        const login_form = ref({});
        const register_form = ref({});
        const store = useStore();

        const login = () => {
            store.dispatch('login', login_form.value);
        }

        const register = () => {
            store.dispatch('register', register_form.value);
        }
        return {
            login_form,
            register_form,
            login,
            register
        }
    }
}
</script>

<style>
.forms {
    display: flex;
    min-height: 100vh;
}

form {
    flex: 1 1 0%;
    padding: 8rem 1rem 1rem;
}

form.register {
    color: #fff;
    background: rgb(245, 66, 101);
    background-image: linear-gradient(
        to bottom right,
        rgb(245, 66, 101) 0%,
        rgb(198, 28, 60) 100%
    );
}
h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
    text-transform: uppercase;
}

input {
    display: block;
    width: 100%;
    appearance: none;
    border: none;
    outline: none;
    background: none;
    max-width: 400px;
    margin: 0 auto;
    font-size: 1.5rem;
    margin-bottom: 2rem;
    padding: 0.5rem 0rem;
}

input:not([type="submit"]) {
    opacity: 0.8;
    transition: 0.4s;
}

input:focus:not([type="submit"]) {
    opacity: 1;
}

input::placeholder {
    color:inherit;
}

form.register input[type="submit"] {
    color: #fff;
    border-bottom: 2px solid #fff;
}

form.login input[type="submit"] {
    color: rgb(245, 66, 101);
    color: #fff;
    font-weight: 700;
    border-radius: 0.5rem;
    cursor: pointer;
    border-bottom: 2px solid #fff;
}


//https://youtu.be/Kc-FbPSdezg min 39
</style>
```
