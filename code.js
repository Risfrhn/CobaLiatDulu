document.addEventListener('DOMContentLoaded', () => {
    const animationTimeline = gsap.timeline();

    animationTimeline
        .set('.container', { visibility: 'visible' })

        .from('.p', { opacity: 0, y: 10, duration: 0.7 })
        .from('.two img', { opacity: 0, y: 10, duration: 0.7 }, "-=5")
        .from('.text', { opacity: 0, y: 10, duration: 0.7, onComplete: startTypingAnimation })
        .from('.five p', { opacity: 0, y: 10, duration: 0.7 })

        .staggerTo(".four svg", 1.5, {
            visibility: "visible",
            opacity: 0,
            scale: 80,
            repeat: -1,
            repeatDelay: 1.4,
        }, 0.1)

        .from('.sinchan1', { opacity: 100, x: -1000, duration: 5 }, '<')
        .from('.sinchan2', { opacity: 100, x: 1000, duration: 5 }, '<')
        .call(startShakeAnimation);

        function startTypingAnimation() {
            const ucapanElement = document.querySelector('.text');
            const text = 'kalo kamu tanya fotonya dapat darimana, fotonya tu dapat dari nanda aku mau minta kamu ga enak ntar dikira mau dibuat apa soalnya pas aku minta nanda juga dikira buat nyantet ajr :) sorryy yaa ga bilang bilang';

            let currentText = '';
            let i = 0;
            const typingInterval = 50; 

            function typeText() {
                currentText += text.charAt(i);
                ucapanElement.textContent = currentText;

                i++;
                if (i < text.length) {
                    setTimeout(typeText, typingInterval);
                } else {
                    startTypingSpan();
                }
            }
            setTimeout(typeText, 1000); 
        }

        function startShakeAnimation() {
            const pElement = document.querySelector('.p');
            gsap.fromTo(
                pElement,
                { x: -5, y: 0 },
                {
                    x: 5,
                    y: 0,
                    duration: 0.05,
                    repeat: 1,
                    yoyo: true,
                    ease: 'power1.inOut',
                    onComplete: startShakeAnimation 
                }
            );
        }



        // batas --------------------------------------------------------------------------------------------
        function removeAllElements() {
            
            const elementsToRemove = document.querySelectorAll('.container');
    
            gsap.to(elementsToRemove, {
                opacity: 0,
                duration: 0.5,
                onComplete: () => {
                    elementsToRemove.forEach((element) => {
                      element.style.display = 'none';
                    });
                    gsap.delayedCall(1, showSixAnimation);
                  },
                
                });
    
            document.removeEventListener('click', removeAllElements);
    
        }
    
        document.addEventListener('click', removeAllElements);
        
    
        function showSixAnimation() {
            const sixElement = document.querySelector('.six');
            sixElement.style.display = 'block'; 
        
            const animationTimelineSix = gsap.timeline();
            animationTimelineSix
                .from(sixElement, { opacity: 0, y: 10, duration: 0.7 })
                .to(sixElement, { opacity: 0, y: 10, duration: 0.7 }, '+=3')
                .call(() => {
                    sixElement.style.display = 'none';
                    showSevenAnimation(); 
                });
        }
    
        function showSevenAnimation() {
            const sevenElement = document.querySelector('.seven');
            sevenElement.style.display = 'block'; 
        
            const animationTimelineSeven = gsap.timeline(); 
            animationTimelineSeven
                .from(sevenElement, { opacity: 0, y: 10, duration: 0.7 })
                .to(sevenElement, { opacity: 0, y: 10, duration: 0.7 }, '+=3')
                .call(() => {
                    sevenElement.style.display = 'none'; 
                    showEightAnimation(); 
                });
        }
        
        function showEightAnimation() {
            const eightElement = document.querySelector('.eight');
            eightElement.style.display = 'block'; 
        
            const animationTimelineEight = gsap.timeline(); 
            animationTimelineEight
                .from(eightElement, { opacity: 0, y: 10, duration: 0.7, delay: 0.5 })
                .to(eightElement, { opacity: 0, y: 10, duration: 0.7 }, '+=3')
        }
});