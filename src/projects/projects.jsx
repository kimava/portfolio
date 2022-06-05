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
    <Container>
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
                  return <span>{i}</span>;
                })}
              </div>
              <a>관련 포스트 보기 →</a>
              <Link>
                <BsGithub className='github' />
                <FiExternalLink className='link' />
              </Link>
            </ContentBox>
          </Project>
        );
      })}
    </Container>
  );
};

export default Projects;
