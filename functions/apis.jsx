export let quotesapi = async (url) => {
	try {
		let response = await fetch(url);
		let data = await response.json();
		return data.map((item) => item.content.rendered); // final array, requires destructuring
	} catch (err) { //hardcoded to increase reliability
		let json = [
			{
				q: "Anger begins with folly, and ends with repentance. ",
				a: "Beverly Sills",
				c: "51",
				h: "<blockquote>&ldquo;Anger begins with folly, and ends with repentance. &rdquo; &mdash; <footer>Beverly Sills</footer></blockquote>",
			},
			{
				q: "Nothing good ever comes of violence.",
				a: "Martin Luther",
				c: "36",
				h: "<blockquote>&ldquo;Nothing good ever comes of violence.&rdquo; &mdash; <footer>Martin Luther</footer></blockquote>",
			},
			{
				q: "Being In The Present Means Tuning Out Distractions And Paying Attention To What Is Important, Now.",
				a: "Spencer Johnson",
				c: "98",
				h: "<blockquote>&ldquo;Being In The Present Means Tuning Out Distractions And Paying Attention To What Is Important, Now.&rdquo; &mdash; <footer>Spencer Johnson</footer></blockquote>",
			},
			{
				q: "One must be deeply aware of the impermanence of the world.",
				a: "Dogen",
				c: "58",
				h: "<blockquote>&ldquo;One must be deeply aware of the impermanence of the world.&rdquo; &mdash; <footer>Dogen</footer></blockquote>",
			},
			{
				q: "We all give up great expectations along the way.",
				a: "Carlos Ruiz Zafon",
				c: "48",
				h: "<blockquote>&ldquo;We all give up great expectations along the way.&rdquo; &mdash; <footer>Carlos Ruiz Zafon</footer></blockquote>",
			},
			{
				q: "Change will not come if we wait for some other person, or if we wait for some other time.",
				a: "Barack Obama",
				c: "89",
				h: "<blockquote>&ldquo;Change will not come if we wait for some other person, or if we wait for some other time.&rdquo; &mdash; <footer>Barack Obama</footer></blockquote>",
			},
			{
				q: "Positive thinking can be contagious. Being surrounded by winners helps you develop into a winner.",
				a: "Arnold Schwarzenegger",
				c: "97",
				h: "<blockquote>&ldquo;Positive thinking can be contagious. Being surrounded by winners helps you develop into a winner.&rdquo; &mdash; <footer>Arnold Schwarzenegger</footer></blockquote>",
			},
			{
				q: "Don't let your learning lead to knowledge. Let your learning lead to action.",
				a: "Jim Rohn",
				c: "76",
				h: "<blockquote>&ldquo;Don't let your learning lead to knowledge. Let your learning lead to action.&rdquo; &mdash; <footer>Jim Rohn</footer></blockquote>",
			},
			{
				q: "Courage is not having the strength to go on; it is going on when you don't have the strength.",
				a: "Theodore Roosevelt",
				c: "93",
				h: "<blockquote>&ldquo;Courage is not having the strength to go on; it is going on when you don't have the strength.&rdquo; &mdash; <footer>Theodore Roosevelt</footer></blockquote>",
			},
			{
				q: "It's better to stand by someone's side than by yourself.",
				a: "Jack London",
				c: "56",
				h: "<blockquote>&ldquo;It's better to stand by someone's side than by yourself.&rdquo; &mdash; <footer>Jack London</footer></blockquote>",
			},
			{
				q: "It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.",
				a: "Albus Dumbledore",
				c: "105",
				h: "<blockquote>&ldquo;It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.&rdquo; &mdash; <footer>Albus Dumbledore</footer></blockquote>",
			},
			{
				q: "Every great change is preceded by chaos.",
				a: "Deepak Chopra",
				c: "40",
				h: "<blockquote>&ldquo;Every great change is preceded by chaos.&rdquo; &mdash; <footer>Deepak Chopra</footer></blockquote>",
			},
			{
				q: "The greatest deception men suffer is from their own opinions.",
				a: "Leonardo da Vinci",
				c: "61",
				h: "<blockquote>&ldquo;The greatest deception men suffer is from their own opinions.&rdquo; &mdash; <footer>Leonardo da Vinci</footer></blockquote>",
			},
			{
				q: "Death smiles at us all. All we can do is smile back.",
				a: "Marcus Aurelius",
				c: "52",
				h: "<blockquote>&ldquo;Death smiles at us all. All we can do is smile back.&rdquo; &mdash; <footer>Marcus Aurelius</footer></blockquote>",
			},
			{
				q: "A clear conscience is the sure sign of a bad memory.",
				a: "Mark Twain",
				c: "52",
				h: "<blockquote>&ldquo;A clear conscience is the sure sign of a bad memory.&rdquo; &mdash; <footer>Mark Twain</footer></blockquote>",
			},
			{
				q: "The difference between treason and patriotism is only a matter of dates.",
				a: "Alexandre Dumas",
				c: "72",
				h: "<blockquote>&ldquo;The difference between treason and patriotism is only a matter of dates.&rdquo; &mdash; <footer>Alexandre Dumas</footer></blockquote>",
			},
			{
				q: "Listen to the secret sound, the real sound, which is inside you.",
				a: "Kabir",
				c: "64",
				h: "<blockquote>&ldquo;Listen to the secret sound, the real sound, which is inside you.&rdquo; &mdash; <footer>Kabir</footer></blockquote>",
			},
			{
				q: "We are willing to believe anything other than the truth.",
				a: "Carlos Ruiz Zafon",
				c: "56",
				h: "<blockquote>&ldquo;We are willing to believe anything other than the truth.&rdquo; &mdash; <footer>Carlos Ruiz Zafon</footer></blockquote>",
			},
			{
				q: "Every day may not be good, but there's something good in every day.",
				a: "Unknown",
				c: "67",
				h: "<blockquote>&ldquo;Every day may not be good, but there's something good in every day.&rdquo; &mdash; <footer>Unknown</footer></blockquote>",
			},
			{
				q: "No one ever said life was fair. Just Eventful.",
				a: "Carol Burnett",
				c: "46",
				h: "<blockquote>&ldquo;No one ever said life was fair. Just Eventful.&rdquo; &mdash; <footer>Carol Burnett</footer></blockquote>",
			},
			{
				q: "I am thankful to all who said no to me. It is because of them that I'm doing it myself.",
				a: "Albert Einstein",
				c: "87",
				h: "<blockquote>&ldquo;I am thankful to all who said no to me. It is because of them that I'm doing it myself.&rdquo; &mdash; <footer>Albert Einstein</footer></blockquote>",
			},
			{
				q: "The older you get the stronger the wind gets - and it's always in your face.",
				a: "Pablo Picasso",
				c: "76",
				h: "<blockquote>&ldquo;The older you get the stronger the wind gets - and it's always in your face.&rdquo; &mdash; <footer>Pablo Picasso</footer></blockquote>",
			},
			{
				q: "Not everything that weighs you down is yours to carry.",
				a: "Unknown",
				c: "54",
				h: "<blockquote>&ldquo;Not everything that weighs you down is yours to carry.&rdquo; &mdash; <footer>Unknown</footer></blockquote>",
			},
			{
				q: "Let not your mind run on what you lack as much as on what you have already.",
				a: "Marcus Aurelius",
				c: "75",
				h: "<blockquote>&ldquo;Let not your mind run on what you lack as much as on what you have already.&rdquo; &mdash; <footer>Marcus Aurelius</footer></blockquote>",
			},
			{
				q: "Patience is a bitter plant, but its fruit is sweet.",
				a: "Chinese Proverb",
				c: "51",
				h: "<blockquote>&ldquo;Patience is a bitter plant, but its fruit is sweet.&rdquo; &mdash; <footer>Chinese Proverb</footer></blockquote>",
			},
			{
				q: "All religions, arts and sciences are branches of the same tree. ",
				a: "Albert Einstein",
				c: "64",
				h: "<blockquote>&ldquo;All religions, arts and sciences are branches of the same tree. &rdquo; &mdash; <footer>Albert Einstein</footer></blockquote>",
			},
			{
				q: "Our truest life is when we are in dreams awake.",
				a: "Henry David Thoreau",
				c: "47",
				h: "<blockquote>&ldquo;Our truest life is when we are in dreams awake.&rdquo; &mdash; <footer>Henry David Thoreau</footer></blockquote>",
			},
			{
				q: "No problem can be solved from the same level of consciousness that created it.",
				a: "Albert Einstein",
				c: "78",
				h: "<blockquote>&ldquo;No problem can be solved from the same level of consciousness that created it.&rdquo; &mdash; <footer>Albert Einstein</footer></blockquote>",
			},
			{
				q: "Where your talents and the needs of the world cross, there lies your vocation.",
				a: "Aristotle",
				c: "78",
				h: "<blockquote>&ldquo;Where your talents and the needs of the world cross, there lies your vocation.&rdquo; &mdash; <footer>Aristotle</footer></blockquote>",
			},
			{
				q: "When the fish is caught we pay no more attention to the trap.",
				a: "Huang Po",
				c: "61",
				h: "<blockquote>&ldquo;When the fish is caught we pay no more attention to the trap.&rdquo; &mdash; <footer>Huang Po</footer></blockquote>",
			},
			{
				q: "Happiness is not something ready made. It comes from your own actions.",
				a: "Dalai Lama",
				c: "70",
				h: "<blockquote>&ldquo;Happiness is not something ready made. It comes from your own actions.&rdquo; &mdash; <footer>Dalai Lama</footer></blockquote>",
			},
			{
				q: "So we beat on, boats against the current, borne back ceaselessly into the past.",
				a: "F. Scott Fitzgerald",
				c: "79",
				h: "<blockquote>&ldquo;So we beat on, boats against the current, borne back ceaselessly into the past.&rdquo; &mdash; <footer>F. Scott Fitzgerald</footer></blockquote>",
			},
			{
				q: "You can never get enough of what you don't need to make you happy.",
				a: "Eric Hoffer",
				c: "66",
				h: "<blockquote>&ldquo;You can never get enough of what you don't need to make you happy.&rdquo; &mdash; <footer>Eric Hoffer</footer></blockquote>",
			},
			{
				q: "Would you rather live your life according to the approval of others or aligned with your truth and your dreams?",
				a: "Robin Sharma",
				c: "111",
				h: "<blockquote>&ldquo;Would you rather live your life according to the approval of others or aligned with your truth and your dreams?&rdquo; &mdash; <footer>Robin Sharma</footer></blockquote>",
			},
			{
				q: "To live outside the law, you must be honest. ",
				a: "Bob Dylan",
				c: "45",
				h: "<blockquote>&ldquo;To live outside the law, you must be honest. &rdquo; &mdash; <footer>Bob Dylan</footer></blockquote>",
			},
			{
				q: "The happiness of your life depends upon the quality of your thoughts; therefore guard accordingly.",
				a: "Marcus Aurelius",
				c: "98",
				h: "<blockquote>&ldquo;The happiness of your life depends upon the quality of your thoughts; therefore guard accordingly.&rdquo; &mdash; <footer>Marcus Aurelius</footer></blockquote>",
			},
			{
				q: "Be courteous to all, but intimate with few, and let those few be well tried before you give them your confidence. ",
				a: "George Washington",
				c: "114",
				h: "<blockquote>&ldquo;Be courteous to all, but intimate with few, and let those few be well tried before you give them your confidence. &rdquo; &mdash; <footer>George Washington</footer></blockquote>",
			},
			{
				q: "Nothing can bring you peace but yourself.",
				a: "Dale Carnegie",
				c: "41",
				h: "<blockquote>&ldquo;Nothing can bring you peace but yourself.&rdquo; &mdash; <footer>Dale Carnegie</footer></blockquote>",
			},
			{
				q: "If you can change your mind, you can change your life.",
				a: "William James",
				c: "54",
				h: "<blockquote>&ldquo;If you can change your mind, you can change your life.&rdquo; &mdash; <footer>William James</footer></blockquote>",
			},
			{
				q: "Others can stop you temporarily - you are the only one who can do it permanently.",
				a: "Zig Ziglar",
				c: "81",
				h: "<blockquote>&ldquo;Others can stop you temporarily - you are the only one who can do it permanently.&rdquo; &mdash; <footer>Zig Ziglar</footer></blockquote>",
			},
			{
				q: "The way to change others' minds is with affection, and not anger.",
				a: "Dalai Lama",
				c: "65",
				h: "<blockquote>&ldquo;The way to change others' minds is with affection, and not anger.&rdquo; &mdash; <footer>Dalai Lama</footer></blockquote>",
			},
			{
				q: "Success is about creating value.",
				a: "Candice Carpenter",
				c: "32",
				h: "<blockquote>&ldquo;Success is about creating value.&rdquo; &mdash; <footer>Candice Carpenter</footer></blockquote>",
			},
			{
				q: "To be happy we need something to solve. Happiness is therefore a form of action.",
				a: "Mark Manson",
				c: "80",
				h: "<blockquote>&ldquo;To be happy we need something to solve. Happiness is therefore a form of action.&rdquo; &mdash; <footer>Mark Manson</footer></blockquote>",
			},
			{
				q: "Those who seek the easy way do not seek the true way.",
				a: "Dogen",
				c: "53",
				h: "<blockquote>&ldquo;Those who seek the easy way do not seek the true way.&rdquo; &mdash; <footer>Dogen</footer></blockquote>",
			},
			{
				q: "As you think, so shall you become. ",
				a: "Bruce Lee",
				c: "35",
				h: "<blockquote>&ldquo;As you think, so shall you become. &rdquo; &mdash; <footer>Bruce Lee</footer></blockquote>",
			},
			{
				q: "Don't gain the world and lose your soul. Wisdom is better than silver and gold.",
				a: "Bob Marley",
				c: "79",
				h: "<blockquote>&ldquo;Don't gain the world and lose your soul. Wisdom is better than silver and gold.&rdquo; &mdash; <footer>Bob Marley</footer></blockquote>",
			},
			{
				q: "Do not ignore your gift. Your gift is the thing you do the absolute best with the least amount of effort.",
				a: "Steve Harvey",
				c: "105",
				h: "<blockquote>&ldquo;Do not ignore your gift. Your gift is the thing you do the absolute best with the least amount of effort.&rdquo; &mdash; <footer>Steve Harvey</footer></blockquote>",
			},
			{
				q: "All happiness depends on courage and work.",
				a: "Honore de Balzac",
				c: "42",
				h: "<blockquote>&ldquo;All happiness depends on courage and work.&rdquo; &mdash; <footer>Honore de Balzac</footer></blockquote>",
			},
			{
				q: "You will never do anything in this world without courage. It is the greatest quality of the mind next to honor.",
				a: "James Allen",
				c: "111",
				h: "<blockquote>&ldquo;You will never do anything in this world without courage. It is the greatest quality of the mind next to honor.&rdquo; &mdash; <footer>James Allen</footer></blockquote>",
			},
			{
				q: "Perfection is not attainable, but if we chase perfection we can catch excellence.",
				a: "Vince Lombardi",
				c: "81",
				h: "<blockquote>&ldquo;Perfection is not attainable, but if we chase perfection we can catch excellence.&rdquo; &mdash; <footer>Vince Lombardi</footer></blockquote>",
			},
		];
		return json.map(item=>item.q);
	}
};

export let time = () => {
	let time = new Date();
	return time.toString();
};

console.log(quotesapi("https://zenquotes.io/api/quotes/"))
