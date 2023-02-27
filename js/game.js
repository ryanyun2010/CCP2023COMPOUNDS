let currentlySelectedElement = "none";
let elements = [];
let earthHasWater = false;
var justCreated = {"text":"ERROR","color":"red", "desc": "Please report this to a nearby Panda"};
var inJustCreated1 = false;
var inJustCreated2 = false;
var inFailedToCreate = false;
var inNotInData = false;
var inCreatedBefore = false;
var inRequires = false;
var numberOfCompoundsDiscovered = 0;



var currentCompound = {
    "H":0,
    "C":0,
    "O":0,
    "N":0,
    "P":0,
    "S":0,
}


var compounds = [
    {
        "name": {"text":"Water","color":"blue", "desc": "You now have a basic building block of life"},
        "effect":function(){
            earthHasWater = true;
            numberOfCompoundsDiscovered++;
        },
        "requires":[],
        "createdPreviously": false,
        "compound": {
            "H":2,
            "C":0,
            "O":1,
            "N":0,
            "P":0,
            "S":0
        }
    },
    {
        "name": {"text":"Carbon Dioxide","color":"black", "desc":"The world will now eventually burn"},
        "effect":function(){
            numberOfCompoundsDiscovered++;
        },
        "requires":[5],
        "createdPreviously": false,
        "compound": {
            "H":0,
            "C":1,
            "O":2,
            "N":0,
            "P":0,
            "S":0
        }
    },
    {
        "name": {"text":"Cellulose","color":"green", "desc":"The world is now greener."},
    "requires": [0,1],
        "effect":function(){
            numberOfCompoundsDiscovered++;
        },
        "createdPreviously": false,
        "compound": {
            "H":10,
            "C":6,
            "O":5,
            "N":0,
            "P":0,
            "S":0
        }
    },
    {
        "name": {"text":"Sugar","color":"black", "desc":"Sweeeeeeeeeeet."},
    "requires": [],
        "effect":function(){
            numberOfCompoundsDiscovered++;
        },
        "createdPreviously": false,
        "compound": {
            "H":22,
            "C":12,
            "O":11,
            "N":0,
            "P":0,
            "S":0
        }
    },
    {
        "name": {"text":"Fertilizer","color":"green", "desc":"The world is even more green"},
    "requires": [2],
        "effect":function(){
            numberOfCompoundsDiscovered++;
        },
        "createdPreviously": false,
        "compound": {
            "H":4,
            "C":0,
            "O":3,
            "N":2,
            "P":0,
            "S":0
        }
    },
    {
        "name": {"text":"Dioxide","color":"black", "desc":"You created a stabler form of oxygen"},
    "requires": [],
        "effect":function(){
            numberOfCompoundsDiscovered++;
        },
        "createdPreviously": false,
        "compound": {
            "H":0,
            "C":0,
            "O":2,
            "N":0,
            "P":0,
            "S":0
        }
    }
    ,
    {
        "name": {"text":"Sulfuric Acid","color":"red", "desc":"You now have a potent acid."},
    "requires": [],
        "effect":function(){
            numberOfCompoundsDiscovered++;
        },
        "createdPreviously": false,
        "compound": {
            "H":2,
            "C":0,
            "O":4,
            "N":0,
            "P":0,
            "S":1
        }
    }
    ,
    {
        "name": {"text":"Sulfate","color":"orange", "desc":"You created a salt of Sulfuric Acid"},
    "requires": [],
        "effect":function(){
            numberOfCompoundsDiscovered++;
        },
        "createdPreviously": false,
        "compound": {
            "H":0,
            "C":0,
            "O":4,
            "N":0,
            "P":0,
            "S":1
        }
    }
    ,
    {
        "name": {"text":"Phosphate","color":"Orange", "desc":"You created a crucial salt"},
    "requires": [],
        "effect":function(){
            numberOfCompoundsDiscovered++;
        },
        "createdPreviously": false,
        "compound": {
            "H":0,
            "C":0,
            "O":4,
            "N":0,
            "P":1,
            "S":0
        }
    },
    {
        "name": {"text":"Phosphite","color":"Orange", "desc":"You created a crucial salt"},
    "requires": [],
        "effect":function(){
            numberOfCompoundsDiscovered++;
        },
        "createdPreviously": false,
        "compound": {
            "H":0,
            "C":0,
            "O":3,
            "N":0,
            "P":1,
            "S":0
        }
    },
    {
        "name": {"text":"Nitrate","color":"blue", "desc":"Commonly used in gunpowder"},
    "requires": [],
        "effect":function(){
            numberOfCompoundsDiscovered++;
        },
        "createdPreviously": false,
        "compound": {
            "H":0,
            "C":0,
            "O":3,
            "N":1,
            "P":0,
            "S":0
        }
    },
    {
        "name": {"text":"Nitrite","color":"blue", "desc":"Widely used in pharmaceuticals"},
    "requires": [],
        "effect":function(){
            numberOfCompoundsDiscovered++;
        },
        "createdPreviously": false,
        "compound": {
            "H":0,
            "C":0,
            "O":2,
            "N":1,
            "P":0,
            "S":0
        }
    },
    {
        "name": {"text":"Hydrogen Peroxide","color":"black", "desc":"Low purities are often used as mouth wash, higher purities may be used to treat minor skin injuries"},
    "requires": [],
        "effect":function(){
            numberOfCompoundsDiscovered++;
        },
        "createdPreviously": false,
        "compound": {
            "H":2,
            "C":0,
            "O":2,
            "N":0,
            "P":0,
            "S":0
        }
    },
    {
        "name": {"text":"Nitrogen Dioxide","color":"blue", "desc":"You have caused lung problems all around the world"},
    "requires": [5],
        "effect":function(){
            numberOfCompoundsDiscovered++;
        },
        "createdPreviously": false,
        "compound": {
            "H":0,
            "C":0,
            "O":2,
            "N":1,
            "P":0,
            "S":0
        }
    },
    {
        "name": {"text":"Octane","color":"black", "desc":"You have created a component of gasoline."},
    "requires": [],
        "effect":function(){
            numberOfCompoundsDiscovered++;
        },
        "createdPreviously": false,
        "compound": {
            "H":18,
            "C":8,
            "O":0,
            "N":0,
            "P":0,
            "S":0
        }
    },{
        "name": {"text":"Cyanide","color":"red", "desc":"You are dead."},
    "requires": [],
        "effect":function(){
            window.location.href = "https://amided.com"
            numberOfCompoundsDiscovered++;
        },
        "createdPreviously": false,
        "compound": {
            "H":1,
            "C":1,
            "O":0,
            "N":1,
            "P":0,
            "S":0
        }
    },{
        "name": {"text":"Formaldehyde","color":"Orange", "desc":"You can now look at your brain forever"},
    "requires": [],
        "effect":function(){
            numberOfCompoundsDiscovered++;
        },
        "createdPreviously": false,
        "compound": {
            "H":2,
            "C":1,
            "O":1,
            "N":0,
            "P":0,
            "S":0
        }
    },{
        "name": {"text":"Hydrogen Sulfide","color":"Orange", "desc":"A colorless gas, can be deadly"},
    "requires": [],
        "effect":function(){
            numberOfCompoundsDiscovered++;
        },
        "createdPreviously": false,
        "compound": {
            "H":2,
            "C":0,
            "O":0,
            "N":0,
            "P":0,
            "S":1
        }
    },{
        "name": {"text":"Ammonium","color":"black", "desc":"A cation"},
    "requires": [],
        "effect":function(){
            numberOfCompoundsDiscovered++;
        },
        "createdPreviously": false,
        "compound": {
            "H":4,
            "C":0,
            "O":0,
            "N":1,
            "P":0,
            "S":0
        }
    },{
        "name": {"text":"Ammonia","color":"black", "desc":"Neutral Ammonium"},
    "requires": [],
        "effect":function(){
            numberOfCompoundsDiscovered++;
        },
        "createdPreviously": false,
        "compound": {
            "H":3,
            "C":0,
            "O":0,
            "N":1,
            "P":0,
            "S":0
        }
    },{
        "name": {"text":"Bicarbonate","color":"black", "desc":"An intermediate form in the deprotonation of carbonic acid"},
    "requires": [],
        "effect":function(){
            numberOfCompoundsDiscovered++;
        },
        "createdPreviously": false,
        "compound": {
            "H":1,
            "C":1,
            "O":3,
            "N":0,
            "P":0,
            "S":0
        }
    }
]

