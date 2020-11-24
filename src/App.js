import React from 'react';
// import styled from 'styled-components';
import './app.css';

import { useTransition, animated } from 'react-spring';

import { VideoPlayer } from './components/video-player';
import { CrewAvatar } from './components/crew-avatar';

// const PostButton = styled.button`
//   position: absolute;
//   background: none;
//   border: none;
//   border-radius: 25px;
//   outline: none;
//   transition: box-shadow 50ms;
 
//   :active {
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     content: '';
//     display: block;
//     box-shadow: inset 0px 0px 50px 50px rgba(0,0,0,0.2), 0 0 12px 10px rgba(0,0,0,0.2);
//   }
// `;

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
      {/* <PostButton
        style={{
          width: '77px',
          height: '200px',
          top: '805px',
          left: '675px',
        }}
        type="button"
        onClick={() => setPost('botsman')}
      /> */}

      <section>
        <div>
          <button type="button">
            <img src="/assets/img/crew/01_капитан.webp" alt="Капитан" />
            <span>Капитан</span>
          </button>
        </div>

        <div>
          <p>По штатному расписанию экипаж линейного корабля 4-го ранга «Полтава» состоял из <strong>350 человек</strong></p>
          <p>Морской устав, 1720 г.</p>
        </div>
      </section>

      <section>
        <div>
          <CrewAvatar src="/assets/img/crew/02_лейтенанты.webp" name="Лейтенанты" />
          <CrewAvatar src="/assets/img/crew/03_секретарь.webp" name="Секретарь" />
          <CrewAvatar src="/assets/img/crew/04_унтер-лейтенанты.webp" name="Унтер-Лейтенанты" />
          <CrewAvatar src="/assets/img/crew/05_комиссар.webp" name="Комиссар" />
        </div>

        <div>
          <p>Обер-офицеры</p>
          <div>-</div>
          <p>6 человек</p>
        </div>
      </section>
  
      {
        transitions.map(({ item, key, props }) => (
          item && (
            <animated.div key={key} style={props}>
              <VideoPlayer
                src={`/assets/video/crew-${post}.mp4`}
                onEnded={() => setPost(null)}
                onClick={() => setPost(null)} 
              />
            </animated.div>
          )
        ))
      }
    </main>
  );
}
