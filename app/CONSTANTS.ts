export const PATHS = {
	about: '/&/',
	category: '/-/',
	create: '/+/',
	edit: '/~/',
	results: '/=/',
	user: '/*/',
} as const;

export const MIN_IMAGES = 2;

export const CATEGORIES = [
	{ slug: 'art', name: 'Art and illustration' },
	{ slug: 'graphic-design', name: 'Graphic design' },
	{ slug: 'photography', name: 'Photography' },
	{ slug: 'style', name: 'Style' },
] as const;

export const VISIBILITIES = {
	public: {
		name: 'Public',
		description: '',
		credits: 0,
	},
	private: {
		name: 'Private',
		description: 'Coming soon...',
		credits: 5,
	},
} as const;

export const DURATIONS = {
	1: {
		name: 'Quick decision',
		description: 'Voting open for 24 hours',
		credits: 0,
	},
	7: {
		name: 'Take your time',
		description: 'Voting open for 7 days',
		credits: 2,
	},
} as const;
