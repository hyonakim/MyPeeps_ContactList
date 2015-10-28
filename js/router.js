import $ from 'jquery';
import Backbone from 'backbone';
import PeopleCollection from './people_collection';
import peopleTemplate from './views/list';
import personTemplate	from './views/personTemplate';



let Router = Backbone.Router.extend ({

	routes: {
		"" : "showPeople",
		"person:id" : "showSpecificPerson"
	},

	initialize: function (appElement) {
		this.$el = appElement;

		this.people = new PeopleCollection();

		let router = this;

		this.$el.on('click', '.person-list-item', function(event) {
			let $div = $(event.currentTarget);
			let personId = $div.data('person-id');
			router.navigate(`people/${personId}`);
			router.showSpecificPerson(personId);
		});
	},

	showSpinner: function () {
		this.$el.html(
			'<i class="fa fa-circle-o-notch fa-spin"></i>'
		);
	},

	showBackBtn: function () {
		this.$el.html(
			<i class="fa fa-arrow-left"></i>
			);
	},

	showPeople: function () {
		console.log('show people');

		this.showSpinner();

		let router = this;

		this.people.fetch().then(function() {
			router.$el.html( peopleTemplate(router.people.toJSON()) );
		});

	},

	showSpecificPerson: function (personId) {
	console.log('show each person');
	let person = this.people.get(personId);

	if(person) {
		this.$el.html( personTemplate(person.toJSON()) );
	} else {
		let router = this;
		person = this.people.add({objectId: personId});
		this.showSpinner();
		person.fetch().then(function () {
			router.$el.html( personTemplate(person.toJSON()) );
		});
	}

},

	start: function () {
		Backbone.history.start();
	}

});

export default Router;