import React from 'react';
import styled from 'styled-components';
import { Section }  from '../components/ui/SectionContainer';
import { Headline } from '../components/ui/Headline';
import { Button }   from '../components/ui/Button';
import { Tag }      from '../components/ui/Tag';
import { Photo }    from '../components/ui/Photo';
import { media }    from '../styles/media';
import articles     from '../data/articles.json';

const Grid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.space.xl};
  ${media.md} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Card = styled.article`
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 8px;
  overflow: hidden;
`;

const Content = styled.div`
  padding: ${({ theme }) => theme.space.md};
`;

export default function ArticlesSection() {
  return (
    <Section id="my-words">
      <Headline>My Words</Headline>
      <Grid>
        {articles.map(a => (
          <Card key={a.id}>
            <Photo src={a.image} alt={a.title} />
            <Content>
              <Tag>{a.date}</Tag>
              <h3>{a.title}</h3>
              <p>{a.excerpt}</p>
              <Button href={a.url}>
                <img src="/globe.svg" alt="" />
                Read article
              </Button>
            </Content>
          </Card>
        ))}
      </Grid>
      <Button variant="outline" href="#all-articles">
        <img src="/arrow.svg" alt="" />
        See more articles
      </Button>
    </Section>
  );
}