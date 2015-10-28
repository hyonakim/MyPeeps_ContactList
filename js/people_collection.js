import Backbone from 'backbone';
import ContactModel from './contact_model';

let PeopleCollection = Backbone.Collection.extend ({

	url: 'https://api.parse.com/1/classes/MyPeeps',

	model: ContactModel,

	parse: function (data) {
		return data.results;
	}
});

export default PeopleCollection;