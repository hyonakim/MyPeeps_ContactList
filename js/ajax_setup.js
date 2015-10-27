import $ from 'jquery';

const AppKey = 'FQL0LFMHeI37PmdE46pyVwbmL2nGuw5dbNtL29tn';
const APIKey = 'vLiUrimLWsNeI9QV4ZEzhiyW7wj8h9vEdiOJfHDK';

$.ajaxSetup({
	headers: {
		'X-Parse-Application-Id': AppKey,
		'X-Parse-REST-API-Key': APIKey
	}
});
