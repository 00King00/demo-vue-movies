import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'

Vue.use(Vuex)
export default new Vuex.Store({
state: {
	logUrl: "https://my-json-server.typicode.com/00King00/demo-vue-movies/user",
	currentUser: null,
	logIn: false

},
mutations: {
	CheckIn(state, currentUser){
		state.currentUser = currentUser;
		state.logIn = true;
	},
	addMovie(state, newMovie){
		state.currentUser.movies.push(newMovie)
	},
	deleteMovie(state, currentItem){
		state.currentUser.movies.splice(currentItem,1)

	}
},
getters:{
	logIn: (state) => state.logIn,
	currentUser: state => state.currentUser
},
actions: {
	LogIn(context, userData){
		axios.get(this.state.logUrl)
			.then((response) => {
				console.log(response.data);
				let data = response.data;
				let id;
				data.map( user => user.username === userData.username && user.pass === userData.pass ? id = user.id : null);
				data = data[id - 1];
				if(id){
					context.commit('CheckIn', data);
					router.push({name: 'movies'})
				} else {alert("Please check your password or login");}

		})
	}

}
});
