app.component('drink-form', {
	template:
	/*html*/
	`<form>
		<h3>Add Drink</h3>
		<label for="drinkName">Drink Name:</label>
		<input name="drinkName" v-model="drinkName" />

		<br />

		<label for="spirit">Spirit: </label>
		<select name="spirit" v-model="spirit">
			<option value="other">Other</option>
			<option value="vodka">Vodka</option>
			<option value="gin">Gin</option>
			<option value="rum">Rum</option>
			<option value="whiskey">Whiskey</option>
			<option value="tequila">Tequila</option>
      	</select>

		<br />

		<div v-for="(ingredient, index) in ingredients">
			<label>Oz:</label>
			<input v-model="ingredient.oz"  type="number" min="0" max="5" step="0.25" />
			<label>Ingedient:</label>
			<input v-model="ingredient.name" />
			<button @click="deleteIngredient(index, $event)">Delete Ingredient</button>
		</div>

		<br />

		<button @click="addIngredient">Add Ingredient</button>

		<br />
		<button @click="addDrink">Add Drink</button>
	</form>`,
	data(){
		return {
			drinkName:'',
			spirit:'',
			ingredients:[{oz:'', name:''}],
		};
	},
	methods: {
		addDrink(event) {
			event.preventDefault();
			let incomplete = this.drinkName === '' || this.spirit==='';
			for (const ingredient of this.ingredients) {
				if(incomplete || ingredient.oz === '' || ingredient.name === ''){
					alert('incomplete. Please fill out every field.')
					return;
				}
			}

			let drink = {
				drinkName: this.drinkName,
				spirit: this.spirit,
				ingredients: this.ingredients,
			}

			this.$emit('drink-submitted', drink);

			this.drinkName = '';
			this.ingredients = [{oz:'', name:''}];
			this.spirit='';
		},
		addIngredient(event){
			event.preventDefault();
			this.ingredients.push({oz:'', name:''});
		},
		deleteIngredient(index, event){
			event.preventDefault();
			this.ingredients.splice(index, 1);
		},
	},
});