import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { FiExternalLink } from 'react-icons/fi';
import { ProjectItems } from './projectData';
import {
  Container,
  ContentBox,
  Link,
  Project,
  ThumbBox,
} from './projectsStyle';

const Projects = () => {
  return (
    <Container id='portfolio'>
      {ProjectItems.map((item) => {
        return (
          <Project key={item.title}>
            <ThumbBox>
              <img src={require(`../assets/${item.thumnail}.png`)} />
            </ThumbBox>
            <ContentBox>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <div>
                {item.stack.map((i) => {
                  return <span key={i}>{i}</span>;
                })}
              </div>
              <a href={item.blogLink} target='_blank'>
                관련 포스트 보기 →
              </a>
              <Link>
                <a href={item.gitLink} target='_blank'>
                  <BsGithub className='github' />
                </a>
                <a href={item.projectLink} target='_blank'>
                  <FiExternalLink className='link' />
                </a>
              </Link>
            </ContentBox>
          </Project>
        );
      })}
    </Container>
  );
};

export default Projects;
