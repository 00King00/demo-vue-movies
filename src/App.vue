<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/Login">Login</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
	text-align: center;
    color: #2c3e50;
    .login{
        text-align: left
    }
}
#nav{
    padding: 30px;
	a{
        font-weight: bold;
        color: #2c3e50;
        margin-right: 10px;
		&.router-link-exact-active{
            color: #42b983;
        }
    }
}

</style>
