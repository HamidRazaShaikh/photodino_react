import React from 'react'
import useWebAnimations, {backInDown, backInUp } from '@wellyshen/use-web-animations';


export default function useAnimation () {

    const BackInDown = ()=> {
        const { keyframes, animationOptions } = backInUp;
        const animationDown = useWebAnimations({
            keyframes,
            animationOptions: {
              ...animationOptions,
              delay:200, // Delay 1s
              duration: animationOptions.duration * 0.6, // Speed up the animation
            },
          })

          return animationDown


    };

    const BackInUp = ()=> {
        const { keyframes, animationOptions } = backInDown;
        const animationUp = useWebAnimations({
            keyframes,
            animationOptions: {
              ...animationOptions,
              delay: 200, // Delay 1s
              duration: animationOptions.duration * 0.6, // Speed up the animation
            },
          })



          return animationUp


    }




return [BackInDown, BackInUp]
  

}


