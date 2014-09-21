var deck = [
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

var _tom = []
var _claire = []
var round = 0

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

function reset() {
	_tom = []
	_claire = []
	round = 0
}

function playWar() {
	for (var i = 0; i < 10; i++) {
		shuffle(deck)
	}
	dealCards()
	while (_tom.length > 0 && _claire.length > 0) {
		playLoop()
	}
}

function dealCards() {
	for (var i = 0; i < deck.length / 2; i++) {
		_tom.push(deck[i])
		_claire.push(deck[i+1])
	}
}

function playLoop() {
	round += 1

	tCard = _tom.shift()
	cCard = _claire.shift()
	tWar = []
	cWar = []
	war = false
	console.log('Round ' + round + ' - Tom played a ' + tCard.card + ' and Claire played a ' + cCard.card)

	// war
	if (tCard.value == cCard.value) {
		war = true
		console.log('WAR!')
		while (tCard.value == cCard.value) {
			// if players have enough cards, play as normal
			if (_tom.length > 3 && _claire.length > 3) {
				// add current cards to the pile
				tWar.push(tCard)
				cWar.push(cCard)
				// put down 3 cards
				for (var i = 0; i < 3; i++) {
					tWar.push(_tom.shift())
					cWar.push(_claire.shift())
				}
				// put down one more to check values
				tCard = _tom.shift()
				cCard = _claire.shift()
				console.log('tWar:')
				console.log(tWar)
				console.log('cWar:')
				console.log(cWar)
			}
			// otherwise have one player play as normal and use last card as card for other player
		}
	}

	// tom wins
	if (tCard.value > cCard.value) {
		_tom.push(tCard)
		_tom.push(cCard)
		if (war) {
			for (var i = 0; i < tWar.length; i++) {
				_tom.push(tWar[i])
				_tom.push(cWar[i])
				console.log('push ' + i)
			}
		}
		console.log('Tom wins this round!')
	}
	// claire wins
	else {
		_claire.push(tCard)
		_claire.push(cCard)
		if (war) {
			for (var i = 0; i < tWar.length; i++) {
				_claire.push(tWar[i])
				_claire.push(cWar[i])
			}
		}
		console.log('Claire wins this round!')
	}
}
