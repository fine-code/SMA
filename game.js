function start(){
    createMathProblems();
    startGame();
    
 }
 
 
 var arr= [];
 var answerArr=[];
 
 function createMathProblems(){
     var str=readLine("What type of math are you practicing (addition, subtraction, multiplication, or division)?");
     var num1=readInt("What number are you practicing with?");
 
     
     if (str=="addition"){
         for (var i=0; i<100;i++){
             var interger= Randomizer.nextInt(num1, 12);
             arr.push(num1+"+"+interger );
             
             
         }
             
     }else if(str=="subtraction"){
         for (var i=0; i<100;i++){
             var interger= Randomizer.nextInt(num1-1,12);
             arr.push(num1+"-"+interger);
             
         }
         
     }else if(str=="multiplication"){
         for (var i=0; i<100; i++){
             var interger= Randomizer.nextInt(num1-1,12);
             arr.push(num1+"*"+interger);
             
         }
        
     }else{
         for (var i=0; i<100; i++){
             var interger= Randomizer.nextInt(num1-1,12);
             arr.push(num1+"/"+interger);
             
         
     }
 }
 }
 
 
 function startGame(){
     var txt=new Text ("Directions: Each ballon has a math .", "20pt Lobster");
     txt.setPosition(20, getHeight()/2-25);
     txt.setColor(Randomizer.nextColor());
     add(txt);
     
     var txt1=new Text("     problem on it. It is your job", "20pt Lobster");
     txt1.setPosition(20, getHeight()/2);
     txt1.setColor(Randomizer.nextColor());
     add(txt1);  
     
     var txt2=new Text("to click the right answer to pop it!", "20pt Lobster");
     txt2.setPosition(20, getHeight()/2+25);
     txt2.setColor(Randomizer.nextColor());
     add(txt2);
     
     var txt3=new Text("Click your mouse to begin your game", "10pt Arial");
     txt3.setPosition(getWidth()/4, getHeight()/2+100);
     txt3.setColor(Color.black);
     add(txt3);
     
     mouseClickMethod(bringBallons);
     
     
 }
 
 
 var elem= arr[35];
 
 var totalScore=0;
 
 
 function bringBallons(){
     var backround= new Rectangle(getWidth(),getHeight());
     backround.setColor(Color.white);
     backround.setPosition(0,0);
     add(backround);
 
     var line= new Line (getWidth()/2, getHeight()/2.5, getWidth()/2, getHeight()-100);
     line.setColor(Color.black);
     line.setLineWidth(5);
     add(line);
     
     var oval = new Oval(80, 130);
     oval.setPosition(getWidth()/2, getHeight()/2.5);
     oval.setColor(Randomizer.nextColor());
     add(oval);
     
     var txt= new Text(elem, "30pt Arial");
     txt.setPosition(getWidth()/2-26, getHeight()/2.5);
     txt.setColor(Color.white);
     add(txt);
     
 }