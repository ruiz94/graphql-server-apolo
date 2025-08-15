// Fake data for games, authors, and reviews
const games = [
	{ id: '1', title: 'Eternal Odyssey', platform: ['PC', 'PS5'] },
	{ id: '2', title: 'Shadow Realms', platform: ['Xbox', 'PC'] },
	{ id: '3', title: 'Mystic Quest', platform: ['Switch'] },
	{ id: '4', title: 'Galactic Frontiers', platform: ['PC', 'Xbox'] },
	{ id: '5', title: 'Ancient Legends', platform: ['PS5'] },
	{ id: '6', title: 'Cyber Drift', platform: ['PC', 'Switch'] },
];

const authors = [
	{ id: '1', name: 'Alice Smith', verified: true },
	{ id: '2', name: 'Bob Johnson', verified: false },
	{ id: '3', name: 'Charlie Lee', verified: true },
];

const reviews = [
	{ id: '1', rating: 8, content: 'Amazing gameplay and story!', author_id: '1', game_id: '1' },
	{ id: '2', rating: 7, content: 'Great graphics, but short campaign.', author_id: '2', game_id: '2' },
	{ id: '3', rating: 9, content: 'Loved every moment!', author_id: '1', game_id: '3' },
	{ id: '4', rating: 6, content: 'Fun multiplayer mode.', author_id: '3', game_id: '4' },
	{ id: '5', rating: 10, content: 'Best game of the year!', author_id: '1', game_id: '5' },
	{ id: '6', rating: 5, content: 'Good, but could be better.', author_id: '3', game_id: '6' },
	{ id: '7', rating: 8, content: 'Solid mechanics and design.', author_id: '3', game_id: '2' },
	{ id: '8', rating: 7, content: 'Enjoyable for all ages.', author_id: '1', game_id: '5' },
	{ id: '9', rating: 9, content: 'Incredible soundtrack!', author_id: '1', game_id: '1' },
	{ id: '10', rating: 6, content: 'Decent, but repetitive.', author_id: '2', game_id: '1' },
];

export default { games, authors, reviews };
