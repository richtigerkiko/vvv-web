<template>
    <div class="auth">
        <form v-on:submit.prevent>
            <div>
                <label for="emailInput">
                    E-Mail:
                </label>
                <input autocomplete="username" type="email" v-model="email">
            </div>
            <div>
                <label for="passwordInput">
                    Password:
                </label>
                <input autocomplete="new-password" type="password" name="passwordInput" v-model="password">
                <input autocomplete="new-password" type="password" name="passwordRepeatInput" v-model="passwordRepeat">
            </div>
            <div>
                <button style="float:left;">
                    Cancel
                </button>
                <button style="float:right;" @click="signup">
                    Register
                </button>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { signUpEmailPassword } from '@/functions/auth.ts'

export default defineComponent({
    data(){
        return {
            email: '',
            password: '',
            passwordRepeat: ''
        }
    },
    methods: {
        signup () {
            console.log("sign up yo")
            signUpEmailPassword(this.email, this.password).then(x => console.log(x))
        }
    }
})
</script>