import React from 'react';
import { Posts } from './blogData';
import { Container, Post } from './blogStyle';

const Blog = () => {
  return (
    <Container id='blog'>
      {Posts.map((post) => {
        return (
          <Post key={post.title}>
            <a href={post.link} target='blank'>
              {post.title}
            </a>
          </Post>
        );
      })}
    </Container>
  );
};

export default React.memo(Blog);
