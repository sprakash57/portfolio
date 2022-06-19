import React from 'react';
import { TagsContainer, TagText } from './styled';

const Hashtags = ({ tags }: { tags: string[] }) => {
  return (
    <TagsContainer>
      {tags.map((tag) => (
        <TagText key={tag}>#{tag}</TagText>
      ))}
    </TagsContainer>
  );
};

export default Hashtags;
