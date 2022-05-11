const form = document.getElementById('trainingInput')

form.addEventListener('submit', e => {
	e.preventDefault()
	saveFormInput(input.value.length)
})

const saveFormInput = () => {
	let input = document.getElementById('input')
	let resultaten = document.getElementById('result')
	let feedback = document.getElementById('feedback')

	if (input.value.length > 0 && input.value.length < 75) {
		feedback.textContent = ' Larissa, je had deze dag beter thuis kunnen blijven '
		resultaten.textContent = input.value
	} else if (input.value.length > 75 && input.value.length < 150) {
		feedback.textContent = ' Larissa, zo komt die tweede gouden plak er niet hoor'
		resultaten.textContent = input.value
	} else {
		feedback.textContent =
			' De resultaten zijn nog niet om naar huis te schrijven, maar het is meer dan ik gewend ben van je '
		resultaten.textContent = input.value
	}
	feedback.focus()
}
