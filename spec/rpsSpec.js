describe('RockPaperScissors', function(){

beforeEach(function(){

	rules = new Rules;
	rock = new Rock;
	paper = new Paper;

});

	describe('Rules', function(){

		it('Rock Beats Scissors', function () {
			expect(rules.winnerOf(rock, paper)).toBe(paper)
		});

		it('Scissors gets beaten by rock', function () {
			expect(rules.winnerOf(paper, rock)).toBe(paper)
		});

	});

});