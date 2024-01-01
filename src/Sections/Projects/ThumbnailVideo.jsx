/* eslint-disable react/prop-types */
import { useRef, useState, useEffect } from "react";

const isSafari = () => {
  const ua = navigator.userAgent.toLowerCase();
  return ua.indexOf("safari") > -1 && ua.indexOf("chrome") < 0;
};

export default function ThumbnailVideo({children}) {
  const videoParentRef = useRef();
 
  const [shouldUseImage, setShouldUseImage] = useState(false);




  useEffect(() => {
    // check if user agent is safari and we have the ref to the container <div />
    if (isSafari() && videoParentRef.current) {
      // obtain reference to the video element
      const player = videoParentRef.current.children[0];

      // if the reference to video player has been obtained
      if (player) {
        // set the video attributes using javascript as per the
        // webkit Policy
        player.controls = false;
        player.playsinline = true;
        player.muted = true;
        player.setAttribute("muted", ""); // leave no stones unturned :)
        player.autoplay = true;

         let options = {
           rootMargin: "0px",
           threshold: [0.25, 0.75],
         };

         let handlePlay = (entries, observer) => {
           entries.forEach((entry) => {
             if (entry.isIntersecting) {
               player.play();
             } else {
               player.pause();
             }
           });
         };

         let observer = new IntersectionObserver(handlePlay, options);

         observer.observe(player);


        // Let's wait for an event loop tick and be async.
        setTimeout(() => {
          // player.play() might return a promise but it's not guaranteed crossbrowser.
          const promise = player.play();
          // let's play safe to ensure that if we do have a promise
          if (promise.then) {
            promise
              .then(() => {})
              .catch(() => {
                // if promise fails, hide the video and fallback to <img> tag
                videoParentRef.current.style.display = "none";
                setShouldUseImage(true);
              });
          }
        }, 0);
      }
    }
  }, []);

  return shouldUseImage ? (
    <img className=" w-full object-cover" src={children} alt="Muted Video" />
  ) : (
    <div
      id=""
      className=""
      ref={videoParentRef}
      dangerouslySetInnerHTML={{
        __html: `
        <video
         
        class='w-full object-cover '
          loop
          muted
          autoplay
          playsinline
          preload="metadata"
        >
        <source src="${children}" type="video/mp4" />
        </video>`,
      }}
    />
  );
}
