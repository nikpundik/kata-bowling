function Game() {

	var rolls = [];

	this.roll = roll;
	this.score = score;

	function roll(spins) {
		rolls.length;
		rolls.push(spins);
	}

	function score() {
		var points = 0;
		var frameIndex = 0;
		for (var frame = 0; frame < 10; frame++) {
			if (isSpare(frameIndex)) {
				points += 10 + rolls[frameIndex + 2];
			} else {
				points += rolls[frameIndex] + rolls[frameIndex + 1];
			}
			frameIndex += 2;
		};
		return points;
	}

	function isSpare(frameIndex) {
		return rolls[frameIndex] + rolls[frameIndex + 1] == 10;
	}

}