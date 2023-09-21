import { rest } from 'msw';
import { Post, PostMother } from './post-factory';

// Mocked Data
export const posts: Post[] = PostMother.createList(10);

export const postsHandlers = [
  rest.get('https://myapi.url.com/posts', (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(posts));
  }),
];
