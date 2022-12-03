<template>
	<form @submit.prevent="handleSubmit">
		<input type="email" required placeholder="E-mail" v-model="email">
		<input type="password" required placeholder="Password" v-model="password">
		<div class="error">{{ error }}</div>
		<button>Login / Giriş</button>
	</form>
</template>
<script>
import { ref } from 'vue';
import useLogin from '@/composables/useLogin'

export default {
	setup(props, context) {
		const email = ref('');
		const password = ref('');
		const { error, login } = useLogin(); 

		const handleSubmit = async () => {
			await login (email.value, password.value)
			if(!error.value) {
				// console.log('Login Success');
				context.emit("login")
			}
		}

		return { email, password, handleSubmit, error }
	}
}
</script>
