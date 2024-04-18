import React, { useState } from 'react';
import '../Styles/Avatar.css';
import axios from 'axios';

const Avatar = () => {
  const [sprite, setSprite] = useState('bottts');
  const [seed, setSeed] = useState(1000);

  function handleSprite(spritetype) {
    setSprite(spritetype);
  }

  function handleGenerate() {
    let x = Math.floor(Math.random() * 1000000);
    setSeed(x);
  }

  function downloadImage() {
    axios({
      method: 'get',
      url: `https://api.dicebear.com/8.x/${sprite}/svg?seed=${seed}`,
      responseType: 'arraybuffer',
      headers: {
        'User-Agent': 'Mozilla/5.0',
      },
    })
      .then(response => {
        var link = document.createElement('a');
        link.href = window.URL.createObjectURL(
          new Blob([response.data], { type: 'image/svg+xml' })
        );
        link.download = `${seed}.svg`;
        document.body.appendChild(link);
        link.click();
        setTimeout(function () {
          window.URL.revokeObjectURL(link.href);
        }, 200);
      })
      .catch(error => {
        console.error('Error downloading image:', error);
      });
  }

  return (
    <div className="main-container">
      <div className="nav-container">
        <p>Random Avatar Generator</p>
      </div>
      <div className="home">
        <div className="buttons-container">
          <button onClick={() => handleSprite('avataaars')}>Human</button>
          <button onClick={() => handleSprite('adventurer')}>Head</button>
          <button onClick={() => handleSprite('bottts')}>Bots</button>
          <button onClick={() => handleSprite('fun-emoji')}>Emoji</button>
          <button onClick={() => handleSprite('identicon')}>Identi</button>
          <button onClick={() => handleSprite('pixel-art')}>Pixels</button>
          <button onClick={() => handleSprite('micah')}>Avatars</button>
        </div>
        <div className="avatar">
          <img
            src={`https://api.dicebear.com/8.x/${sprite}/svg?seed=${seed}`}
            alt="Sprite"
          />
        </div>
        <div className="generate">
          <button id="gen" onClick={handleGenerate}>
            Next
          </button>
          <button id="down" onClick={downloadImage}>
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default Avatar;

// import React, { useState } from 'react';

// import '../Styles/Avatar.css';

// import { Axios } from 'axios';

// const Avatar = () => {
//   const [sprite, setSprite] = useState('bottts');
//   const [seed, setSeed] = useState(1000);

//   function handleSprite(spritetype) {
//     setSprite(spritetype);
//   }

//   function handleGenerate() {
//     let x = Math.floor(Math.random() * 1000);
//     setSeed(x);
//   }

//   function downloadImage() {
//     Axios({
//       method: 'get',
//       url: `https://api.dicebear.com/8.x/pixel-art/svg`,
//       // url: `https://api.dicebear.com/8.x/pixel-art/${sprite}/${seed}/svg`,
//       // url: `https://avatars.dicebear.com/api/${sprite}/${seed}.svg`,
//       responseType: 'arraybuffer',
//     })
//       .then(response => {
//         var link = document.createElement('a');
//         link.href = window.URL.createObjectURL(
//           new Blob([response.data], { type: 'application/octet-stream' })
//         );
//         link.download = `${seed}.svg`;
//         document.body.appendChild(link);
//         link.click();
//         setTimeout(function () {
//           window.URL.revokeObjectURL(link);
//         }, 200);
//       })
//       .catch(error => {});
//   }

//   return (
//     <div className="main-container">
//       <div className="nav-container">
//         <p>Random Avatar Generator</p>
//       </div>
//       <div className="home">
//         <div className="butons-container">
//           <button
//             onClick={() => {
//               handleSprite('avataaars');
//             }}
//           >
//             Human
//           </button>

//           <button
//             onClick={() => {
//               handleSprite('human');
//             }}
//           >
//             Pixel
//           </button>

//           <button
//             onClick={() => {
//               handleSprite('bottts');
//             }}
//           >
//             Bots
//           </button>

//           <button
//             onClick={() => {
//               handleSprite('jdenticon');
//             }}
//           >
//             Vector
//           </button>

//           <button
//             onClick={() => {
//               handleSprite('identicon');
//             }}
//           >
//             Identi
//           </button>

//           <button
//             onClick={() => {
//               handleSprite('gridy');
//             }}
//           >
//             Alien
//           </button>

//           <button
//             onClick={() => {
//               handleSprite('micah');
//             }}
//           >
//             Avatars
//           </button>
//         </div>
//         <div className="avatar">
//           <img
//             src={`https://avatars.dicebear.com/api/${sprite}/${seed}.svg`}
//             alt="Sprite"
//           />
//         </div>
//         <div className="generate">
//           <button
//             id="gen"
//             onClick={() => {
//               handleGenerate();
//             }}
//           >
//             Next
//           </button>

//           <button
//             id="down"
//             onClick={() => {
//               downloadImage();
//             }}
//           >
//             Download
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Avatar;
