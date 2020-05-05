import { checkForName } from './nameChecker' 

function handleSubmit(event) {
	event.preventDefault();

	// check what text was put into the form field
	let url = document.getElementById('url').value
	//Client.checkForName(formText);
	if (!checkForName(url)){
		console.log('not valid url');
		return;
	}

console.log("::: Form Submitted :::")
	fetch('//localhost:8082/analysis', {
		method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
		body: JSON.stringify({url})
})
	.then(res => res.json())
	.then(function (res) {
		document.getElementById('article').innerHTML = res.text;
        document.getElementById('polarity').innerHTML = res.polarity;
        document.getElementById('polarity_confidence').innerHTML = res.polarity_confidence;
        document.getElementById('subjectivity').innerHTML = res.subjectivity;
    document.getElementById('subjectivity_confidence').innerHTML = res.subjectivity_confidence;

		//console.log(res);
		//alert(dataText);
	})
}

export { handleSubmit }
