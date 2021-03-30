const app = Vue.createApp({
    data() {
        return {
            drinks: []
        }
    },
	created() {
		let drinksJSON = localStorage.getItem("drinks");
		let localDrinks =  JSON.parse(drinksJSON) || [];
		this.drinks = [...localDrinks, ...drinks];
	},
	methods: {
		addDrink(drink){
			this.drinks.push(drink);
			this.saveDrinks();
		},
		deleteDrink(index){
			this.drinks.splice(index, 1);
			this.saveDrinks();
		},
		saveDrinks(){
			let drinksJSON = JSON.stringify(this.drinks.filter(drink=>!drink.cantDelete));
			localStorage.setItem("drinks", drinksJSON);
		}
	},
});
