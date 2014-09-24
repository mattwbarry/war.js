deck = [
	{
		'suit': 'diamonds',
		'card': '2',
		'value': 0
	},
	{
		'suit': 'diamonds',
		'card': '3',
		'value': 1
	},
	{
		'suit': 'diamonds',
		'card': '4',
		'value': 2
	},
	{
		'suit': 'diamonds',
		'card': '5',
		'value': 3
	},
	{
		'suit': 'diamonds',
		'card': '6',
		'value': 4
	},
	{
		'suit': 'diamonds',
		'card': '7',
		'value': 5
	},
	{
		'suit': 'diamonds',
		'card': '8',
		'value': 6
	},
	{
		'suit': 'diamonds',
		'card': '9',
		'value': 7
	},
	{
		'suit': 'diamonds',
		'card': '10',
		'value': 8
	},
	{
		'suit': 'diamonds',
		'card': 'jack',
		'value': 9
	},
	{
		'suit': 'diamonds',
		'card': 'queen',
		'value': 10
	},
	{
		'suit': 'diamonds',
		'card': 'king',
		'value': 11
	},
	{
		'suit': 'diamonds',
		'card': 'ace',
		'value': 12
	},
	{
		'suit': 'hearts',
		'card': '2',
		'value': 0
	},
	{
		'suit': 'hearts',
		'card': '3',
		'value': 1
	},
	{
		'suit': 'hearts',
		'card': '4',
		'value': 2
	},
	{
		'suit': 'hearts',
		'card': '5',
		'value': 3
	},
	{
		'suit': 'hearts',
		'card': '6',
		'value': 4
	},
	{
		'suit': 'hearts',
		'card': '7',
		'value': 5
	},
	{
		'suit': 'hearts',
		'card': '8',
		'value': 6
	},
	{
		'suit': 'hearts',
		'card': '9',
		'value': 7
	},
	{
		'suit': 'hearts',
		'card': '10',
		'value': 8
	},
	{
		'suit': 'hearts',
		'card': 'jack',
		'value': 9
	},
	{
		'suit': 'hearts',
		'card': 'queen',
		'value': 10
	},
	{
		'suit': 'hearts',
		'card': 'king',
		'value': 11
	},
	{
		'suit': 'hearts',
		'card': 'ace',
		'value': 12
	},
	{
		'suit': 'spades',
		'card': '2',
		'value': 0
	},
	{
		'suit': 'spades',
		'card': '3',
		'value': 1
	},
	{
		'suit': 'spades',
		'card': '4',
		'value': 2
	},
	{
		'suit': 'spades',
		'card': '5',
		'value': 3
	},
	{
		'suit': 'spades',
		'card': '6',
		'value': 4
	},
	{
		'suit': 'spades',
		'card': '7',
		'value': 5
	},
	{
		'suit': 'spades',
		'card': '8',
		'value': 6
	},
	{
		'suit': 'spades',
		'card': '9',
		'value': 7
	},
	{
		'suit': 'spades',
		'card': '10',
		'value': 8
	},
	{
		'suit': 'spades',
		'card': 'jack',
		'value': 9
	},
	{
		'suit': 'spades',
		'card': 'queen',
		'value': 10
	},
	{
		'suit': 'spades',
		'card': 'king',
		'value': 11
	},
	{
		'suit': 'spades',
		'card': 'ace',
		'value': 12
	},
	{
		'suit': 'clubs',
		'card': '2',
		'value': 0
	},
	{
		'suit': 'clubs',
		'card': '3',
		'value': 1
	},
	{
		'suit': 'clubs',
		'card': '4',
		'value': 2
	},
	{
		'suit': 'clubs',
		'card': '5',
		'value': 3
	},
	{
		'suit': 'clubs',
		'card': '6',
		'value': 4
	},
	{
		'suit': 'clubs',
		'card': '7',
		'value': 5
	},
	{
		'suit': 'clubs',
		'card': '8',
		'value': 6
	},
	{
		'suit': 'clubs',
		'card': '9',
		'value': 7
	},
	{
		'suit': 'clubs',
		'card': '10',
		'value': 8
	},
	{
		'suit': 'clubs',
		'card': 'jack',
		'value': 9
	},
	{
		'suit': 'clubs',
		'card': 'queen',
		'value': 10
	},
	{
		'suit': 'clubs',
		'card': 'king',
		'value': 11
	},
	{
		'suit': 'clubs',
		'card': 'ace',
		'value': 12
	},
]

