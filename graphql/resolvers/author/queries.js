import { Author } from '../../../db/models';

const authorQueries = {
  authors: async (_, { params = { page: 1, pageSize: 20 } }, { loaders }) => {
    const { pageSize, page } = params;

    return await Author.find()
          .skip(pageSize * (page - 1))
          .limit(pageSize);
  },
  author: async (_, { id }, { loaders }) => loaders.author.one(id),
};

export default authorQueries;
