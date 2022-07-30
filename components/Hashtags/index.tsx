import React from 'react';
import { TagsContainer, TagText } from './styled';

const Hashtags = ({ tags, inList = false }: { tags: string[]; inList?: boolean }) => {
  return (
    <TagsContainer inList={inList}>
      {tags.map((tag) => (
        <TagText key={tag}>{tag}</TagText>
      ))}
    </TagsContainer>
  );
};

export default React.memo(Hashtags);
