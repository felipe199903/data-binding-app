import { Component, OnInit } from '@angular/core';
import { Button } from 'protractor';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  buttonName= "My Button";
  i = 0;

  constructor() { }
  spinnerMode = "determinate";
  btnEnable = true;
  selectDisable = false;
  selecteOption = 1;
  inputFirstName = "Tony";
  inputLastName = "Stark";


  ngOnInit() {
  }

  save(){
    console.log("Click");
  }

  inc(){
    this.i++;
    this.buttonName = "It was clicked " + this.i + " times";
  }

  disable(){
    this.btnEnable = false;
    this.spinnerMode = "indeterminate";
    setTimeout( () => {
        this.btnEnable = true;
        this.spinnerMode =  "determinate";
    } , 3000 );
  }

  cbChange(event){
    console.log(event.checked);
    this.selectDisable = event.checked;
  }

  selectionChange(event){
    console.log(event);
    this.selecteOption = event.value;
  }
/*
  inputEvent(event){
    console.log(event.target.value);
    console.log(this.inputName);
  }
*/
}
