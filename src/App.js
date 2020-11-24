import React from 'react';
import styled from 'styled-components';
import './app.css';

import { useTransition, animated } from 'react-spring';

import { VideoPlayer } from './video-player';

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

const makeGenNextID = (id = 0) => () => id++
const genNextCrewID = makeGenNextID(1);
const createCrew = (  
  name,
  [width, height] = [0, 0],
  [x, y] = [0, 0]
) => ({
  id: genNextCrewID(),
  name,
  width,
  height,
  x,
  y
})

const crew = [
  // Section 1
  createCrew('Капитан', ['85px', '170px'], ['41.30%', '3.15%']), // 1

  // Section 2
  createCrew('Лейтенанты', ['85px', '155px'], ['30%', '12.80%']), // 2
  createCrew('Секретарь', ['60px', '155px'], ['38%', '12.80%']), // 3
  createCrew('Унтер-лейтенанты', ['100px', '155px'], ['43.60%', '12.80%']), // 4
  createCrew('Комиссар', ['60px', '155px'], ['53%', '12.80%']), // 5

  // Section 3
  createCrew('Констапель', ['85px', '155px'], ['30%', '22.10%']), // 6
  createCrew('Мичманы', ['88px', '155px'], ['38%', '22.10%']), // 7
  createCrew('Лекарь', ['60px', '155px'], ['46.20%', '22.10%']), // 8
  createCrew('Священник', ['60px', '155px'], ['53%', '22.10%']), // 9

  // Section 4
  createCrew('Шхипор', ['69px', '155px'], ['31%', '31.50%']), // 10
  createCrew('Штюрман', ['93px', '155px'], ['37.5%', '31.50%']), // 11
  createCrew('Боцман', ['65px', '155px'], ['46.45%', '31.50%']), // 12
  createCrew('Шхиман', ['65px', '155px'], ['53.10%', '31.50%']), // 13

  // Section 5
  createCrew('Подштюрманы', ['95px', '160px'], ['23.20%', '40.50%']), // 14
  createCrew('Подшхипор', ['67px', '160px'], ['31.60%', '40.50%']), // 15
  createCrew('Боцманматы', ['90px', '160px'], ['37.90%', '40.50%']), // 16
  createCrew('Шхиманматы', ['79px', '160px'], ['46%', '40.50%']), // 17
  createCrew('Квартирмейстеры', ['126px', '160px'], ['53.3%', '40.50%']), // 18

  // Section 6
  createCrew('Сержант', ['60px', '155px'], ['8.4%', '51%']), // 19
  createCrew('Подконстапели', ['80px', '155px'], ['14%', '51%']), // 20
  createCrew('Капрал', ['60px', '155px'], ['21.40%', '51%']), // 21
  createCrew('Канонир 1', ['45px', '140px'], ['46.5%', '51%']), // 22
  createCrew('Канонир 2', ['45px', '140px'], ['50.65%', '51%']), // 23
  createCrew('Канонир 3', ['45px', '140px'], ['54.8%', '51%']), // 24

  // Section 7
  createCrew('Матрос 01', ['45px', '140px'], ['26.7%', '65.3%']), // 25
  createCrew('Матрос 02', ['45px', '140px'], ['30.8%', '65.3%']), // 26
  createCrew('Матрос 03', ['45px', '140px'], ['35.0%', '65.3%']), // 27
  createCrew('Кают юнги', ['45px', '140px'], ['69.7%', '65.3%']), // 28
  createCrew('Дек юнги', ['45px', '140px'], ['73.9%', '65.3%']), // 29

  // Section 8
  createCrew('Караульный солдат', ['140px', '205px'], ['15%', '76.2%']), // 30
  createCrew('Солдаты', ['520px', '246px'], ['28%', '74%']), // 31

  // Section 9
  createCrew('Трубачи', ['82px', '180px'], ['9%', '87.7%']), // 32
  createCrew('Лекарские ученики', ['75px', '180px'], ['16.6%', '87.7%']), // 33
  createCrew('Писарь', ['50px', '180px'], ['23.5%', '87.7%']), // 34
  createCrew('Добрый плотник', ['52px', '180px'], ['29%', '87.7%']), // 35
  createCrew('Плотники', ['74px', '180px'], ['34%', '87.7%']), // 36
  createCrew('Купор', ['48px', '180px'], ['40.8%', '87.7%']), // 37
  createCrew('Ундер купор', ['60px', '180px'], ['45.8%', '87.7%']), // 38
  createCrew('Конопатчики', ['90px', '180px'], ['51.4%', '87.7%']), // 39
  createCrew('Парусные ученики', ['65px', '180px'], ['59.7%', '87.7%']), // 40
  createCrew('Слесарь', ['48px', '180px'], ['65.7%', '87.7%']), // 41
  createCrew('Повары', ['72px', '180px'], ['70.5%', '87.7%']), // 42
  createCrew('Профос', ['45px', '180px'], ['77.1%', '87.7%']) // 43
];

export function App() {
  const [post, setPost] = React.useState(null);

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
      {
        crew.map((person) => (
          <PostButton
            style={{
              width: person.width,
              height: person.height,
              top: person.y,
              left: person.x,
              // backgroundColor: 'rgba(255,255,255, 0.25)',
            }}
            type="button"
            onClick={() => setPost(person.id)}
            data-id={person.id}
          />
        ))
      }
  
      {
        transitions.map(({ item, key, props }) => {
          if (!item) {
            return null;
          }
          console.log(`/museum/assets/video/crew-${post}.mp4`);
          if (item === 32) {
            return (
              <animated.div key={key} style={props}>
                <IMGWrapper>
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
              />
            </animated.div>
          )
        })
      }
    </main>
  );
}
