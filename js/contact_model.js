import Backbone from 'backbone';

let ContactModel = Backbone.Model.extend ({

	urlRoot: 'https://api.parse.com/1/classes/MyPeeps',

	idAttribute: 'objectId'

});

export default ContactModel;