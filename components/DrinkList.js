app.component("drink-list", {
  props: {
    drinks: Array,
  },
  template:
    /*html*/
    `<div id="drinkList">
			<h1>Drinks</h1>
			<label for="spirit">Search By Spirit: </label>
			<select name="spirit" v-model="spirit">
				<option value="all">All</option>			
				<option value="vodka">Vodka</option>
				<option value="gin">Gin</option>
				<option value="rum">Rum</option>
				<option value="whiskey">Whiskey</option>
				<option value="tequila">Tequila</option>
				<option value="other">Other</option>
					</select>
			<div id="drinkCards">
				<template v-for="(drink, index) in drinks">
				<template v-if="spirit == 'all' || drink.spirit == spirit">
				<drink-card
					:drink="drink" 
					@delete-drink=deleteDrink(index)>
				</drink-card>
				</template>
				</template>
			</div>
		</div>`,
  data() {
    return { spirit: "all" };
  },
  methods: {
    deleteDrink(index) {
      this.$emit("delete-drink", index);
    },
  },
  computed: {},
});
