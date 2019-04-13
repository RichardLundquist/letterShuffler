const alphabet = ["A", "a", "B", "b", "C", "c", "D", "d", "E", "e", "F", "f", "G", "g", "H", "h", "I", "i", "J", "j", "K", "k", "L", "l", "M", "m", "N", "n", "O", "o", "P", "p", "Q", "q", "R", "r", "S", "s", "T", "t", "U", "u", "V", "v", "W", "w", "X", "x", "Y", "y", "Z", "z", "Å", "å", "Ä", "ä", "Ö", "ö", "?", "!", "."];
		
		const output = document.getElementById("shuffleThis");
		const theWord = output.innerHTML.split("");
		
		let timer;
		const iterationSpeed = 5; //the speed of the letter loop iteration
		const shortDelay = 800; // after each iteration loop, a delay occurs. The two types of delay have different duration and are picked randomly. This is the short type
		const longDelay = 2000; // This is the longer delay. 

			function start() {
			let currLetter = 0;
			
			let i = (alphabet.indexOf(theWord[currLetter]) + 1)
			
			var firstLetter = theWord[0];
			
			function init() {
				timer = setInterval(function() {
				function inner() {

					
					if(currLetter >= theWord.length) {
						currLetter = 0;
						firstLetter = theWord[currLetter];
						i = (alphabet.indexOf(theWord[currLetter]) + 1)
					}
					
					if(i >= alphabet.length) {
						i = 0;
					}
					
					else if(firstLetter === " ") {
						currLetter++; // randomly change letter
						//currLetter = Math.ceil(Math.random()*theWord.length); //change letter by succession
						firstLetter = theWord[currLetter];
						i = (alphabet.indexOf(theWord[currLetter]) + 1)
					}
								
					theWord[currLetter] = alphabet[i];
					output.innerHTML = theWord.join("");
					
					if(alphabet[i] === firstLetter) {
						currLetter = Math.ceil(Math.random()*theWord.length); // randomly change letter
						//currLetter++; //change letter by succession
						clearInterval(timer);
						
						
						firstLetter = theWord[currLetter];
						i = (alphabet.indexOf(theWord[currLetter]) + 1);
						
						if(Math.random() > 0.5) {
							setTimeout(init, longDelay);
						}
						
						else {
							setTimeout(init, shortDelay);
						}
						
					}
							
					i++;
					
				}
				
				inner();
				   
			}, iterationSpeed);
				
			};
			init();
			
		}
		
		start();