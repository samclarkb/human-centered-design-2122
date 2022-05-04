const form = document.getElementById('trainingInput')

form.addEventListener('submit', e => {
	e.preventDefault()
	saveFormInput(input.value.lenght)
})

const saveFormInput = () => {
	let input = document.getElementById('input')

	if (input.value.lenght > 10) {
		document.getElementById('result').textContent =
			'Notities van training: ' + input.value + ' Larissa, je had beter thuis kunnen blijven'
	} else if (input.value.lenght > 20) {
		document.getElementById('result').textContent =
			'Notities van training: ' +
			input.value +
			' Larissa, zo komt die tweede gouden plak er niet hoor'
	} else {
		document.getElementById('result').textContent =
			'Notities van training: ' + input.value + ' Dit lijkt er meer op'
	}
}
