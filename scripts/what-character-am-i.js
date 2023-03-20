

// const question1 = () => {

//     const questionText = document.getElementById('question');
//       questionText.innerHTML = 'Question goes here';
//       const answerTraits = ['smug', 'mean', 'annoying'];
    
    
//     const answer1 = document.getElementById('answer1');
//       answer1.innerHTML = `<input id ="radio1" class="inline" type="radio" name="radio" value="smug" required>
//       Answer 01 from JavaScript`;
//       const answer1Value = answer1.value = Text;
    
//     const answer2 = document.getElementById('answer2');
//       answer2.innerHTML = `<input id ="radio2" class="inline" type="radio" name="radio" value="mean" required>
//       Answer 02 this is the other from javaScript`;
    
//     const answer3 = document.getElementById('answer3');
//       answer3.innerHTML = `<input id ="radio3" class="inline" type="radio" name="radio" value="annoying" required>
//       Answer 03 from javaScript`;
    
//     const nextQuestionButton = document.getElementById("bttnNextQuestion");
    
//     const submit = nextQuestionButton.onclick = function() {
//       let value = document.getElementsByName("radio");
//       let selectValue = Array.from(value).find(radio => radio.checked);
//       const finalValue = selectValue.value;
//       console.log(finalValue);
//       alert(finalValue);
//     }
    
//     const endQuizButton = document.getElementById('bttnLeaveQuiz')
    
//     const endQuiz = endQuizButton.onclick = function() {
//       document.getElementsByClassName('answer').required = false;
//     }
    
