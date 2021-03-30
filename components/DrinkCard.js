app.component("drink-card", {
  props: {
    drink: Object,
  },
  template:
    /*html*/
    `<div class="drinkCard">
      <div class="drinkCardHeader">
        <div><h3>{{drink.name}}</h3></div>
        <div v-if="!drink.cantDelete" @click="deleteDrink">
          <svg class="delete" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
            <path d="M19 24h-14c-1.104 0-2-.896-2-2v-16h18v16c0 1.104-.896 2-2 2zm-7-10.414l3.293-3.293 1.414 1.414-3.293 3.293 3.293 3.293-1.414 1.414-3.293-3.293-3.293 3.293-1.414-1.414 3.293-3.293-3.293-3.293 1.414-1.414 3.293 3.293zm10-8.586h-20v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2zm-8-3h-4v1h4v-1z"/>
          </svg>
        </div>
      </div>
      <ul>
        <li v-for="ingredient in drink.ingredients">
          {{ingredient.oz}} oz of {{ingredient.name}}
        </li>
      </ul>
	  </div>`,
  data() {
    return {};
  },
  methods: {
    deleteDrink() {
      if (!confirm(`Are you sure you want to delete the ${this.drink.name} recipe?`)) return;
      this.$emit("delete-drink");
    },
  },
  computed: {},
});
