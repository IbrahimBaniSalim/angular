import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  alltodoist: string = '';
  arrayToDo: string[] = [];
  updateOne: string = '';
  show = true;
  ShowUpdateInput = true;
  myStyle: string = '';
  first: boolean = true;
  second: boolean = false;
  message: boolean = false;

  addTodo() {
    if (this.arrayToDo.includes(this.alltodoist)) {
      this.first = true;
      this.second = false;
      this.message = true;
      return;
    } else {
      this.arrayToDo.push(this.alltodoist);
      this.first = false;
      this.second = true;
      this.message = false;
    }
  }
  deleteToDo(deleteToDoJust: string) {
    this.arrayToDo = this.arrayToDo.filter((ele) => {
      console.log(ele);
      return ele !== deleteToDoJust;
    });
  }
  updateToDo(update: string) {
    this.ShowUpdateInput = !this.ShowUpdateInput;
  }
  cancelFun() {
    this.ShowUpdateInput = !this.ShowUpdateInput;
  }

  updateOneFun(update: string) {
    console.log(this.ShowUpdateInput);
    this.arrayToDo.map((ele, i) => {
      console.log('ele', ele);
      console.log(update);
      if (ele === update) {
        this.arrayToDo[i] = this.updateOne;
      } else {
        this.arrayToDo[i] = ele;
      }
    });
  }

  changecolor() {
    this.second = !this.second;
    this.first = !this.first;
  }
  @Input() newt: string = '';

  food(emailss: string): void {
    console.log(emailss);
  }
  constructor() {}

  ngOnInit(): void {
    console.log('aaaaaaaaaaaa');
  }
}
