new Vue({
	el : '#root',
	data : {
		skills : []
	},
	mounted() {
		//when our page is finished loading,
		//make an ajax request to our server
		axios.get('skills').then(response => this.skills = response.data)
	}
})