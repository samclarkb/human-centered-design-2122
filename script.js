const form = document.getElementById('trainingInput')

form.addEventListener('submit', e => {
	e.preventDefault()
	saveFormInput(input.value.lenght)
})

const saveFormInput = () => {
	let input = document.getElementById('input')

	if (input.value.lenght > 10) {
		document.getElementById('result').textContent =
			' Larissa, je had deze dag beter thuis kunnen blijven ' + input.value
	} else if (input.value.lenght > 20) {
		document.getElementById('result').textContent =
			' Larissa, zo komt die tweede gouden plak er niet hoor' + input.value
	} else {
		document.getElementById('result').textContent =
			' De resultaten zijn nog niet om naar huis te schrijven, maar het is meer dan ik gewend ben van je ' +
			input.value
	}
}
