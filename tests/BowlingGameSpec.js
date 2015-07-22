describe("Game", function() {

    var game = null;

    beforeEach(function() {
        game = new Game();
    });

    function rollMany(times, pins) {
        for (var i = 0; i < times; i++) {
            game.roll(pins);
        }
    }

    function rollSpare() {
        game.roll(5);
        game.roll(5);
    }

    it("should sum all zeros", function() {
        rollMany(20, 0);
        expect(game.score()).toEqual(0);
    });

    it("should sum all ones", function() {
        rollMany(20, 1);
        expect(game.score()).toEqual(20);
    });

    it("should count spares", function() {
        rollSpare();
        game.roll(3);
        rollMany(17, 0);
        expect(game.score()).toEqual(16);
    })

});