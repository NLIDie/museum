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
    /* background-color: rgba(0,0,0,0.025); */
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

const makeGenNextID = (id = 0) => () => id++
const genNextCrewID = makeGenNextID(1);
const createCrew = (
  name,
  [width, height] = [0, 0],
  [x, y] = [0, 0]
) => ({
  id: genNextCrewID(),
  name,
  width: `${width}px`,
  height: `${height}px`,
  x,
  y
})

const crew = [
  // Section 1
  createCrew('Капитан', ['85', '170'], ['41.30%', '3.15%']), // 1

  // Section 2
  createCrew('Лейтенанты', ['85', '155'], ['30%', '12.80%']), // 2
  createCrew('Секретарь', ['60', '155'], ['38%', '12.80%']), // 3
  createCrew('Унтер-лейтенанты', ['100', '155'], ['43.60%', '12.80%']), // 4
  createCrew('Комиссар', ['60', '155'], ['53%', '12.80%']), // 5

  // Section 3
  createCrew('Констапель', ['85', '155'], ['30%', '22.10%']), // 6
  createCrew('Мичманы', ['88', '155'], ['38%', '22.10%']), // 7
  createCrew('Лекарь', ['60', '155'], ['46.20%', '22.10%']), // 8
  createCrew('Священник', ['60', '155'], ['53%', '22.10%']), // 9

  // Section 4
  createCrew('Шхипор', ['69', '155'], ['31%', '31.50%']), // 10
  createCrew('Штюрман', ['93', '155'], ['37.5%', '31.50%']), // 11
  createCrew('Боцман', ['65', '155'], ['46.45%', '31.50%']), // 12
  createCrew('Шхиман', ['65', '155'], ['53.10%', '31.50%']), // 13

  // Section 5
  createCrew('Подштюрманы', ['95', '160'], ['23.20%', '40.50%']), // 14
  createCrew('Подшхипор', ['67', '160'], ['31.60%', '40.50%']), // 15
  createCrew('Боцманматы', ['90', '160'], ['37.90%', '40.50%']), // 16
  createCrew('Шхиманматы', ['79', '160'], ['46%', '40.50%']), // 17
  createCrew('Квартирмейстеры', ['126', '160'], ['53.3%', '40.50%']), // 18

  // Section 6
  createCrew('Сержант', ['60', '155'], ['8.4%', '51%']), // 19
  createCrew('Подконстапели', ['80', '155'], ['14%', '51%']), // 20
  createCrew('Капрал', ['60', '155'], ['21.40%', '51%']), // 21
  createCrew('Канонир 1', ['45', '140'], ['46.5%', '51%']), // 22
  createCrew('Канонир 2', ['45', '140'], ['50.65%', '51%']), // 23
  createCrew('Канонир 3', ['45', '140'], ['54.8%', '51%']), // 24

  // Section 7
  createCrew('Матрос 01', ['45', '140'], ['26.7%', '65.3%']), // 25
  createCrew('Матрос 02', ['45', '140'], ['30.8%', '65.3%']), // 26
  createCrew('Матрос 03', ['45', '140'], ['35.0%', '65.3%']), // 27
  createCrew('Кают юнги', ['45', '140'], ['69.7%', '65.3%']), // 28
  createCrew('Дек юнги', ['45', '140'], ['73.9%', '65.3%']), // 29

  // Section 8
  createCrew('Караульный солдат', ['140', '205'], ['15%', '76.2%']), // 30
  createCrew('Солдаты', ['520', '246'], ['28%', '74%']), // 31

  // Section 9
  createCrew('Трубачи', ['82', '180'], ['9%', '87.7%']), // 32
  createCrew('Лекарские ученики', ['75', '180'], ['16.6%', '87.7%']), // 33
  createCrew('Писарь', ['50', '180'], ['23.5%', '87.7%']), // 34
  createCrew('Добрый плотник', ['52', '180'], ['29%', '87.7%']), // 35
  createCrew('Плотники', ['74', '180'], ['34%', '87.7%']), // 36
  createCrew('Купор', ['48', '180'], ['40.8%', '87.7%']), // 37
  createCrew('Ундер купор', ['60', '180'], ['45.8%', '87.7%']), // 38
  createCrew('Конопатчики', ['90', '180'], ['51.4%', '87.7%']), // 39
  createCrew('Парусные ученики', ['65', '180'], ['59.7%', '87.7%']), // 40
  createCrew('Слесарь', ['48', '180'], ['65.7%', '87.7%']), // 41
  createCrew('Повары', ['72', '180'], ['70.5%', '87.7%']), // 42
  createCrew('Профос', ['45', '180'], ['77.1%', '87.7%']) // 43
];

export function App() {
  const [post, setPost] = React.useState(null);
  const [lang, setLang] = React.useState('ru');

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

  return (
    <main className="app">
      <FlagsContainer>
        <ButtonLang
          type="button"
          isActive={lang === 'ru'}
          disabled={lang === 'ru'}
          onClick={() => setLang('ru')}
        >
          <IconLangRU />
        </ButtonLang>

        <ButtonLang
          type="button"
          isActive={lang === 'en'}
          disabled={lang === 'en'}
          onClick={() => setLang('en')}
        >
          <IconLangEN />
        </ButtonLang>

        <ButtonLang
          type="button"
          isActive={lang === 'cn'}
          disabled={lang === 'cn'}
          onClick={() => setLang('cn')}
        >
          <IconLangCN />
        </ButtonLang>
      </FlagsContainer>

      {
        crew.map((person) => (
          <PostButton
            key={person.name}
            style={{
              width: person.width,
              height: person.height,
              top: person.y,
              left: person.x,
              // backgroundColor: 'rgba(255,255,255, 0.25)',
            }}
            type="button"
            onClick={() => {
              setPost(person.id);

              if (person.id === 32) {
                setTimeout(() => setPost(null), 10000);
              }
            }}
            data-id={person.id}
          />
        ))
      }

      {
        transitions.map(({ item, key, props }) => {
          if (!item) {
            return null;
          }

          if (item === 32) {
            return (
              <animated.div key={key} style={props}>
                <IMGWrapper onClick={() => setPost(null)}>
                  <img src="/museum/assets/img/трубач.jpg" alt="Трубач" height="100%" />
                </IMGWrapper>
              </animated.div>
            )
          }

          return (
            <animated.div key={key} style={props}>
              <VideoPlayer
                src={`/museum/assets/video/crew-${post}.mp4`}
                onEnded={() => setPost(null)}
                onClick={() => setPost(null)}
              />
            </animated.div>
          )
        })
      }
    </main>
  );
}
