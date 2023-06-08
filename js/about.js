// start typing text //
const text = "Hello there, I am Jade Nelson, I am passionate learning databases, MySQL, html, css, and js. I've currently studying and exploring about hybrid languages. Also, 2 years of experience about termux terminal a navigating linux command user interface..";
		let index = 0;
		const speed = 100;

		function type() {
			if (index < text.length) {
				document.getElementById("text").textContent += text.charAt(index);
				index++;
				setTimeout(type, speed);
			} else {
				setTimeout(erase, speed * 10);
			}
		}

		function erase() {
			if (index >= 0) {
				document.getElementById("text").textContent = text.substring(0, index);
				index--;
				setTimeout(erase, speed / 50);
			} else {
				setTimeout(type, speed);
			}
		}

		setTimeout(type, speed * 2);
		
		// end typing tesxt //
