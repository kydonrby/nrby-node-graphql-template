import { connection } from 'mongoose';
import connectDB from '../';
import { Author } from '../models';

const seed = async () => {
  console.log('Cleanning database');

  await connectDB();
  await connection.dropDatabase();

  console.log('Database clean');

  const authors = [
    new Author({ name: 'Julia' }),
    new Author({ name: 'Alexander' }),
    new Author({ name: 'Jacob' }),
    new Author({ name: 'Cynthia' }),
  ];

  const savings = [
    ...authors.map((author) => author.save()),
  ];

  await Promise.all(savings);

  console.log('Database seeded');

  connection.close();
};

seed();
