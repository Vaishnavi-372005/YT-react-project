// import React, { useEffect, useState } from 'react'
// import Style from './css/MainBox.module.css'

// const MainBox = () => {

//   let [state, setState] = useState([]);

//   async function apiData() {

//     const params = {
//       part: "snippet,statistics",
//       chart: "mostPopular",
//       maxResults: 49,
//       regionCode: "IN",
//       key: import.meta.env.VITE_YOUTUBE_API_KEY
//     };

//     let fetchData = await fetch(
//       `https://www.googleapis.com/youtube/v3/videos?${new URLSearchParams(params)}`
//     );

//     let data = await fetchData.json();
//     setState(data.items);
//   }

//   useEffect(() => {
//     apiData();
//   }, []);

//   console.log(state);

//   return (
//     <main className={Style.main}>

//       {
//         state?.map((data) => {
//           return (
//             <article key={data.id} className={Style.article}>
//               <div>
//                 <img
//                   src={data.snippet.thumbnails.standard?.url || data.snippet.thumbnails.high.url}
//                   alt={data.snippet.title}
//                 />
//               </div>

//               <div>
//                 <h2>{data.snippet.title}</h2>
//               </div>

//               <div>
//                 <h3>{data.snippet.channelTitle}</h3>
//               </div>
//             </article>
//           );
//         })
//       }

//     </main>
//   );
// }

// export default MainBox;
import React, { useEffect, useState } from "react";
import Style from "./css/MainBox.module.css";
import PlayVideo from "../components/Playvideo";

const MainBox = () => {
  let [state, setState] = useState([]);
  let [video, setVideo] = useState(null);

  async function apiData() {
    const params = {
      part: "snippet,statistics",
      chart: "mostPopular",
      maxResults: 900,
      regionCode: "IN",
      key: import.meta.env.VITE_YOUTUBE_API_KEY,
    };

    let fetchData = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?${new URLSearchParams(
        params
      )}`
    );

    let data = await fetchData.json();
    setState(data.items);
  }

  useEffect(() => {
    apiData();
  }, []);

  return (
    <>
      {video ? (
        <div className={Style.watchPage}>
       
          <div className={Style.left}>
            <PlayVideo video={video} />
          </div>

          
          <div className={Style.right}>
            {state?.map((data) => {
              return (
                <article
                  key={data.id}
                  className={Style.sideArticle}
                  onClick={() => setVideo(data)}
                >
                  <div>
                    <img
                      src={data.snippet.thumbnails.medium.url}
                      alt={data.snippet.title}
                    />
                  </div>

                  <div>
                    <h4>{data.snippet.title.slice(0, 45)}</h4>
                    <p>{data.snippet.channelTitle}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      ) : (
        <main className={Style.main}>
          {state?.map((data) => {
            return (
              <article
                key={data.id}
                className={Style.article}
                onClick={() => setVideo(data)}
              >
                <div>
                  <img
                    src={data.snippet.thumbnails.standard.url}
                    alt={data.snippet.title}
                  />
                </div>

                <div>
                  <h2>{data.snippet.title.slice(0, 50)}</h2>
                </div>

                <div>
                  <h3>{data.snippet.channelTitle}</h3>
                </div>
              </article>
            );
          })}
        </main>
      )}
    </>
  );
};

export default MainBox;
