// db
import db from "./_db.js";
export const resolvers = {
  Query: {
    reviews: () => db.reviews,
    review: (_, { id }) => db.reviews.find(review => review.id === id),
    games: () => db.games,
    game: (_, { id }) => db.games.find(game => game.id === id),
    authors: () => db.authors,
    author: (_, { id }) => db.authors.find(author => author.id === id),
  },
  Game: {
    reviews: (parent) => db.reviews.filter(review => review.game_id === parent.id),
  },
  Author: {
    reviews: (parent) => db.reviews.filter(review => review.author_id === parent.id),
  },
  Review: {
    game: (parent) => db.games.find(game => game.id === parent.game_id),
    author: (parent) => db.authors.find(author => author.id === parent.author_id),
  },
  Mutation: {
    addGame: (_, args) => {
      const { title, platform } = args.game;
      const newGame = {
        id: Math.floor(Math.random() * 10000).toString(), // Simple ID generation
        title,
        platform,
      };
      db.games.push(newGame);
      return newGame;
    },
    deleteGame: (_, { id }) => {
      db.games = db.games.filter(game => game.id !== id);
      db.reviews = db.reviews.filter(review => review.game_id !== id);
      return db.games;
    },
    updateGame: (_, { id, game }) => {
      const existingGame = db.games.find(g => g.id === id);
      if (!existingGame) throw new Error("Game not found");
      if (game.title) existingGame.title = game.title;
      if (game.platform) existingGame.platform = game.platform;
      return existingGame;
    }
  }
}