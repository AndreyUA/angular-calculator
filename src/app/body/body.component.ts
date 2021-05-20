import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent {
  display: string = '0';
  firstNum: string = '0';
  secondNum: string = '0';
  operation: string = '';

  changeOperationHandler(op: string): void {
    this.operation = op;
  }
  changeHandler(num: string): void {
    if (this.display.length > 10) return;

    if (+this.display === 0) {
      this.display = num;
    } else {
      this.display += num.toString();
    }
  }
  deleteActualDisplayHandler(): void {
    this.display = '0';
  }
  resetAllHandler(): void {
    this.display = '0';
    this.firstNum = '0';
    this.secondNum = '0';
    this.operation = '';
  }
}

/*
^ - умножить Math.pow(num, 2)
& - квадратный корень Math.sqrt(num)
/ - деление
* - умножение

не сделал
=
,
 */
