
  // Mark animation, several animations needed due to players diffrent positions.
  // Look into if you can have target goal cordinates instead.
  const animationMark = [
    { 
      transform: 'translateX(1px) rotate(4deg)', 
      transformOrigin: 'center', 
      filter: 'blur(8px)', 
      opacity: 0.6 
      },
      { 
        transform: 'translateX(300px) rotate(360deg)',
        transformOrigin: 'center',
        filter: 'blur(0)',
        opacity: 1 
      }
    ];
  
    const animationMarkRightSide = [
    { 
      transform: 'translateX(1px) rotate(4deg)', 
      transformOrigin: 'center', 
      filter: 'blur(8px)', 
      opacity: 0.6 
      },
      { 
        transform: 'translateX(-300px) rotate(360deg)',
        transformOrigin: 'center',
        filter: 'blur(0)',
        opacity: 1 
      }
    ];
  
    const animationMarkDownSide = [
    { 
      transform: 'translateY(1px) rotate(4deg)', 
      transformOrigin: 'center', 
      filter: 'blur(8px)', 
      opacity: 0.6 
      },
      { 
        transform: 'translateY(-300px) rotate(360deg)',
        transformOrigin: 'center',
        filter: 'blur(0)',
        opacity: 1 
      }
    ];
  
    const optionsMark = {
      iterations: 1,
      iterationStart: 0,
      delay: 0,
      endDelay: 0,
      duration: 700,
      fill: 'forwards',
      easing: 'ease-out',
    }
  
  export function animateMarker(currentPlayer) {
    switch (currentPlayer) {
    case 'player1':
    case 'player2':
      let element  = document.querySelector(`.img-mark-${currentPlayer}`);
      element.animate(animationMark,optionsMark);
      break;
    case 'player3':
    case 'player4':
      document.querySelector(`.img-mark-${currentPlayer}`).animate (animationMarkRightSide,optionsMark);
      break;
    case 'player5':
      document.querySelector(`.img-mark-${currentPlayer}`).animate (animationMarkDownSide,optionsMark);
      break;
    default:
      console.log('Sorry, no player mark found');
    }
  };
  
