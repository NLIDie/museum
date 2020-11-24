import React from 'react';
import styled from 'styled-components';

const VideoStyled = styled.video`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: black;
`

export function VideoPlayer(props) {
  const {
    className,
    src,
    onEnded,
    onClick,
    style
  } = props;

  return (
    <VideoStyled
      className={className}
      style={style}
      width="100%"
      height="100%"
      src={src}
      autoPlay={true}
      controls={false}
      onEnded={onEnded}
      onClick={onClick}
      onTouchEnd={onClick}
    />
  )
}