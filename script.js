  function subscribe() {
        const buttonElement = document.querySelector('.js-subscribe-button');

        if (buttonElement.innerText === 'Subscribe') {
          buttonElement.innerHTML = 'Subscribed';
          buttonElement.classList.add('is-subscribed');
        } else {
          buttonElement.innerHTML = 'Subscribe';
          buttonElement.classList.remove('is-subscribed');
        }
      }

        function cost1(event){
            if (event.key === 'Enter'){
                calculateShipping();
            }
        }
        function calculateShipping(){
            const input=document.querySelector('.js-cost-input');
            let cost=Number(input.value);
            
            if (cost < 40){
                cost=cost+10;

            }
          document.querySelector('.js-result').
          innerHTML = `$${cost}`;
        }
    