function findName(){
    var temp = [];
    if(currentCompound.H > 0){   
            temp.push(["H",currentCompound.H])
    }
    if(currentCompound.C > 0){     
            temp.push(["C",currentCompound.C])
        
    }
    if(currentCompound.P > 0){  
            temp.push(["P",currentCompound.P])
    }
    if(currentCompound.N > 0){  
            temp.push(["N",currentCompound.N])
    }
    if(currentCompound.S > 0){  
            temp.push(["S",currentCompound.S])
    }
    if(currentCompound.O > 0){  
            temp.push(["O",currentCompound.O])
    }
    
    

    var prefixes = ["Mono", "Di","Tri","Tetra","Penta","Hexa","Hepta","Octa","Nona","Deca"]
    var vowelDroppedPrefixes = ["Mon","Di","Tri","Tetr","Pent","Hex","Oct","Non","Dec"]
    if(temp.length == 1){
        var text = "";
        if(temp[0][1] != 1){
        if(temp[0][0] == "O"){
            text+= vowelDroppedPrefixes[temp[0][1]-1]; 
         }else{
             text+= prefixes[temp[0][1]-1];
         }
        }
             if(temp[0][0] == "H"){text+= "hydride"}
             if(temp[0][0] == "C"){text+= "carbonate"}
             if(temp[0][0] == "P"){text+= "phosphide"}
             if(temp[0][0] == "N"){text+= "nitride"}
             if(temp[0][0] == "S"){text+= "sulfide"}
             if(temp[0][0] == "O"){text+= "oxide"}
             return text;
    }
    if(temp.length == 2){
        var text = "";
        
        if(temp[0][1] != 1){
            if(temp[0][0] == "O"){
                text+= vowelDroppedPrefixes[temp[0][1]-1]; 
             }else{
                 text+= prefixes[temp[0][1]-1];
             }
            if(temp[0][0] == "H"){text+= "hydrogen"}
            if(temp[0][0] == "C"){text+= "carbon"}
            if(temp[0][0] == "P"){text+= "phosphorus"}
            if(temp[0][0] == "N"){text+= "nitrogen"}
            if(temp[0][0] == "S"){text+= "sulfur"}
            if(temp[0][0] == "O"){text+= "oxygen"}
        }else{
            if(temp[0][0] == "H"){text+= "Hydrogen"}
            if(temp[0][0] == "C"){text+= "Carbon"}
            if(temp[0][0] == "P"){text+= "Phosphorus"}
            if(temp[0][0] == "N"){text+= "Nitrogen"}
            if(temp[0][0] == "S"){text+= "Sulfur"}
            if(temp[0][0] == "O"){text+= "Oxygen"}
        }
        text+=" ";
        
        if(temp[1][0] == "O"){
           text+= vowelDroppedPrefixes[temp[1][1]-1]; 
        }else{
            text+= prefixes[temp[1][1]-1];
        }
        if(temp[1][0] == "H"){text+= "hydride"}
        if(temp[1][0] == "C"){text+= "carbonate"}
        if(temp[1][0] == "P"){text+= "phosphide"}
        if(temp[1][0] == "N"){text+= "nitride"}
        if(temp[1][0] == "S"){text+= "sulfide"}
        if(temp[1][0] == "O"){text+= "oxide"}
        return text;
    }
    return "NONE FOUND";
}

