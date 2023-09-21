import { faker } from '@faker-js/faker';
import { Factory } from 'fishery';

export interface Post {
  id: string;
  title: string;
  body: string;
}

const PostFactory = Factory.define<Post>(() => ({
  id: faker.string.uuid(),
  title: faker.lorem.sentence(),
  body: faker.lorem.paragraph(100),
}));

export const PostMother = {
  createList: (length = 5): Post[] => {
    return PostFactory.buildList(length);
  },
};
