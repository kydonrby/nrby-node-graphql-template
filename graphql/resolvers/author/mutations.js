import { Author, WorksAt } from '../../../db/models';

const authorMutations = {
  createAuthor: async (_, { author }, { loaders }) => {
    const newAuthor = new Author(author);

    const savedAuthor = await newAuthor.save();

    return savedAuthor.author.one(savedAuthor._id);
  },
  updateAuthor: async (_, { id, author }, { loaders }) => {
    const updatedAuthor = await Author.findByIdAndUpdate(
      id,
      {
        $set: { ...author },
      },
      { new: true }
    );

    return loaders.author.one(id);
  }
};

export default authorMutations;
