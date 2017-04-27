import {Router} from "@angular/router";
import {Component} from "@angular/core";
import {Zodiac} from "../entity/zodiac";

@Component({
  selector: 'find',
  templateUrl: 'app/lukana/lukana.find.component.html'
})
export class LukanaFindComponent {
  zodiac: any={};
  message="";
  ngOnInit(){
    this.zodiac=new Zodiac();
    this.zodiac.check1=true;
    this.zodiac.check2=false;
    this.zodiac.value1="0";
    this.zodiac.value2="0";
    this.zodiac.name="";

    this.zodiac.web1=false;
    this.zodiac.web2=false;
    this.zodiac.web3=false;
    this.zodiac.web4=false;
    this.zodiac.web5=false;
    this.zodiac.web6=false;
    this.zodiac.web7=false;
    this.zodiac.web8=false;
    this.zodiac.web9=false;
    this.zodiac.web10=false;
    this.zodiac.web11=false;
    this.zodiac.web12=false;
  }

    submit(zodiac:Zodiac){
    if(this.zodiac.value1==0 || this.zodiac.value2==0)
    {
      this.message="Please put the value to every options";
    }
    else{
    if(this.zodiac.value1==1 && this.zodiac.value2==1 || this.zodiac.value1==2 && this.zodiac.value2==12 || this.zodiac.value1==3 && this.zodiac.value2==11 ||this.zodiac.value1==4 && this.zodiac.value2==10 ||this.zodiac.value1==5 && this.zodiac.value2==9 ||this.zodiac.value1==6 && this.zodiac.value2==8 ||this.zodiac.value1==7 && this.zodiac.value2==7 ||this.zodiac.value1==8 && this.zodiac.value2==6 || this.zodiac.value1==9 && this.zodiac.value2==5 ||this.zodiac.value1==10 && this.zodiac.value2==4 ||this.zodiac.value1==11 && this.zodiac.value2==3 ||this.zodiac.value1==12 && this.zodiac.value2==2){
      this.zodiac.name="Capricornus";
      this.zodiac.descripton="The element of Earth, the people who were born on January,16 to February,15. The people who were born in Capricorn have a creative thinking, leadership, they are principled and live in their own little world(private person).";
      this.zodiac.image="app/images/capricorn.png";
  }
    if(this.zodiac.value1==1 && this.zodiac.value2==2 || this.zodiac.value1==2 && this.zodiac.value2==1 || this.zodiac.value1==3 && this.zodiac.value2==12 ||this.zodiac.value1==4 && this.zodiac.value2==11 ||this.zodiac.value1==5 && this.zodiac.value2==10 ||this.zodiac.value1==6 && this.zodiac.value2==9 ||this.zodiac.value1==7 && this.zodiac.value2==8 ||this.zodiac.value1==8 && this.zodiac.value2==7 || this.zodiac.value1==9 && this.zodiac.value2==6 ||this.zodiac.value1==10 && this.zodiac.value2==5 ||this.zodiac.value1==11 && this.zodiac.value2==4 ||this.zodiac.value1==12 && this.zodiac.value2==3){
      this.zodiac.name="Aquarius";
       this.zodiac.descripton="The element of Wind, the people who were born on February,16 to March,15.Aquarius is the ascendant of unity and invention. A shape of Aquarius constellation is grouping like a jar, that makes a people who born in this ascendant have a creative thinking and like a freedom.";
  this.zodiac.image="app/images/aquarias.png";  
  }
    if(this.zodiac.value1==1 && this.zodiac.value2==3 || this.zodiac.value1==2 && this.zodiac.value2==2 || this.zodiac.value1==3 && this.zodiac.value2==1 ||this.zodiac.value1==4 && this.zodiac.value2==12 ||this.zodiac.value1==5 && this.zodiac.value2==11 ||this.zodiac.value1==6 && this.zodiac.value2==10 ||this.zodiac.value1==7 && this.zodiac.value2==9 ||this.zodiac.value1==8 && this.zodiac.value2==8 || this.zodiac.value1==9 && this.zodiac.value2==7 ||this.zodiac.value1==10 && this.zodiac.value2==6 ||this.zodiac.value1==11 && this.zodiac.value2==5 ||this.zodiac.value1==12 && this.zodiac.value2==4){
      this.zodiac.name="Pisces";
      this.zodiac.descripton="The element of Water, the people who were born on March,16 to April,15.Pisces is the ascendant of intelligence. A shape of Pisces constellation is grouping like a pair fish, that is a sign of freedom like a fish in the river. ";
this.zodiac.image="app/images/pisces.png";  
  }
      if(this.zodiac.value1==1 && this.zodiac.value2==4 || this.zodiac.value1==2 && this.zodiac.value2==3 || this.zodiac.value1==3 && this.zodiac.value2==2 ||this.zodiac.value1==4 && this.zodiac.value2==1 ||this.zodiac.value1==5 && this.zodiac.value2==12 ||this.zodiac.value1==6 && this.zodiac.value2==11 ||this.zodiac.value1==7 && this.zodiac.value2==10 ||this.zodiac.value1==8 && this.zodiac.value2==9 || this.zodiac.value1==9 && this.zodiac.value2==8 ||this.zodiac.value1==10 && this.zodiac.value2==7 ||this.zodiac.value1==11 && this.zodiac.value2==6 ||this.zodiac.value1==12 && this.zodiac.value2==5){
      this.zodiac.name="Aries";
      this.zodiac.descripton="The element of Fire, the people who were born on April,16 to May,15. In Chinese belief, the Aries has a power of Yang that cause the people who were born in this ascendant have anxious, ambitious characteristic. Nevertheless, they also have a creative thinking and leadership.";
  this.zodiac.image="app/images/aries.png"; 
   }
      if(this.zodiac.value1==1 && this.zodiac.value2==5 || this.zodiac.value1==2 && this.zodiac.value2==4 || this.zodiac.value1==3 && this.zodiac.value2==3 ||this.zodiac.value1==4 && this.zodiac.value2==2 ||this.zodiac.value1==5 && this.zodiac.value2==1 ||this.zodiac.value1==6 && this.zodiac.value2==12 ||this.zodiac.value1==7 && this.zodiac.value2==11 ||this.zodiac.value1==8 && this.zodiac.value2==10 || this.zodiac.value1==9 && this.zodiac.value2==9 ||this.zodiac.value1==10 && this.zodiac.value2==8 ||this.zodiac.value1==11 && this.zodiac.value2==7 ||this.zodiac.value1==12 && this.zodiac.value2==6){
      this.zodiac.name="Taurus";
      this.zodiac.descripton="The element of Wind, the people who were born on May,16 to June,15. Taurus is the ascendant of patient and change. The people who were born in Taurus likely to struggle to gain a success in their life.";
    this.zodiac.image="app/images/xxx.png";  
  }
      if(this.zodiac.value1==1 && this.zodiac.value2==6 || this.zodiac.value1==2 && this.zodiac.value2==5 || this.zodiac.value1==3 && this.zodiac.value2==4 ||this.zodiac.value1==4 && this.zodiac.value2==3 ||this.zodiac.value1==5 && this.zodiac.value2==2 ||this.zodiac.value1==6 && this.zodiac.value2==1 ||this.zodiac.value1==7 && this.zodiac.value2==12 ||this.zodiac.value1==8 && this.zodiac.value2==11 || this.zodiac.value1==9 && this.zodiac.value2==10 ||this.zodiac.value1==10 && this.zodiac.value2==9 ||this.zodiac.value1==11 && this.zodiac.value2==8 ||this.zodiac.value1==12 && this.zodiac.value2==7){
      this.zodiac.name="Germini";
      this.zodiac.descripton="The element of Wind, the people who were born on June,16 to July,15. Gemini is the ascendant of intelligence but seeks two things simultaneously. The people who were born in this ascendant like to travel but don't like stay still for a long time, don't like the thing that monotonous. However, they have a power of creative thinking like to think and talk but don't like to do.";
  this.zodiac.image="app/images/gemini.png";  
  }
      if(this.zodiac.value1==1 && this.zodiac.value2==7 || this.zodiac.value1==2 && this.zodiac.value2==6 || this.zodiac.value1==3 && this.zodiac.value2==5 ||this.zodiac.value1==4 && this.zodiac.value2==4 ||this.zodiac.value1==5 && this.zodiac.value2==3 ||this.zodiac.value1==6 && this.zodiac.value2==2 ||this.zodiac.value1==7 && this.zodiac.value2==1 ||this.zodiac.value1==8 && this.zodiac.value2==12 || this.zodiac.value1==9 && this.zodiac.value2==11 ||this.zodiac.value1==10 && this.zodiac.value2==10 ||this.zodiac.value1==11 && this.zodiac.value2==9 ||this.zodiac.value1==12 && this.zodiac.value2==8){
      this.zodiac.name="Cancer";
      this.zodiac.descripton="The element of Water, the people who were born on July,16 to August,15.Cancer is the ascendant of bland but liberality.Cancer constellation is grouping like a crab, the people who born in this ascendant have a high power of Yang (Chinese believe) that cause anxious, ambitious characteristic in Cancer people.";
  this.zodiac.image="app/images/cancer.png"; 
   }
      if(this.zodiac.value1==1 && this.zodiac.value2==8 || this.zodiac.value1==2 && this.zodiac.value2==7 || this.zodiac.value1==3 && this.zodiac.value2==6 ||this.zodiac.value1==4 && this.zodiac.value2==5 ||this.zodiac.value1==5 && this.zodiac.value2==4 ||this.zodiac.value1==6 && this.zodiac.value2==3 ||this.zodiac.value1==7 && this.zodiac.value2==2 ||this.zodiac.value1==8 && this.zodiac.value2==1 || this.zodiac.value1==9 && this.zodiac.value2==12 ||this.zodiac.value1==10 && this.zodiac.value2==11 ||this.zodiac.value1==11 && this.zodiac.value2==10 ||this.zodiac.value1==12 && this.zodiac.value2==9){
      this.zodiac.name="Leo";
      this.zodiac.descripton="The element of Fire, the people who were born on August,16 to September,15. Leo is the ascendant of consecrate and ambitious.Leo constellation is grouping like a lion, hence this ascendant will have properties of brave , calm and adventurous.";
  this.zodiac.image="app/images/leo.png";  
  }
      if(this.zodiac.value1==1 && this.zodiac.value2==9 || this.zodiac.value1==2 && this.zodiac.value2==8 || this.zodiac.value1==3 && this.zodiac.value2==7 ||this.zodiac.value1==4 && this.zodiac.value2==6 ||this.zodiac.value1==5 && this.zodiac.value2==5 ||this.zodiac.value1==6 && this.zodiac.value2==4 ||this.zodiac.value1==7 && this.zodiac.value2==3 ||this.zodiac.value1==8 && this.zodiac.value2==2 || this.zodiac.value1==9 && this.zodiac.value2==1 ||this.zodiac.value1==10 && this.zodiac.value2==12 ||this.zodiac.value1==11 && this.zodiac.value2==11 ||this.zodiac.value1==12 && this.zodiac.value2==10){
      this.zodiac.name="Virgo";
      this.zodiac.descripton="The element of Earth, the people who were born on September,16 to October,15. Virgo is the ascendant of service and swamp. Virgo constellation is grouping like a woman, hence this ascendant will have properties of patient and ambitious.";
  this.zodiac.image="app/images/virgo.png";  
  }
      if(this.zodiac.value1==1 && this.zodiac.value2==10 || this.zodiac.value1==2 && this.zodiac.value2==9 || this.zodiac.value1==3 && this.zodiac.value2==8 ||this.zodiac.value1==4 && this.zodiac.value2==7 ||this.zodiac.value1==5 && this.zodiac.value2==6 ||this.zodiac.value1==6 && this.zodiac.value2==5 ||this.zodiac.value1==7 && this.zodiac.value2==4 ||this.zodiac.value1==8 && this.zodiac.value2==3 || this.zodiac.value1==9 && this.zodiac.value2==2 ||this.zodiac.value1==10 && this.zodiac.value2==1 ||this.zodiac.value1==11 && this.zodiac.value2==12 ||this.zodiac.value1==12 && this.zodiac.value2==11){
      this.zodiac.name="Libra";
      this.zodiac.descripton="The element of Wind, the people who were born on October,16 to November,15. Libra is the ascendant of consistent. A shape of a libra constellation is grouping like a scales. The people who were born in libra ascendant are hot-headed, impulsive, restless, these are a nature of wind, they are likely to be a snobbish man.";
  this.zodiac.image="app/images/libra.png";  
  }
      if(this.zodiac.value1==1 && this.zodiac.value2==11 || this.zodiac.value1==2 && this.zodiac.value2==10 || this.zodiac.value1==3 && this.zodiac.value2==9 ||this.zodiac.value1==4 && this.zodiac.value2==8 ||this.zodiac.value1==5 && this.zodiac.value2==7 ||this.zodiac.value1==6 && this.zodiac.value2==6 ||this.zodiac.value1==7 && this.zodiac.value2==5 ||this.zodiac.value1==8 && this.zodiac.value2==4 || this.zodiac.value1==9 && this.zodiac.value2==3 ||this.zodiac.value1==10 && this.zodiac.value2==2 ||this.zodiac.value1==11 && this.zodiac.value2==1 ||this.zodiac.value1==12 && this.zodiac.value2==12){
      this.zodiac.name="Scorpio";
      this.zodiac.descripton="The element of Water, the people who were born on November,16 to December,15. Aquarius is the ascendant of kindness and aficionado. A shape of Scorpio constellation is grouping like a scorpion that is a sign of brave and adventurous.";
  this.zodiac.image="app/images/scorpio.png";  
  }
      if(this.zodiac.value1==1 && this.zodiac.value2==12 || this.zodiac.value1==2 && this.zodiac.value2==11 || this.zodiac.value1==3 && this.zodiac.value2==10 ||this.zodiac.value1==4 && this.zodiac.value2==9 ||this.zodiac.value1==5 && this.zodiac.value2==8 ||this.zodiac.value1==6 && this.zodiac.value2==7 ||this.zodiac.value1==7 && this.zodiac.value2==6 ||this.zodiac.value1==8 && this.zodiac.value2==5 || this.zodiac.value1==9 && this.zodiac.value2==4 ||this.zodiac.value1==10 && this.zodiac.value2==3 ||this.zodiac.value1==11 && this.zodiac.value2==2 ||this.zodiac.value1==12 && this.zodiac.value2==1){
      this.zodiac.name="Sagittaius";
      this.zodiac.descripton="The element of Fire, the people who were born on December,16 to January,15. Libra is the ascendant of goodness and foresightedness. A shape of Sagittarius constellation is grouping like a hunter holding a bow, it's a sign of foresight people. The people that born in this ascendant have a powerful power and mind, hence these people might have the confident and snobbish characteristic.";
  this.zodiac.image="app/images/sagittarius.png";  
  }




    this.zodiac.check1=false;
    this.zodiac.check2=true;
    }

  }
    reset(){
    this.zodiac.value1="0";
    this.zodiac.value2="0";
  }
    close(){
    this.zodiac.check1=true;
    this.zodiac.check2=false;
    this.message="";
  }

