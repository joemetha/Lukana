
import {Router} from "@angular/router";
import {Component} from "@angular/core";
import {Visual} from "../entity/visual";
@Component({
  selector: 'convert',
  templateUrl: 'app/lukana/lukana.convert.component.html'
})
export class LukanaConvertComponent {
  visual: any={};
  message="";
constructor (private router: Router){}
  ngOnInit(){
    this.visual=new Visual();
    this.visual.check1=true;
    this.visual.check2=false;
    this.visual.num1="0";
    this.visual.num2="0";
    this.visual.num3="0";
    this.visual.num4="0";
    this.visual.num5="0";
    this.visual.num6="0";
    this.visual.num7="0";
    this.visual.num8="0";
    this.visual.num9="0";
    this.visual.num10="0";
    this.visual.num11="0";
  }

  reset(){
    this.visual.num1="0";
    this.visual.num2="0";
    this.visual.num3="0";
    this.visual.num4="0";
    this.visual.num5="0";
    this.visual.num6="0";
    this.visual.num7="0";
    this.visual.num8="0";
    this.visual.num9="0";
    this.visual.num10="0";
    this.visual.num11="0";
  }

  submit(visual:Visual){
    if(this.visual.num1==0 || this.visual.num2==0 || this.visual.num3==0 || this.visual.num4==0 || this.visual.num5==0 || this.visual.num6==0 || this.visual.num7==0 || this.visual.num8==0 || this.visual.num9==0 || this.visual.num10==0 || this.visual.num11==0 || this.visual.num12==0)
    {
      this.message="Please put the value to every options";
    }
    else{
    this.visual.check1=false;
    this.visual.check2=true;
    }

  }
  close(){
    this.visual.check1=true;
    this.visual.check2=false;
    this.message="";
  }









}