function setup(){
    createCanvas(1000,700);
    elements.push(new Element("Hydrogen","H",elements.length,"white","black"))
    elements.push(new Element("Carbon","C",elements.length, "black", "white"))
    elements.push(new Element("Oxygen","O",elements.length, "red", "white"))
    elements.push(new Element("Nitrogen","N",elements.length, "blue", "white"))
    elements.push(new Element("Phosphorus","P",elements.length, "orange", "black"))
    elements.push(new Element("Sulfur","S",elements.length, "yellow", "black"))
}


function mousePressed(){
    if(!inJustCreated1 && !inJustCreated2 && !inFailedToCreate && !inCreatedBefore && !inRequires && !inNotInData){
    for(var e of elements){
    if(e.checkCollision()){
        currentCompound[e.symbol] ++;
    }

}
    if(mouseX > 725 && mouseX < 975 && mouseY > 550 && mouseY < 650){
        currentCompound = {
            "H":0,
            "C":0,
            "O":0,
            "N":0,
            "P":0,
            "S":0,
        } 
    }
if(mouseX > 200 && mouseX < 450 && mouseY > 580 && mouseY < 680){
    for(var com of compounds){
        var cc = currentCompound;
        var c = com.compound;
        if(c.H == cc.H && c.C == cc.C && c.O == cc.O && c.N == cc.N && c.P == cc.P && c.S == cc.S ){
            
           
            console.log(com.name);
            justCreated = com.name;
            justCreatedRequires = ""
            for(var r of com.requires){
                if(!compounds[r].createdPreviously){
                    justCreatedRequires += compounds[r].name.text + " & ";
                }
            }
            

            if(justCreatedRequires != ""){
                justCreatedRequires = justCreatedRequires.substring(0,justCreatedRequires.length - 3)
                inRequires = true;
            }else{
            if(com.createdPreviously){
                inCreatedBefore = true;
            }else{
                console.log("test");
            inJustCreated1 = true;
            com.createdPreviously = true;
            com.effect();
            }
        }
        }
    }

    if(!inJustCreated1 && !inRequires && !inCreatedBefore){
        if(findName() != "NONE FOUND"){
                inNotInData = true;
        }else{
        inFailedToCreate = true;
        }
    }
}
    }else{
        console.log(mouseX,mouseY);
        if(mouseX > 350 && mouseY > 445 && mouseX < 650 && mouseY < 525){
            if(inJustCreated1){
                inJustCreated1 = false;
                inJustCreated2 = true;
            }else{
                inCreatedBefore = false;
                inNotInData = false;
                inJustCreated2 = false;
            inFailedToCreate = false;
            inRequires = false;
            currentCompound = {
                "H":0,
                "C":0,
                "O":0,
                "N":0,
                "P":0,
                "S":0,
            }
        }   
            
        }
    }
}
function draw(){
    background("#3bd3d9")
    noStroke();
    fill(230,230,230);
    rect(700,0,300,700)
    fill("black")
    rect(697,0,6,700)
   
    for(var e of elements){
        e.draw();
       
    }
    fill("red");
    stroke("black")
    strokeWeight(5);
    rect(725,550,250,100,40,40)
    fill("white");
    textSize(45)
    stroke("white");
    strokeWeight(1);
    text("Reset", 786,615)
    textAlign(CENTER);

    var temp = [];
    if(currentCompound.H > 0){   
        if(currentCompound.H == 1){
            temp.push(["H",""])
        }else{
            temp.push(["H",currentCompound.H])
        }
    }
    if(currentCompound.C > 0){     
        if(currentCompound.C == 1){
            temp.push(["C",""])
        }else{
            temp.push(["C",currentCompound.C])
        }
        
    }
    if(currentCompound.N > 0){  
        if(currentCompound.N == 1){
            temp.push(["N",""])
        }else{
            temp.push(["N",currentCompound.N])
        }
    }
    if(currentCompound.O > 0){  
        if(currentCompound.O == 1){
            temp.push(["O",""])
        }else{
            temp.push(["O",currentCompound.O])
        }
    }
    if(currentCompound.P > 0){  
        if(currentCompound.P == 1){
            temp.push(["P",""])
        }else{
            temp.push(["P",currentCompound.P])
        }
    }
    if(currentCompound.S > 0){  
        if(currentCompound.S == 1){
            temp.push(["S",""])
        }else{
            temp.push(["S",currentCompound.S])
        }
    }

    if(temp.length == 1){
        textSize(45);
        text(temp[0][0],325,540)
        textSize(30);
        text(temp[0][1],348,560)
    }
    if(temp.length == 2){
        textSize(45);
        text(temp[0][0],295,540) 
        text(temp[1][0],355,540);
        textSize(30);
        text(temp[0][1],318,560)
        text(temp[1][1],378,560)
    }
    if(temp.length == 3){
        textSize(45);
        text(temp[0][0],265,540) 
        text(temp[1][0],325,540) 
        text(temp[2][0],385,540);
        textSize(30);
        text(temp[0][1],288,560)
        text(temp[1][1],348,560)
        text(temp[2][1],408,560)
    }

    if(temp.length == 4){
        textSize(45);
        text(temp[0][0],235,540) 
        text(temp[1][0],295,540) 
        text(temp[2][0],355,540) 
        text(temp[3][0],405,540);
        textSize(30);
        text(temp[0][1],258,560)
        text(temp[1][1],318,560)
        text(temp[2][1],378,560)
        text(temp[3][1],428,560)
    }
    if(temp.length == 5){
        textSize(45);
        text(temp[0][0],205,540) 
        text(temp[1][0],265,540) 
        text(temp[2][0],325,540) 
        text(temp[3][0],385,540);
        text(temp[4][0],445,540);
        textSize(30);
        text(temp[0][1],228,560)
        text(temp[1][1],288,560)
        text(temp[2][1],348,560)
        text(temp[3][1],408,560)
        text(temp[4][1],468,560)
    }
    console.log(temp.length);
    if(temp.length == 6){
        textSize(45);
        text(temp[0][0],175,540) 
        text(temp[1][0],235,540) 
        text(temp[2][0],295,540) 
        text(temp[3][0],355,540);
        text(temp[4][0],405,540);
        text(temp[5][0],465,540);
        textSize(30);
        text(temp[0][1],198,560)
        text(temp[1][1],258,560)
        text(temp[2][1],318,560)
        text(temp[3][1],378,560)
        text(temp[3][1],438,560)
        text(temp[5][1],498,560)
    }




    textAlign(LEFT);
    fill("green");
    stroke("black");
    strokeWeight(5)
    rect(200,580,250,100,40,40)
    fill("white")
    textSize(45)
    stroke("white");
    strokeWeight(1);
    text("Combine", 230,645)
    textAlign(CENTER);
    text(numberOfCompoundsDiscovered + " Compounds Discovered",350,50)
    textAlign(LEFT);
    if(inJustCreated1){
        fill(0,0,0,200);
        rect(0,0,1000,700);
        fill("white");
        strokeWeight(10);
        stroke("black");

        rect(200,150,600,400,50,50)
        
        textAlign(CENTER);
        textSize(63);
        fill(justCreated.color);
        noStroke();
        text(justCreated.text,500,400)

        textSize(40);
        fill("green");
        text("Congratulations!", 500, 250)
        text("You just created", 500, 300)
        fill(200,200,200)
        stroke("black");
        rect(350,450,300,70,50,50)
        noStroke();
        fill("black");
        text("Confirm", 500, 500) 
        textAlign(LEFT);
    }
    if(inJustCreated2){
        fill(0,0,0,200);
        rect(0,0,1000,700);
        fill("white");
        strokeWeight(10);
        stroke("black");

        rect(200,150,600,400,50,50)
        
        textAlign(CENTER);
        textSize(40);
        noStroke();
        fill("black");
        text("Congratulations!", 500, 250)
        textSize(30);
        text(justCreated.desc, 250, 300, 500);
        fill(200,200,200)
        stroke("black");
        rect(350,450,300,70,50,50)
        noStroke();
        fill("black");
        textSize(40);
        text("Confirm", 500, 500) 
        textAlign(LEFT);
    }
    if(inRequires){
        fill(0,0,0,200);
        rect(0,0,1000,700);
        fill("white");
        strokeWeight(10);
        stroke("black");

        rect(200,150,600,400,50,50)
        
        textAlign(CENTER);
        textSize(40);
        noStroke();
        fill("black");
        text("Congratulations!", 500, 250)
        textSize(30);
        text("You created " + justCreated.text + ", however it requires " + justCreatedRequires , 250, 300, 500);
        fill(200,200,200)
        stroke("black");
        rect(350,450,300,70,50,50)
        noStroke();
        fill("black");
        textSize(40);
        text("Confirm", 500, 500) 
        textAlign(LEFT);
    }
    if(inFailedToCreate){
        fill(0,0,0,200);
        rect(0,0,1000,700);
        fill("white");
        strokeWeight(10);
        stroke("black");

        rect(200,150,600,400,50,50)
        
        textAlign(CENTER);
        textSize(70);
        fill("red");
        noStroke();
        text("Anything",500,380)

        textSize(40);
        fill("red");
        text("You just failed to create", 500, 270)
        fill(200,200,200)
        stroke("black");
        rect(350,450,300,70,50,50)
        noStroke();
        fill("black");
        text("Confirm", 500, 500) 
        textAlign(LEFT);
    }
    if(inNotInData){
        fill(0,0,0,200);
        rect(0,0,1000,700);
        fill("white");
        strokeWeight(10);
        stroke("black");

        rect(200,150,600,400,50,50)
        
        textAlign(CENTER);
        textSize(60);
        fill("red");
        noStroke();
        text(findName(),500,350)

        textSize(30);
        fill("red");
        text("You created", 500, 270)
        text("however it is not in the database", 500, 400)
        fill(200,200,200)
        stroke("black");
        rect(350,450,300,70,50,50)
        noStroke();
        fill("black");
        text("Confirm", 500, 500) 
        textAlign(LEFT);
    }
    if(inCreatedBefore){
        fill(0,0,0,200);
        rect(0,0,1000,700);
        fill("white");
        strokeWeight(10);
        stroke("black");

        rect(200,150,600,400,50,50)
        
        textAlign(CENTER);
        textSize(70);
        fill(justCreated.color);
        noStroke();
        text(justCreated.text,500,380)

        textSize(40);
        fill("red");
        text("You have already created", 500, 270)
        fill(200,200,200)
        stroke("black");
        rect(350,450,300,70,50,50)
        noStroke();
        fill("black");
        text("Confirm", 500, 500) 
        textAlign(LEFT);
    }

}


class Element{
    constructor(name,symbol, slot,fill,text){
        this.name = name;
        this.symbol = symbol;
        this.x = ((slot % 2) *150) + 725;
        this.y = (Math.floor(slot/2) * 150) +25;
        this.fill = fill;
        this.stroke = text;
    }
    draw(){
        fill(this.fill);
        strokeWeight(3);
        stroke(0);
        
        rect(this.x,this.y,100,100,20,20)
        fill(this.stroke);
        textSize(80);
        noStroke();
        textStyle(BOLD);
        text(this.symbol,this.x + 20,this.y + 80)
    }
    checkCollision(){
        if(mouseX > this.x && mouseX < this.x + 100 && mouseY > this.y && mouseY < this.y + 100){
            return true;
        }
    }
}