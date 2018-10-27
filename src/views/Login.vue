<template>
	<div class="login">
	<h1>This is an LOGIN page, please Logining into your acount</h1>
	<h2>username: {{username}}</h2>
	<h2>password: {{pass}}</h2>
	<div class="limiter">
		<div class="container-login100" >
			<div class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
				<form class="login100-form validate-form">
					<span class="login100-form-title p-b-49">
						Login
					</span>

					<div class="wrap-input100 validate-input m-b-23" data-validate = "Username is reauired">
						<span class="label-input100">Username</span>
						<input class="input100" type="text" name="username" v-model="username" placeholder="Type your username">
						<span class="focus-input100" data-symbol="*"></span>
					</div>

					<div class="wrap-input100 validate-input" data-validate="Password is required">
						<span class="label-input100">Password</span>
						<input 
							class="input100" type="password" name="pass" placeholder="Type your password"
							v-model="pass"
						>
						<span class="focus-input100" data-symbol="*"></span>
					</div>
					
					<div class="text-right p-t-8 p-b-31">
						<a href="#">
							Forgot password?
						</a>
					</div>
					
					<div class="container-login100-form-btn">
						<div class="wrap-login100-form-btn">
							<div class="login100-form-bgbtn"></div>
							<button class="login100-form-btn" 
							@click.prevent="Logining(
								{ username, pass
							})">
							
								Login
							</button>
						</div>
					</div>

					<div class="txt1 text-center p-t-54 p-b-20">
						<span>
							Or Sign Up Using
						</span>
					</div>

					<div class="flex-c-m">
						<a href="#" class="login100-social-item bg1">
							<i class="fa fa-facebook"></i>
						</a>

						<a href="#" class="login100-social-item bg2">
							<i class="fa fa-twitter"></i>
						</a>

						<a href="#" class="login100-social-item bg3">
							<i class="fa fa-google"></i>
						</a>
					</div>

					<div class="flex-col-c p-t-155">
						<span class="txt1 p-b-17">
							Or Sign Up Using
						</span>

						<a href="#" class="txt2">
							Sign Up
						</a>
					</div>
				</form>
			</div>
		</div>
	</div>
  </div>
</template>
<script>
import { mapActions, mapGetters} from "vuex";
export default {
	name: 'login',
	data(){
		return{
			username: null,
			pass: null
		}
	},
	computed:{
		...mapGetters(['logIn']),
		moviesPage() {
			if (this.logIn){
				this.$router.push({name: 'movies'})
				console.log(this.logIn)
			}else{
				alert("Not login yet");
			}
		}
		
	},
	methods:{
		...mapActions([
			'LogIn'
		]),
		Logining(params) {
			this.LogIn(params);
		},
	},
	

		
}
</script>
<style lang="sass">
	.login
		background-image: url('../assets/images/bg-01.jpg')
	h1
		text-align: center
		color: white
	
</style>
