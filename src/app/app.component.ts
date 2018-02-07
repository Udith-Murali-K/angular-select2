import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public type1:string;
  public entity1:any;
  public answer1:any;
  public type2:string;
  public entity2:any;
    public answer2:any;
  public type3:string;
  public entity3:any;
    public answer3:any;
    optionSelected:any;

  constructor() {
      this.type1="ajax";
      this.entity1="https://jsonplaceholder.typicode.com/users";

    let options = [
      {'id': '0', 'text': 'udith'},
      {'id': '1', 'text': 'murali'},
      {'id': '2', 'text': 'jigs'},
      {'id': '3', 'text': 'soubin'},
      {'id': '4', 'text': 'udith546'}
    ]
      let option = [
          {'id': '0', 'text': 'amar'},
          {'id': '1', 'text': 'akbar'},
          {'id': '2', 'text': 'antony'},
          {'id': '3', 'text': 'jhon'},
          {'id': '4', 'text': 'jhony'}
      ]
    
    localStorage.setItem('user',JSON.stringify(option));



      this.type3 ="array";
      this.entity3=options;

      this.type2 ="local";
      this.entity2 = "user";
      
     

  }
    option1Choose (text){
        this.answer1 =text ;
    }
    option2Choose (text){
        this.answer2 =text ;
    }
    option3Choose (text){
        this.answer3 =text ;
    }
}