  goMap(zodiac:Zodiac){
       this.zodiac.check1=false;
    this.zodiac.check2=false;

    if(this.zodiac.name=="Capricornus"){
   
      this.zodiac.web1=true;
    }
       else if(this.zodiac.name=="Aquarius"){
   
      this.zodiac.web2=true;
      
    }
      else  if(this.zodiac.name=="Pisces"){
  
      this.zodiac.web3=true;
    }
      else  if(this.zodiac.name=="Aries"){
 
      this.zodiac.web4=true;
    }
     else   if(this.zodiac.name=="Taurus"){

      this.zodiac.web5=true;
    }
     else   if(this.zodiac.name=="Germini"){

      this.zodiac.web6=true;
    }
     else   if(this.zodiac.name=="Cancer"){
   
      this.zodiac.web7=true;
    }
      else  if(this.zodiac.name=="Leo"){

      this.zodiac.web8=true;
    }
     else   if(this.zodiac.name=="Virgo"){

      this.zodiac.web9=true;
    }
      else  if(this.zodiac.name=="Libra"){

      this.zodiac.web10=true;
    }
       else     if(this.zodiac.name=="Scorpio"){

      this.zodiac.web11=true;
    }
         else   if(this.zodiac.name=="Sagittaius"){

      this.zodiac.web12=true;
    }


  }


}
