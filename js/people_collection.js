import Backbone from 'backbone';

let PeopleCollection = Backbone.Collection.extend ({

	url: 'https://api.parse.com/1/classes/MyPeeps',

	parse: function (data) {
		return data.results;
	}
});

