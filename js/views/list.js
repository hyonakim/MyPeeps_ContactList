
function processData (data) {
	return data.map(function(item) {
		return `
			<div class='person-list-item' data-person-id='${item.objectId}'>
			<img src='${item.ContactPic}' width ='60px' height='60px' class='listpic'><span class='fullName'>${item.FirstName} ${item.LastName}</span>
			<hr class='hrline'>
			</div>
		`;

	}).join('');
}

function peopleTemplate (data) {
	return `
	
		<div>${processData(data)}</div>
	`;
	}

export default peopleTemplate;