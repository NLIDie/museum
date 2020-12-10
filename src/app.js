import React from 'react';
import styled from 'styled-components';
import { useTransition, animated } from 'react-spring';

import { IconLangRU } from './icon-lang-ru'
import { IconLangEN } from './icon-lang-en'
import { IconLangCN } from './icon-lang-cn'
import { VideoPlayer } from './video-player';

import './app.css';

const IMGWrapper = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: black;
  justify-content: center;
`;

const PostButton = styled.button`
  position: absolute;
  background: none;
  border: none;
  border-radius: 25px;
  outline: none;
  transition: box-shadow 50ms;

  :active {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: '';
    display: block;
    box-shadow: inset 0px 0px 50px 50px rgba(0,0,0,0.2), 0 0 12px 10px rgba(0,0,0,0.2);
  }
`;

const FlagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;

  height: 40px;

  padding: 4px;
  margin: 50px 0 0 75px;
`;

const ButtonLang = styled.button`
  flex: 0;
  padding: 4px;
  margin-left: 4px;

  border: none;
  background: transparent;

  line-height: 0;
  font-size: 0;

  border-radius: ${props => props.isActive ? '10px' : 0};
  box-shadow: ${props => props.isActive ? 'inset 0px 0px 20px 20px rgba(0,0,0,0.2), 0 0 6px 5px rgba(0,0,0,0.2)' : 'none'};

  transition: transform 200ms, box-shadow 200ms, border-radius 200ms;

  cursor: pointer;

  &:hover {
    transform: ${props => props.isActive ? 'none' : 'scale(1.1)'};
  }

  &:active {
    border-radius: 10px;
    box-shadow: inset 0px 0px 20px 20px rgba(0,0,0,0.2), 0 0 6px 5px rgba(0,0,0,0.2);
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

const makePosition = (x, y) => ({ x, y })

const makeContainer = (width, height, position) => ({
  width: `${width}px`,
  height: `${height}px`,
  top: `${position.y}%`,
  left: `${position.x}%`
});

const makeCrew = (
  id,
  name,
  container
) => ({
  id,
  name,
  container
})

const crew = [
  // Section 1
  makeCrew(1, 'капитан', makeContainer(85, 170, makePosition(41.30, 3.15))),

  // Section 2
  makeCrew(2, 'лейтенанты', makeContainer(85, 155, makePosition(30, 12.805))),
  makeCrew(3, 'секретарь', makeContainer(60, 155, makePosition(38, 12.80))),
  makeCrew(4, 'унтер-лейтенанты', makeContainer(100, 155, makePosition(43.60, 12.80))),
  makeCrew(5, 'комиссар', makeContainer(60, 155, makePosition(53, 12.80))),

  // Section 3
  makeCrew(6, 'констапель', makeContainer(85, 155, makePosition(30, 22.10))),
  makeCrew(7, 'мичманы', makeContainer(88, 155, makePosition(38, 22.10))),
  makeCrew(8, 'лекарь', makeContainer(60, 155, makePosition(46.20, 22.10))),
  makeCrew(9, 'священник', makeContainer(60, 155, makePosition(53, 22.10))),

  // Section 4
  makeCrew(10, 'шхипор', makeContainer(69, 155, makePosition(31, 31.50))),
  makeCrew(11, 'штюрман', makeContainer(93, 155, makePosition(37.5, 31.50))),
  makeCrew(12, 'боцман', makeContainer(65, 155, makePosition(46.45, 31.50))),
  makeCrew(13, 'шхиман', makeContainer(65, 155, makePosition(53.10, 31.50))),

  // Section 5
  makeCrew(14, 'подштюрманы', makeContainer(95, 160, makePosition(23.20, 40.50))),
  makeCrew(15, 'подшхипор', makeContainer(67, 160, makePosition(31.60, 40.50))),
  makeCrew(16, 'боцманматы', makeContainer(90, 160, makePosition(37.90, 40.50))),
  makeCrew(17, 'шхиманматы', makeContainer(79, 160, makePosition(46, 40.50))),
  makeCrew(18, 'квартирмейстеры', makeContainer(126, 160, makePosition(53.30, 40.50))),

  // Section 6
  makeCrew(19, 'сержант', makeContainer(60, 155, makePosition(8.4, 51))),
  makeCrew(20, 'подконстапели', makeContainer(80, 155, makePosition(14, 51))),
  makeCrew(21, 'капрал', makeContainer(60, 155, makePosition(21.4, 51))),
  makeCrew(22, 'канонир-1', makeContainer(45, 140, makePosition(46.5, 51))),
  makeCrew(23, 'канонир-2', makeContainer(45, 140, makePosition(50.65, 51))),
  makeCrew(24, 'канонир-3', makeContainer(45, 140, makePosition(54.8, 51))),

  // Section 7
  makeCrew(25, 'матрос-1', makeContainer(45, 140, makePosition(26.7, 65.3))),
  makeCrew(26, 'матрос-2', makeContainer(45, 140, makePosition(30.8, 65.3))),
  makeCrew(27, 'матрос-3', makeContainer(45, 140, makePosition(35, 65.3))),
  makeCrew(28, 'кают-юнги', makeContainer(45, 140, makePosition(69.7, 65.3))),
  makeCrew(29, 'дек-юнги', makeContainer(45, 140, makePosition(73.9, 65.3))),

  // Section 8
  makeCrew(30, 'караульные-солдаты', makeContainer(140, 205, makePosition(15, 76.2))),
  makeCrew(31, 'солдаты', makeContainer(520, 246, makePosition(28, 74))),

  // Section 9
  makeCrew(32, 'трубачи', makeContainer(82, 180, makePosition(9, 87.7))),
  makeCrew(33, 'лекарские-ученики', makeContainer(75, 180, makePosition(16.6, 87.7))),
  makeCrew(34, 'писарь', makeContainer(50, 180, makePosition(23.5, 87.7))),
  makeCrew(35, 'добрый-плотник', makeContainer(52, 180, makePosition(29, 87.7))),
  makeCrew(36, 'плотники', makeContainer(74, 180, makePosition(34, 87.7))),
  makeCrew(37, 'купор', makeContainer(48, 180, makePosition(40.8, 87.7))),
  makeCrew(38, 'ундер-купор', makeContainer(60, 180, makePosition(45.8, 87.7))),
  makeCrew(39, 'конопатчики', makeContainer(90, 180, makePosition(51.4, 87.7))),
  makeCrew(40, 'парусные-ученики', makeContainer(65, 180, makePosition(59.7, 87.7))),
  makeCrew(41, 'слесарь', makeContainer(48, 180, makePosition(65.7, 87.7))),
  makeCrew(42, 'повары', makeContainer(72, 180, makePosition(70.5, 87.7))),
  makeCrew(43, 'профос', makeContainer(45, 180, makePosition(77.1, 87.7))),
];

const langs = [
  'ru',
  'en'
  // 'cn'
];
const langFlagMapping = {
  'ru': <IconLangRU />,
  'en': <IconLangEN />,
  'cn': <IconLangCN />
};

export function App() {
  const [post, setPost] = React.useState(null);
  const [currentLang, setCurrentLang] = React.useState('ru');

  const transitions = useTransition(post, null, {
    from: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      opacity: 0,
      transformOrigin: 'center',
      transform: `scale(0)`,
    },
    enter: {
      opacity: 1,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      transform: 'scale(1)',
    },
    leave: {
      opacity: 0,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      transform: `scale(0)`,
    },
    config: {
      duration: 500
    }
  })

  React.useEffect(() => {
    const htmlElement = document.querySelector('html');

    if (htmlElement !== null) {
      htmlElement.setAttribute('lang', currentLang);
    }
  }, [currentLang])

  React.useEffect(() => {
    const stop = (event) => {
      event.stopPropagation();
      event.preventDefault();
    };

    const stopTouch = (event) => {
      if (event.changedTouches > 1) {
        event.stopPropagation();
        event.preventDefault();
      }
    };

    document.body.addEventListener('contextmenu', stop);
    document.body.addEventListener('touchmove', stop);
    document.body.addEventListener('touchcancel', stop);
    document.body.addEventListener('touchstart', stop);

    document.body.addEventListener('touchend', stopTouch);

    return () => {
      document.body.removeEventListener('contextmenu', stop);
      document.body.removeEventListener('touchmove', stop);
      document.body.removeEventListener('touchcancel', stop);
      document.body.removeEventListener('touchstart', stop);

      document.body.removeEventListener('touchend', stopTouch);
    }
  }, []);

  const handleCrewClick = React.useCallback((name) => {
    setPost(name);

    if (name === 'трубачи') {
      setTimeout(() => setPost(null), 10000);
    }
  }, [setPost]);

  const memoRenderLangFlags = React.useMemo(() => (
    <FlagsContainer>
      {
        langs.map((lang) => (
          <ButtonLang
            key={lang}
            type="button"
            isActive={currentLang === lang}
            disabled={currentLang === lang}
            onClick={() => setCurrentLang(lang)}
          >
            {langFlagMapping[lang]}
          </ButtonLang>
        ))
      }
    </FlagsContainer>
  ), [currentLang, setCurrentLang]);

  const memoRenderCrewButtons = React.useMemo(() => (
    crew.map((person) => (
      <PostButton
        key={person.name}
        style={{ ...person.container, backgroundColor: 'rgba(255,255,255, 0.25)' }}
        type="button"
        onClick={() => handleCrewClick(person.name)}
        onTouchEnd={() => handleCrewClick(person.name)}
      />
    ))
  ), [handleCrewClick]);

  const memoRenderVideo = React.useMemo(() => (
    transitions.map(({ item, key, props }) => {
      if (!item) {
        return null;
      }

      if (item === 'трубачи') {
        return (
          <animated.div key={key} style={props}>
            <IMGWrapper onClick={() => setPost(null)} onTouchEnd={() => setPost(null)}>
              <img
                src={`/museum/assets/img/${currentLang}/трубачи.webp`}
                alt="Трубачи"
                height="100%"
              />
            </IMGWrapper>
          </animated.div>
        )
      }

      return (
        <animated.div key={key} style={props}>
          <VideoPlayer
            src={`/museum/assets/video/${currentLang}/${post}.webm`}
            onEnded={() => setPost(null)}
            onClick={() => setPost(null)}
          />
        </animated.div>
      )
    })
  ), [transitions, currentLang, post]);

  return (
    <main className="app">
      {memoRenderLangFlags}
      {memoRenderCrewButtons}
      {memoRenderVideo}
    </main>
  );
}
