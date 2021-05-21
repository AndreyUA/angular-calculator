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
  isCalculated: boolean = false;

  changeOperationHandler(op: string): void {
    this.firstNum = this.display;
    this.operation = op;
    this.display = '0';
  }

  changeHandler(num: string): void {
    if (this.display.length > 10) return;

    if (this.isCalculated) {
      this.display = '0';
      this.isCalculated = false;
    }

    //!this.display.indexOf('.')

    if (num === '.') {
      this.display += num.toString();
    } else if (+this.display === 0 && this.display.length === 1) {
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

  calculate(): void {
    this.secondNum = this.display;

    if (this.isCalculated) {
      return;
    }

    this.isCalculated = true;

    switch (this.operation) {
      case '+':
        this.display = this.sum(this.firstNum, this.secondNum).toString();
        break;
      case '-':
        this.display = this.min(this.firstNum, this.secondNum).toString();
        break;
      case '*':
        this.display = this.mult(this.firstNum, this.secondNum).toString();
        break;
      case '/':
        this.display = this.split(this.firstNum, this.secondNum).toString();
        break;
    }
  }

  // Math operations
  sum(a: string, b: string): number {
    return +a + +b;
  }
  min(a: string, b: string): number {
    return +a - +b;
  }
  mult(a: string, b: string): number {
    return +a * +b;
  }
  split(a: string, b: string): number {
    return +a / +b;
  }
  pow(a: string) {
    this.display = Math.pow(+a, 2).toString();
    this.isCalculated = true;
  }
  sqrt() {
    this.display = Math.sqrt(+this.display).toString();
    this.isCalculated = true;
  }
}

/*
не сделал
,
 */
