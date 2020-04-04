var Guesses = 3;
document.getElementById('NumGuess').innerHTML = Guesses;

   
var Remain = Guesses;


document.getElementById('NumGuess').innerHTML = Remain;

document.getElementById('Button').onclick = function FirstTransition() {
    
    

    const TheFirstButton = document.getElementById('Button');
    const FirstScreenText = document.getElementById('Text');
    const TheSecondButton = document.getElementById('TheNextButton')
    const TheSecondText = document.getElementById('GameText1')

    const TheEvenandOddButtons = document.getElementById('TheEven')
    const TheEvenOrOddText = document.getElementById('EvenOrOdd')
    const TheEvenButton = document.getElementById('EvenButton') 
    const TheOddButton = document.getElementById('OddButton')

    const UnderOrOver25Even = document.getElementById('UnderOrOver25Even')
    const UnderOrOver25Odd = document.getElementById('UnderOrOver25Odd')

    const UnderOrOver25EvenText = document.getElementById('UnderOrOver25EvenText');
    const UnderOrOver25OddText = document.getElementById('UnderOrOver25OddText');

    const RandomNumberButtons = document.getElementById('Random');
    const RandomNumberText = document.getElementById('NumberGuess');

    const ILost = document.getElementById('YouWin');
    const IWin = document.getElementById('YouLose');
    const TryAgain = document.getElementById('TryAgain');
    const PlayAgain = document.getElementById('PlayAgain');
    /* This is where the game starts
     * It transitions from the title screen 
     * to the first Part of the Game */

    TheFirstButton.style.display = ((TheFirstButton.style.display = 'inline-block') ? 'none' : 'none');
    FirstScreenText.style.display = ((FirstScreenText.style.display = 'inline-block') ? 'none' : 'none');
    TheSecondText.style.display = ((TheSecondText.style.display = 'none') ? 'inline-block' : 'none');
    TheSecondButton.style.display = ((TheSecondButton.style.display = 'none') ? 'inline-block' : 'none');

        document.getElementById('Button2').onclick = function SecondTransition() {
        
            TheSecondButton.style.display = ((TheSecondButton.style.display = 'inline-block') ? 'none' : 'inline-block');
            TheEvenandOddButtons.style.display = ((TheEvenandOddButtons.style.display = 'none') ? 'inline-block' : 'none');
            TheSecondText.style.display = ((TheSecondText.style.display = 'inline-block') ? 'none' : 'inline-block');
            TheEvenOrOddText.style.display = ((TheEvenOrOddText.style.display = 'none') ? 'inline-block' : 'none');
        };
            //Runs if the user selects Even
        document.getElementById('EvenButton').onclick = function ThirdTransitionEven() {
            TheEvenOrOddText.style.display = ((TheEvenOrOddText.style.display = 'inline-block') ? 'none' : 'inline-block');
            TheEvenButton.style.display = ((TheEvenButton.style.display = 'inline-block') ? 'none' : 'inline-block');
            TheOddButton.style.display = ((TheOddButton.style.display = 'inline-block') ? 'none' : 'inline-block');    
            UnderOrOver25Even.style.display = ((UnderOrOver25Even.style.display = 'none') ? 'inline-block' : 'none');
            UnderOrOver25EvenText.style.display = ((UnderOrOver25EvenText.style.display = 'none') ? 'inline-block' : 'none');

            //Runs if the user selects both Even and Over 25
            document.getElementById('Over25ButtonEven').onclick = function StartGuess_Over25_Even() {
                UnderOrOver25Even.style.display = ((UnderOrOver25Even.style.display = 'inline-block') ? 'none' : 'inline-block');
                RandomNumberText.style.display = ((RandomNumberText.style.display = 'none') ? 'inline-block' : 'none');
                RandomNumberButtons.style.display = ((RandomNumberButtons.style.display = 'none') ? 'inline-block' : 'none');
                document.getElementById('Over25ButtonEven').onclick = EvenOver25Generator.GenerateEvenNumber();
                document.getElementById('No').onclick = function GuessAgain() {
                    Guesses -= 1;
                    var Remain = Guesses;
                    document.getElementById('NumGuess').innerHTML = Remain;                   
                    EvenOver25Generator.GenerateEvenNumber();
                    if (Remain == 0) {
                        RandomNumberButtons.style.display = ((RandomNumberButtons.style.display = 'inline-block') ? 'none' : 'inline-block');
                    }



                }
            }

            //Runs if the User selecs both Even and Under 25
            document.getElementById('Under25ButtonEven').onclick = function StartGuess_Under25_Even() {
                UnderOrOver25Even.style.display = ((UnderOrOver25Even.style.display = 'inline-block') ? 'none' : 'inline-block');
                RandomNumberText.style.display = ((RandomNumberText.style.display = 'none') ? 'inline-block' : 'none');
                RandomNumberButtons.style.display = ((RandomNumberButtons.style.display = 'none') ? 'inline-block' : 'none');
                document.getElementById('Under25ButtonEven').onclick = EvenGenerator.sayEvenNumber();
                    document.getElementById('No').onclick = function GuessAgain() {
                        Guesses -= 1;
                        var Remain = Guesses;
                        document.getElementById('NumGuess').innerHTML = Remain;                        
                        EvenGenerator.sayEvenNumber();
                        if (Remain == 0) {
                            RandomNumberButtons.style.display = ((RandomNumberButtons.style.display = 'inline-block') ? 'none' : 'inline-block');
                        }


                }
            }
        }

            //Runs if the user selects odd
        document.getElementById('OddButton').onclick = function ThirdTransitionOdd() {
            TheEvenOrOddText.style.display = ((TheEvenOrOddText.style.display = 'inline-block') ? 'none' : 'inline-block');
            TheEvenButton.style.display = ((TheEvenButton.style.display = 'inline-block') ? 'none' : 'inline-block');
            TheOddButton.style.display = ((TheOddButton.style.display = 'inline-block') ? 'none' : 'inline-block');
            UnderOrOver25Odd.style.display = ((UnderOrOver25Odd.style.display = 'none') ? 'inline-block' : 'none');
            UnderOrOver25OddText.style.display = ((UnderOrOver25OddText.style.display = 'none') ? 'inline-block' : 'none');


            //Runs if the User selects Both odd and Over 25
            document.getElementById('Over25ButtonOdd').onclick = function StartGuess_Over25_Even() {
                UnderOrOver25Odd.style.display = ((UnderOrOver25Odd.style.display = 'inline-block') ? 'none' : 'inline-block');
                RandomNumberText.style.display = ((RandomNumberText.style.display = 'none') ? 'inline-block' : 'none');
                RandomNumberButtons.style.display = ((RandomNumberButtons.style.display = 'none') ? 'inline-block' : 'none');
                document.getElementById('Over25ButtonOdd').onclick = OddOver25Generator.GenerateOddNumber();
                document.getElementById('No').onclick = function GuessAgain() {
                    Guesses -= 1;
                    var Remain = Guesses;
                    document.getElementById('NumGuess').innerHTML = Remain;
                    OddOver25Generator.GenerateOddNumber();
                    if (Remain == 0) {
                        RandomNumberButtons.style.display = ((RandomNumberButtons.style.display = 'inline-block') ? 'none' : 'inline-block');
                    }

                }
                   
                
                
            }

            //Runs if the User selects Both Odd and Under 25
            document.getElementById('Under25ButtonOdd').onclick = function StartGuess_Under25_Odd() {
                UnderOrOver25Odd.style.display = ((UnderOrOver25Odd.style.display = 'inline-block') ? 'none' : 'inline-block');
                RandomNumberText.style.display = ((RandomNumberText.style.display = 'none') ? 'inline-block' : 'none');
                RandomNumberButtons.style.display = ((RandomNumberButtons.style.display = 'none') ? 'inline-block' : 'none');
                document.getElementById('Under25ButtonOdd').onclick = OddGenerator.sayOddNumber();
                    document.getElementById('No').onclick = function GuessAgain() {
                        
                        Guesses -= 1;
                        var Remain = Guesses;
                        document.getElementById('NumGuess').innerHTML = Remain;
                        OddGenerator.sayOddNumber();
                        if (Remain == 0) {
                            RandomNumberButtons.style.display = ((RandomNumberButtons.style.display = 'inline-block') ? 'none' : 'inline-block');
                            ILost.style.display = ((ILost.style.display = 'none') ? 'inline-block' : 'none');
                        }

                        }


                }
            }

    document.getElementById('Yes').onclick = function () {
        RandomNumberButtons.style.display = ((RandomNumberButtons.style.display = 'inline-block') ? 'none' : 'inline-block');
        IWin.style.display = ((IWin.style.display = 'none') ? 'inline-block' : 'none');
        TryAgain.style.display = ((TryAgain.style.display = 'none') ? 'inline-block' : 'none');
    }
            
    }
    
    


