app.component('drink-card', {
	props: {
		drink: Object
	},
	template:
	/*html*/
	`<div>
		<h3>{{drink.drinkName}}</h3>
		<h4 v-if="!drink.cantDelete" @click="deleteDrink">Delete</h4>
		<ul>
			<li v-for="ingredient in drink.ingredients">
				{{ingredient.oz}} oz of {{ingredient.name}}
			</li>
		</ul>
	</div>`,
	data(){
		return {};
	},
	methods: {
		deleteDrink(){
			this.$emit('delete-drink');
		}
	},
	computed: {},
});