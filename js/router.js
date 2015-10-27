import Backbone from 'backbone';

import PeopleCollection from './people_collection';



let Router = Backbone.Router.extend ({

	routes: {
		'' : 'home',
		'list' : 'showList'
	},

	initialize: function (appElement) {
		this.$el = appElement;
	}

})