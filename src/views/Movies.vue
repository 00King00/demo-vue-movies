<template>
	<div class="movies">
		<div class="container-flex">
			<div class="movies-list">
				<ul>
					<li v-for="(item, index) in  displayedPosts" :key="index">
						<button type="button" class="close" aria-label="Close" @click="deleteMovie(index)">
							<span aria-hidden="true">&times;</span>
						</button>
						<h3>{{item.title}}</h3>
						<span>{{item.description}}</span>
					</li>
				</ul>
			</div>
			<div class="movies-add">
				<input type="text" v-model="title" placeholder="add movie name">
				<input type="text" v-model="description" placeholder="add movie description">
				<button class="btn btn-success" type="button" name="button" @click="addMovie">Add to list</button>
				<button class="btn btn-primary" type="button" name="button" @click="addMovie">Save</button>
				<br>
				<br>
				<h2 @click="test">Find your movie</h2>
				<input type="text" v-model="search" placeholder="find your movie">
				<div class="container-flex">
					<button type="button" class="btn btn-sm btn-outline-secondary fa fa-angle-double-left" v-if="page != 1" @click="page--"></button>
					<button type="button" class="btn btn-sm btn-outline-secondary" v-for="(pageNumber, index) in pages" :key="index" @click="page = pageNumber"> {{pageNumber}} </button>
					<button type="button" @click="page++" v-if="page < pages.length" class="btn btn-sm btn-outline-secondary fa fa-angle-double-right"></button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
	name: 'movies',
	data(){
		return {
			title: "",
			description: "",
			search: "",
			page: 1,
			perPage: 4,
			pages: []
		}
	},
	computed:{
		...mapGetters(["currentUser"]),
		filteredList(){
			return this.currentUser.movies.filter( post => {
				return post.title.toLowerCase().includes(this.search.toLowerCase());
			})
		},
		displayedPosts () {
			return this.paginate(this.filteredList);
		}
	},
	methods:{
		test(){
			console.log(this.pages)
		},
		addMovie(){
			if(this.title.length > 0 ){
				this.$store.commit("addMovie", {"title": this.title, "description": this.description});
				this.title="";
				this.description="";
				console.log(this.currentUser.movies);
			}
		},
		deleteMovie(index){
			this.$store.commit("deleteMovie", index);
		},
		setPages () {
			this.pages.length = 0;
			let numberOfPages = Math.ceil(this.filteredList.length / this.perPage);
			for (let index = 1; index <= numberOfPages; index++) {
			this.pages.push(index);
			}
		},
		paginate (posts) {
			let page = this.page;
			let perPage = this.perPage;
			let from = (page * perPage) - perPage;
			let to = (page * perPage);
			return  posts.slice(from, to);
		}
	},
	created(){
		this.setPages();
	},
	watch: {
		displayedPosts(){
			this.setPages();
		}
	}

}
</script>
<style lang="sass" >
	button.btn
		width: 100px
		margin-right: 10px

	.container-flex
		display: flex
	.movies
		&-list
			flex-basis: 50%
			min-width: 50%
			min-height: 50%
			background-image: url('../assets/images/bg-01.jpg')
			background-repeat: no-repeat
		&-add
			flex-basis: 50%
			flex-wrap: nowrap
			padding: 10px
			input
				display: block
				height: 50px
				border: 2px solid grey
				margin: 20px 0
				width: 100%
				padding: 0 20px
				max-width: 100%
				&:focus
					outline: 2px solid green

		ul
			text-align: left
			color: white
			display: inline-block
			padding: 50px
			line-height: 2em
			list-style: circle
			float: left
			li
				border: 2px solid white
				margin: 5px
				padding: 0 15px
				&:hover
					color: red
					cursor: pointer
					border: 2px solid  blue

</style>