//     }
    
    
//     question1();
    
    
    
    
    
    //Next we create the function and store it in a variable. This function contains most of the program. We give it as many parameters as questions we have-- Each question answered will eventually be passed into one of these parameters.
    let whatCharacterAmI = function(userTrait1, userTrait2, userTrait3, userTrait4, userTrait5, userTrait6) {
    
        //These variables declare the individual traits for each character inside an array. 
    const traitsDwight = ['angry-easily', 'aggressive', 'focused', 'harsh', 'beets', 'bears', 'impulsive', 'suspicious', 'thinks-he-is-smart'];
    const traitsJim = ['silly', 'prankster', 'head-strong', 'apathetic', 'awkward', 'laid back', 'stares-at-camera', 'romantic', 'rolled-up sleeves', 'caring', 'slacker'];
    const traitsPam = ['silly', 'reserved', 'focused', 'awkward', 'non-committal', 'gentle', 'receptionist', 'technically-a-cheater', 'kissed-jim-while-drunk', 'artistic', 'low-motivation'];
    const traitsMichael = ['need-to-be-loved', 'suspicious', 'head-strong', 'enthusiastic', 'unpredictable', 'unfocused', 'lover-first', 'jokster', 'goes-too-far', 'romantic', 'good-heart', 'not-self-aware'];
    const traitsRyan = ['know-it-all', 'cunning', 'non-committal', 'harsh', 'apathetic', 'unpredictable', 'suspicious', 'thinks-he-is-smart', 'sarcastic', 'wuphf.com', 'better-than-you'];
    const traitsAndy = ['enthusiastic', 'angry-easily', 'unpredictable', 'likes-to-sing', 'cornell', 'impulsive', 'suspicious', 'laid-back', 'impulsive', 'silly', 'cries-easily', 'compassionate', 'loyal'];
    
    
    //This variable declares each of the characters we have as possible answers.
    const characterList = ['Dwight', 'Jim', 'Pam', 'Michael', 'Ryan', 'Andy'];
    
    // Before declaring the function, we create a variable to count the indexes of each character that matches our traits.
    let dwightIndexCounter = 0;
    let jimIndexCounter = 0;
    let pamIndexCounter = 0;
    let michaelIndexCounter = 0;
    let ryanIndexCounter = 0;
    let andyIndexCounter = 0;
      
      //This is the first for loop. It looks through all of the traits in traitsDwight and sees if any of them match to the inputed userTraits (the parameters of the function). Each time a trait matches, the index of that character is added to characterIndexCounter.
      for (let i = 0; i < traitsDwight.length; i++) {
        if (traitsDwight[i] === userTrait1) {
          dwightIndexCounter++;
        }
        if (traitsDwight[i] === userTrait2) {
          dwightIndexCounter++;
        }
        if (traitsDwight[i] === userTrait3) {
          dwightIndexCounter++;
        }
        if (traitsDwight[i] === userTrait4) {
          dwightIndexCounter++;
        }
        if (traitsDwight[i] === userTrait5) {
          dwightIndexCounter++;
        }
        if (traitsDwight[i] === userTrait6) {
          dwightIndexCounter++;
        }
      }
      
      //This is the second for loop. It searches through traitsJim for matches.
      for (let i = 0; i < traitsJim.length; i++) {
        if (traitsJim[i] === userTrait1) {
          jimIndexCounter++;
        }
        if (traitsJim[i] === userTrait2) {
          jimIndexCounter++;
        }
        if (traitsJim[i] === userTrait3) {
          jimIndexCounter++;
        }
        if (traitsJim[i] === userTrait4) {
          jimIndexCounter++;
        }
        if (traitsJim[i] === userTrait5) {
          jimIndexCounter++;
        }
        if (traitsJim[i] === userTrait6) {
          jimIndexCounter++;
        }
      }
      
      //This is the third for loop. It searches through traitsPam for matches.
      for (let i = 0; i < traitsPam.length; i++) {
        if (traitsPam[i] === userTrait1) {
          pamIndexCounter++;
        }
        if (traitsPam[i] === userTrait2) {
          pamIndexCounter++;
        }
        if (traitsPam[i] === userTrait3) {
          pamIndexCounter++;
        }
        if (traitsPam[i] === userTrait4) {
          pamIndexCounter++;
        }
        if (traitsPam[i] === userTrait5) {
          pamIndexCounter++;
        }
        if (traitsPam[i] === userTrait6) {
          pamIndexCounter++;
        }
      }
      
      // This for loop searches through traitsMichael.
      for (let i = 0; i < traitsMichael.length; i++) {
        if (traitsMichael[i] === userTrait1) {
          michaelIndexCounter++;
        }
        if (traitsMichael[i] === userTrait2) {
          michaelIndexCounter++;
        }
        if (traitsMichael[i] === userTrait3) {
          michaelIndexCounter++;
        }
        if (traitsMichael[i] === userTrait4) {
          michaelIndexCounter++;
        }
        if (traitsMichael[i] === userTrait5) {
          michaelIndexCounter++;
        }
        if (traitsMichael[i] === userTrait6) {
          michaelIndexCounter++;
        }
      }
      
      // This for loop searches through traitsRyan.
      for (let i = 0; i < traitsRyan.length; i++) {
        if (traitsRyan[i] === userTrait1) {
          ryanIndexCounter++;
        }
        if (traitsRyan[i] === userTrait2) {
          ryanIndexCounter++;
    
        }
        if (traitsRyan[i] === userTrait3) {
          ryanIndexCounter++;
        }
        if (traitsRyan[i] === userTrait4) {
          ryanIndexCounter++;
        }
        if (traitsRyan[i] === userTrait5) {
          ryanIndexCounter++;
        }
        if (traitsRyan[i] === userTrait6) {
          ryanIndexCounter++;
        }
      }
      
      // This for loop searches through traitsAndy.
      for (let i = 0; i < traitsAndy.length; i++) {
        if (traitsAndy[i] === userTrait1) {
          andyIndexCounter++;
        }
        if (traitsAndy[i] === userTrait2) {
          andyIndexCounter++;
    
        }
        if (traitsAndy[i] === userTrait3) {
          andyIndexCounter++;
        }
        if (traitsAndy[i] === userTrait4) {
          andyIndexCounter++;
        }
        if (traitsAndy[i] === userTrait5) {
          andyIndexCounter++;
        }
        if (traitsAndy[i] === userTrait6) {
          andyIndexCounter++;
        }
      }
      
      
    //This variable puts the final number of hits each character had into an array.  
    const characterHitNumbers = [dwightIndexCounter, jimIndexCounter, pamIndexCounter, michaelIndexCounter, ryanIndexCounter, andyIndexCounter];
    
    
    // We are now going to determine what to do IF the highest number duplicates or ties with any of the other highest hits.
    
    
    //Here we declare a few variables that we can use to find the highest hit number and therefore determine which character to display.
    let largestHitNumber = 0;
    let chosenCharacterIndex;
    let chosenCharacterString;
    
    
    //Here we are going to find out which character has the most hits.
    for (let i = 0; i < characterHitNumbers.length; i++) {
      if (characterHitNumbers[i] > largestHitNumber) {
        largestHitNumber = characterHitNumbers[i]
        chosenCharacterIndex = i;
        chosenCharacterString = characterList[chosenCharacterIndex];
        }
       }
     
    
    const chosenCharacterIndexConstant = chosenCharacterIndex;
    const chosenCharacterStringConstant = chosenCharacterString;
    const largestHitNumberConstant = largestHitNumber; 
    
    
    //Next, we determine if the highest hit character has any other characters with the same number of hits, i.e. a tie.    
     
      
    let areThereDuplicates;
      //This variable creates an array to store the duplicated indexes in (if there are any). It begins by storing the chosenCharacterIndex, which is effectively just the highest hit number.
     let getDuplicateCharacterIndexes = [chosenCharacterIndexConstant];
    
     
     //This for loop finally determines if there are duplicates. 
     for (let i = 0; i < characterHitNumbers.length; i++) {
      
       //are there any duplicates of the largest number?
       if (i !== chosenCharacterIndexConstant) {
         if (characterHitNumbers[i] == largestHitNumberConstant) {
    
           //This pushes the current index into the array. It will now display both the chosenCharacterIndex, as well as i since it is a duplicate.
           getDuplicateCharacterIndexes.push(i);
           areThereDuplicates = true;
         } else {
           areThereDuplicates = false;
         }
       }
     }
    
    console.log('are there duplicates = ' + areThereDuplicates);
      
    
     
      //These two if statements determine what to do if there are or aren't duplicates.
      if (areThereDuplicates = false) {
        console.log('characterHitNumbers for Dwight, Jim, and Pam, Michael, Ryan, and Andy respectively: ' + characterHitNumbers);
        console.log('index [' + chosenCharacterIndexConstant + '] had ' + largestHitNumberConstant + ' hits-- This is the most hits.');
        const chosenCharacter = chosenCharacterStringConstant;
         console.log('Largest hit and therefore final character list: ' + chosenCharacter);
      
    console.log ('chosenCharacterStringConstant = ' + chosenCharacterStringConstant);  
    console.log ('chosenCharacterStringConstant type = ' + typeof(chosenCharacterStringConstant));
      return chosenCharacter;
    
      
     
     } 
     if (areThereDuplicates = true) {
        // else was chosen, which means that there ARE duplicates. We are going to randomly choose one of the duplicated values.
        console.log('characterHitNumbers for Dwight, Jim, and Pam, Michael, Ryan, and Andy respectively: ' + characterHitNumbers);
       console.log('indexes of duplicates: ' + getDuplicateCharacterIndexes);
       const randomIndex = Math.floor(Math.random() * getDuplicateCharacterIndexes.length);
       const randomItem = item = getDuplicateCharacterIndexes[randomIndex];
       console.log('random index chosen: ' + randomIndex);
       console.log('random item chosen: ' + randomItem);
      
       //get the index item of the randomly chosen index
       const chosenCharacter = characterList[randomItem];
       console.log('Largest hit was duplicated, so we randomly selected one. Your final character is: ' + chosenCharacter);
    
    console.log ('chosenCharacterStringConstant = ' + chosenCharacterStringConstant)   
        
       
       return chosenCharacter;
     }
     
     
    
    }
    
    
    
    //For testing purposed only
    /* Note that in order to store the function return value in a variable, we must
    run that function INSIDE the variable we want to assign return to. */
    
    /*
    
    const finalCharacter = whatCharacterAmI('beets', 'angry-easily', 'receptionist', 'lover-first', 'compassionate', 'cries-easily');
    
    console.log(finalCharacter);
    
    // This switch case statement takes the returned character from the whatCharacterAmI function and determines what to tell the user.
    
    
    switch (finalCharacter) {
       case 'Jim':
        console.log('“ABSOLUTELY I DO.” Your character is Jim!') 
        break;
      case 'Dwight':
        console.log('"Today, smoking is going to save lives." Your character is Dwight!') 
        break;
      case 'Pam':
        console.log('“I DON’T CARE WHAT THEY SAY ABOUT ME. I JUST WANT TO EAT.” Your character is Pam!') 
        break;
      case 'Michael':
        console.log('“Guess what, I have flaws. What are they? Oh, I don’t know. I sing in the shower. Sometimes I spend too much time volunteering. Occasionally I’ll hit somebody with my car. So sue me.” Your character is Michael!') 
        break;
      case 'Andy':
        console.log('“I Went To Cornell. Ever Heard Of It?” Your character is Andy!') 
        break;
      case 'Ryan':
        console.log('“WUPHF” Your character is Ryan!') 
        break;
      default:
        console.log('Sorry, something went wrong.')
    }
    
    */
    
    
    
    
    
    
    
    