_tom = {'name': 'Tom', 'cards': []}
_claire = {'name': 'Claire', 'cards': []}
round = 0
output = ''

window.onload = function() {

	function playWar() {
		reset()
		dealCards()
		while (_tom.cards.length > 0 && _claire.cards.length > 0) {
			playRound()
			if (round > 20000) {
				alert('You have entered an endless war!')
				break
			}
		}
		displayWinner()
	}

	function reset() {
		_tom = {'name': 'Tom', 'cards': []}
		_claire = {'name': 'Claire', 'cards': []}
		round = 0
		output = ''
		document.getElementById('war-output').innerHTML = ''
	}

	function dealCards() {
		for (var i = 0; i < 10; i++) {
			shuffle(deck)
		}
		_tom = {'name': 'Tom', 'cards': []}
		_claire = {'name': 'Claire', 'cards': []}
		for (var i = 0; i < deck.length / 2; i++) {
			_tom.cards.push(deck[i])
			_claire.cards.push(deck[i+1])
		}
	}

	function shuffle(array) {
		var currentIndex = array.length, temporaryValue, randomIndex ;

		// While there remain elements to shuffle...
		while (0 !== currentIndex) {

			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			// And swap it with the current element.
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}

		return array;
	}

	function playRound() {
		round += 1
		//console.log(round)

		tCard = _tom.cards.shift()
		cCard = _claire.cards.shift()
		tWar = []
		cWar = []
		war = false
		output += '<b>Round ' + round + '</b><br />Tom played ' + returnAnA(tCard.card) + ' and Claire played ' + returnAnA(cCard.card) + '<br/>'
		//console.log('Round ' + round + ' - Tom played ' + returnAnA(tCard.card) + ' and Claire played ' + returnAnA(cCard.card))

		// war
		if (tCard.value == cCard.value) {
			war = true
			output += 'WAR!<br />'
			//console.log('WAR!')
			while (tCard.value == cCard.value) {
				// if players have enough cards, play as normal
				if (_tom.cards.length > 3 && _claire.cards.length > 3) {
					// add current cards to the pile
					tWar.push(tCard)
					cWar.push(cCard)
					// put down 3 cards
					for (var i = 0; i < 3; i++) {
						tWar.push(_tom.cards.shift())
						cWar.push(_claire.cards.shift())
					}
					// put down one more to check values
					tCard = _tom.cards.shift()
					cCard = _claire.cards.shift()
					//console.log('tWar:')
					//console.log(tWar)
					//console.log('cWar:')
					//console.log(cWar)
				}
				// otherwise have one player play as normal and use last card as card for other player
				else {
					break
				}
			}
		}

		// tom wins
		if (tCard.value > cCard.value) {
			winRound(_tom)
		}
		// claire wins
		else {
			winRound(_claire)
		}
		output += '<br />'
	}

	function winRound(winner) {
		winner.cards.push(tCard)
		winner.cards.push(cCard)
		if (war) {
			for (var i = 0; i < tWar.length; i++) {
				winner.cards.push(tWar[i])
				winner.cards.push(cWar[i])
				output += winner.name + ' lost ' + returnAnA(tWar[i].card) + '<br />'
				//console.log('Claire lost ' + returnAnA(tWar[i].card))
			}
		}
		output += winner.name + ' wins this round!<br />'
	}

	function displayWinner() {
		if (_tom.cards.length == 0) {
			output += 'CLAIRE WINS THE WAR!!!!!'
			//console.log('CLAIRE WINS THE WAR!!!!!')
			alert('Claire wins after ' + round + ' rounds!')
		}
		else if (_claire.cards.length == 0) {
			output += 'TOM WINS THE WAR!!!!!'
			//console.log('TOM WINS THE WAR!!!!!')
			alert('Tom wins after ' + round + ' rounds!')
		}
		else {
			output = 'ENDLESS WAR!'
		}
		document.getElementById('war-output').innerHTML = output
	}

	function returnAnA(card) {
		if (card == '8' || card == 'ace') {
			return 'an ' + card
		}
		else {
			return 'a ' + card
		}
	}

	document.getElementById('btn-play-war').addEventListener('click', function() {
		document.getElementById('war-output').innerHTML = 'playing war...'
		// put this in a settimeout so that the function returns and the innerHTML renders before entering the play loop
		setTimeout(function() {
			playWar()
		}, 10)
	})
}