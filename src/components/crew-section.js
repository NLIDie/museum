import React from 'react';
import styled from 'styled-components';

const CrewSectionContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CrewSectionAvatars = styled.div`
  display: flex;
  justify-content: space-around;

  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

// export const CrewSectionInfo = styled.div`

// `;

export function CrewSection(props) {
  const {
    children
  } = props;

  return (
    <CrewSectionContainer>
      {children}
    </CrewSectionContainer>
  )
}