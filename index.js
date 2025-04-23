
  // 1 A user has 3 attempts to log in. Simulate failed login attempts using while. After 3, show "Account locked".
  const loginAttempts=()=>{
    let loginAttempts=1;
    while(loginAttempts<=3){
        console.log(`Login attempt ${loginAttempts}`);
        loginAttempts+=1;

    }
    console.log("More than 3 attempt; Account locked!");
};
loginAttempts();

// 2 Users are voting on a feature. Use do...while to log each vote from an array until all votes are processed.
function voter(votes){
  for(let vote=0;vote<votes.length;vote++){
    do{
      console.log(votes[vote]);
    }
    while(votes[votes.length]);
  }
};
 votes=['voting1','voting2','voting3']; 
voter(votes);
  
  //3 Loop through an array of numbers from 1–7 and use a switch to print the corresponding day name.

function matchDay(days){
    days.forEach(day=>{
        switch(day){
          case 1:
            console.log(`Day ${day} is Monday`);
            break;
          case 2:
            console.log(`Day ${day} is Tuesday`);
            break;
          case 3:
            console.log(`Day ${day} is Wednesday`);
            break;
          case 4:
            console.log(`Day ${day} is Thursday`);
            break;
          case 5:
            console.log(`Day ${day} is Friday`);
            break;
          case 6:
            console.log(`Day ${day} is Saturday`);
            break;
          case 7:
            console.log(`Day ${day} is Sunday`);
            break;
          default:
            console.log("No match");
            break;
        }
    });
  }; 
  let days=[1,2,3,4,5,8,7,6,9,0];
  matchDay(days);
  
  //4 Given an array of password strings, use if...else to: log "Strong" if length >= 8, and "Weak" otherwise.

  function identifyStrength(passwordStrings){
    passwordStrings.forEach(password=>{
      if (password.length>=8){
        console.log("Strong password");
      }
      else{
        console.log("Weak password");
      }
    })
  };
  let passwordStrings=["lwa23445m","codehive2025","rewrite"];
  identifyStrength(passwordStrings);
  
  //5 You're building a multilingual site. Use a switch to show greetings based on language codes. I.e "en" → "Hello", "fr" → "Bonjour", "sw" → "Habari".

  
  function multilingualSite(greetings){
              greetings.forEach(greeting=>{
            switch(greeting){
              case 'en':
                console.log(`Greeting in '${greeting}' language is Hello.`);
                break;
              case 'fr':
                console.log(`Greeting in '${greeting}' language is Bonjour`);
                break;
              case 'sw':
                console.log(`Greeting in '${greeting}' language is Habari`);
                break;
              default:
                console.log("  Selam dyu ");
                break;
            }
          })
      };
   let greetings=['hi','en','tg'];
   multilingualSite(greetings);
  
   //6 You're building a weather dashboard. Loop through an array of temperatures and: If above 30, log "High heat alert!", else if below 15, log "Cold alert!", else, log "Normal conditions"

  
  function weatherInCelsius(temperature){
    temperature.forEach(temprate=>{
      if (temprate>30){
        console.log(`${temprate} degree -High Heat alert. `);
      }
      else if(temprate<15 ){
        console.log(`${temprate} degree -cold heat alert.`);
      }
      else{
        console.log(`${temprate} degree-Normal condition`);
      
      }
    })
  };
  
  let temperature=[23,45,67,29];
  weatherInCelsius(temperature);


//7 Users are queued to register. Use a while loop to remove and print each name until the queue is empty.

function registrationQueue(queue){
  console.log(queue);
    while(queue.length>0){
        const nextUser=queue.shift();
        console.log(`${nextUser} removed`)
        console.log(queue);
    }
    console.log("all users have been registered");
}
queue=['Lwam','Hewan','Mercylin'];
registrationQueue(queue);



  //8 Students retake a test until they score 50 or more. Use do...while to simulate attempts, increasing the score by 10 each time until it's >= 50.
  
  function testRetake(intialScore){
    intialScore.forEach(score =>{

    do{
        console.log(`current score is ${score}`);
        score=score+10;
    }
    while(score<=50);
    console.log(`final score ${score}`);
  });
  };

   intialScore=[20,45,67,89];
  testRetake(intialScore);
  