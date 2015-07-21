describe("game", function() {

    var game = null;

    beforeEach(function() {
        game = new Game();
    });

    function rollMany(n, pins) {
        for (var i=0; i<n; i++) {
            game.roll(pins);
        }
    }

    function rollSpare() {
        game.roll(5);
        game.roll(5);
    }

    it("should be zero points on all zeros", function() {
        rollMany(20, 0);
        expect(game.score()).toEqual(0);
    });

    it("should be simple sums points on all ones", function() {
        rollMany(20, 1);
        expect(game.score()).toEqual(20);
    });

    it("should count spare", function() {
        rollSpare();
        game.roll(3);
        rollMany(17, 0);
        expect(game.score()).toEqual(16);
    });

});