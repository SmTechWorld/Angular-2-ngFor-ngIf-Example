import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
    
    
this.arrayObj.push({name:'Saurabh',location:'Pune',Skills:[{techName:'Testing'},{techName:'Java'}]});
  
this.arrayObj.push({name:'Sangho',location:'Bangalore',Skills:[{techName:'AEM'},{techName:'Java'}]});
 
this.arrayObj.push({name:'Soumik',location:'Dehradoon',Skills:[{techName:'HTML'},{techName:'Aggr'}]});

this.arrayObj.push({name:'Munnaf',location:'Kolkata',Skills:[{techName:'.NET'},{techName:'C'}]});

this.arrayObj.push({name:'Shree',location:'Hyderabad',Skills:[{techName:'Documentum'},{techName:'Java'},{techName:'AEM'}]});
 

this.arrayString.push("Kolkata");
    
this.arrayString.push("Pune");

this.arrayString.push("Delhi");

this.arrayString.push("Mumbai");

this.arrayString.push("Chennai");

   }

  ngOnInit() {
  }

  flag=true;

  changeFlagMethod()
  {
    this.flag=!this.flag;
  }


  arrayObj:object[]=[];

  arrayString : string[]=[];
  
}
