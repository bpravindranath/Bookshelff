
/* OTHERS PAGES */


/* Get Home Page */
module.exports.home = function (req, res) {
	res.render('homepage', {

		title: 'Bookshelff',

		home_data: {

			hero: {

				herotitle: 'Bookshelf',

				hero_box_1a: 'Global',

				hero_box_1b: 'Feed',

				hero_box_1c: 'The art of avoiding failure.',

				hero_box_2a: 'Team',

				hero_box_2b: 'Feed',

				hero_box_2c: 'Exploring the art of the possible.'


			},

			boxs: [{

				header: 'What is it?',

				body: ''
			}, {

				header: 'Why use it?',

				body: ''
			}]
		}
	});
};

/* Get About Page */
module.exports.about = function (req, res) {
	res.render('about', {

		title: 'About',

		about_body: {
			header: 'About',
			body_section_A: 'Research, the scary eight letter word, in academia is unavoidable. To succeed at anything in school, whether it is homework, a paper, or a test, one must do the time, that is, research. Research encompass a lot of events. Most of all these events orient themselves around one thing: Resource. Simply, a resource is something that is useful for a task at hand or future task. Now a days, resources can be gathered from almost anywhere, YouTube, Google, libraries, journals, etc… All these different avenues to accrue resources begin to make remembering and storing resources a lot more difficult.',
			
			body_section_B: 'I wanted to make resource gathering easier by having a place where I could store relevant resource and find them easily. So I decided to create Bookshelff.'
		}

	});
};


