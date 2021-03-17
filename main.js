const app = Vue.createApp({
    data() {
        return {
            drinks: [],
        }
    },
	created() {
		let drinksJSON = localStorage.getItem("drinks");
		if(drinksJSON){
			this.drinks = JSON.parse(drinksJSON);
		} else {
			this.drinks = [...drinks];
		}		
	},
	methods: {
		addDrink(drink){
			this.drinks.push(drink);
			localStorage.setItem("drinks", JSON.stringify(this.drinks));
		}
	},
})