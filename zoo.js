
var animalPopulation=0;

function run(){
    var tigger=new Tiger("Tigger");
    tigger.eat("meat");
    var pooh=new Bear("Pooh");
    pooh.eat("fish");
    pooh.eat("meat");
    var rarity=new Unicorn("Rarity")
    rarity.eat("marshmallows");
    var gemma=new Giraffes("Gemma");
    gemma.eat("meat");
    gemma.eat("leaves");
    var stinger=new Bee("Stinger");
    stinger.eat("ice cream");
    stinger.eat("pollen");
    var zoebot=new Zookeeper("zoebot");
    zoebot.feedAnimals([Tiger,Unicorn,Bear,Bee],"meat");
}

class Zookeeper{
    constructor(name){
        this.name=name;
        console.log(this.name+" is feeding "+food+" to "+animals.length+" animals"+" of "+animalPopulation+" total animals");
        for(var i=0;i<barn.length;i++){
            barn[i].eat(foods);
        }
    }

}

class Animal{
    constructor(name,favoriteFood){
        this.name=name;
        this.favoriteFood=favoriteFood;
        animalPopulation++;
    }
    sleep(sleepTime){
        console.log(this.name + " sleeps for 8 hours");
    }
    eat(food){
        console.log(this.name+" eats "+food);
        food==this.favoriteFood?console.log("YUM!! "+this.name+" wants more "+food):this.sleep();
    }
    static getPopulation() {
        return animalPopulation;
    }

}

class Tiger extends Animal{
    constructor(name){
        super(name,"meat");
    }
    sleep(){
        super.sleep(" sleeps for 8 hours");
    }
}

class Bear extends Animal{
    constructor(name){
        super(name,"fish");
    }
    sleep(){
       console.log(this.name +"  hibernates for 4 months");
    }
}

class Unicorn extends Animal{
    constructor(name){
        super(name,"marshmallows");
    }
    sleep(){
        console.log(this.name +" sleeps in a cloud");
    }
    eat(food){
        console.log(this.name+" eats "+food);
        food==this.favoriteFood?console.log("YUM!! "+this.name+" wants more "+food)+this.sleep():("");
    }
}

class Giraffes extends Animal{
    constructor(name){
        super(name,"leaves");
    }
    eat(food){
        console.log(this.name+" eats "+food);
        food==this.favoriteFood?console.log("YUM!! "+this.name+" wants more "+food)+this.sleep():console.log("YUCK!!! "+name+" will not eat "+food);
    }
}

class Bee extends Animal{
    constructor(name){
        super(name,"pollen");
    }
    sleep(){
        console.log(this.name +"  never sleeps");
    }
    eat(food){
        console.log(this.name+" eats "+food);
        food==this.favoriteFood?console.log("YUM!! "+this.name+" wants more "+food)+this.sleep():console.log("YUCK!!! "+name+" will not eat "+food);
    }
}