import React from 'react';
import styled from 'styled-components';
import { Section }  from '../components/ui/SectionContainer';
import { Headline } from '../components/ui/Headline';
import { Button }   from '../components/ui/Button';
import { Tag }      from '../components/ui/Tag';
import { Photo as BasePhoto } from '../components/ui/Photo';
import { media }    from '../styles/media';
import articles     from '../data/articles.json';

const Grid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.space.xxl};
  /* always one column on mobile + tablet */
  grid-template-columns: 1fr;
`;

const Card = styled.article`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 8px;

  /* tablet+: row layout with gap & bottom margin */
  ${media.md} {
    flex-direction: row;
    align-items: flex-start;
    gap: ${({ theme }) => theme.space.xxl};     
    margin-bottom: ${({ theme }) => theme.space.xxl};
  }
`;

const ArticlePhoto = styled(BasePhoto)`
  width: 100%;
  border-radius: 8px;
  object-fit: cover;

  /* tablet+: fixed 200×320 */
  ${media.md} {
    width: 200px;
    height: 320px;
    flex-shrink: 0;
  }
`;

const Content = styled.div`
  padding: ${({ theme }) => theme.space.md} 0;

  ${media.md} {
    /* fill the same 320px height, and take the rest of the row */
    height: 320px;
    flex: 1;
    padding: 0 ${({ theme }) => theme.space.md};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const TagContainer = styled.div`
  display: inline-block;
  margin-bottom: ${({ theme }) => theme.space.sm};
`;

const ButtonWrapper = styled.div`
  margin-top: ${({ theme }) => theme.space.md};
`;

export default function ArticlesSection() {
  return (
    <Section id="my-words">
      <Headline>My Words</Headline>
      <Grid>
        {articles.map(a => (
          <Card key={a.id}>
            <ArticlePhoto src={a.image} alt={a.title} />

            <Content>
              <div>
                <TagContainer>
                  <Tag>{a.date}</Tag>
                </TagContainer>
                <h3>{a.title}</h3>
                <p>{a.excerpt}</p>
              </div>

              <ButtonWrapper>
                <Button href={a.url}>
                  <img src="/globe.svg" alt="" />
                  <span>Read article</span>
                </Button>
              </ButtonWrapper>
            </Content>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}