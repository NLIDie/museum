import React from 'react';
import styled from 'styled-components';

const CrewAvatarContainer = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  border: 1px solid gray;
  background: none;
  
  :active {
    box-shadow: inset 0px 0px 50px 50px rgba(0,0,0,0.2), 0 0 12px 10px rgba(0,0,0,0.2);
  }
`;

const CrewAvatarImage = styled.img`
  display: block;
`;

const CrewAvatarName = styled.span`
  font-family: PFAgoraSerifPro;
  font-weight: 500;
  text-transform: lowercase;
  font-size: 21px;
`;

export function CrewAvatar(props) {
  const {
    src,
    name,
    width,
    height,
    onClick
  } = props;

  return (
    <CrewAvatarContainer
      type="button"
      onClick={onClick}
      onTouchEnd={onClick}
    >
      <CrewAvatarImage
        src={src}
        width={width}
        height={height}
        alt={name}
      />
      <CrewAvatarName>{name}</CrewAvatarName>
    </CrewAvatarContainer>
  ) 
}