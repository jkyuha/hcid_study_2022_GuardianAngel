import emailjs from '@emailjs/browser';
import{ init } from '@emailjs/browser';

console.log("guardian angel watching...")

const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  // Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
  let value = params.q; 
  console.log(`your search query is ${value}`) 

  function die_alert(e) {
      if (e.indexOf("die") != -1) {
          console.log("WARNING: word 'die' has been detected");
          console.log("*** guardian angel activated ***");

        // EmailJS

        init("YOUR USER ID");

        var templateParams = {
            name: 'Kyuha',
            notes: value,
            relationship: 'cat',
            precious_one: 'Garfield',
            city: 'Seoul',
            hotline_seoul: '02-999-1004'
        };
         
        emailjs.send('YOUR SERVICE ID', 'YOUR TEMPLATE ID', templateParams)
            .then(function(response) {
               console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
               console.log('FAILED...', error);
            });

        // EmailJS  

         } else {
          console.log(`SAFE: thank god that you searched ${e}`)
         }
       }

let g_angel = die_alert(value)