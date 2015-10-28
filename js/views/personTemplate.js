
function personTemplate (data) {
	
	return `
	<a href='index.html'><i class="fa fa-arrow-left fa-3x" width='40px' height='40px'></i></a>
		<div class='contactInfo'>
			<img src='${data.ContactPic}' class='photo' width='200px' height='200px'>
			<div class='information'>
			<div class='fullname'>${data.FirstName} ${data.LastName}</div>
			<div class='phoneNum'>${data.PhoneNumber}</div>
			</div>
			<i class="fa fa-phone-square fa-4x"></i>
		</div>
		`;
}

export default personTemplate;