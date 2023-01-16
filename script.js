(function (){
    const button = document.querySelectorAll('.btn');
    const clear = document.querySelector('.clearBtn')
    const screen = document.querySelector('.screen')
    const equals = document.querySelector('.equalsBtn')
    const backspace = document.querySelector('.backspace')    
        button.forEach(function(button){
            button.addEventListener('click',function(e){
                let value = e.target.dataset.value;
                screen.value += value
                let audio = new Audio("audio.mp3");
                audio.play()
             })
        })
        equals.addEventListener('click', function(e){
            if(screen.value === ''){
                screen.value = '';
            } else {
                let answer = eval(screen.value);
                screen.value = answer;
            }
        })
        clear.addEventListener('click', function(e){
            screen.value = '';
            let audio = new Audio('poof.mp3');
            audio.play()
        })
        backspace.addEventListener('click', function(e){
            let audio = new Audio('delete.mp3');
            screen.value = Math.floor(screen.value / 10)
            if (screen.value === 'NaN') {
                screen.value = ''
            }
            
        })

})()