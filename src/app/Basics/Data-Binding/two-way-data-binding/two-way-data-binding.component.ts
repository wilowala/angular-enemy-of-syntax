import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
<<<<<<< HEAD
  styleUrls: ['./two-way-data-binding.component.css']
})
export class TwoWayDataBindingComponent implements OnInit {
  someText = ""
  constructor() { }

  ngOnInit(): void {
  }

=======
  styleUrls: ['./two-way-data-binding.component.css'],
})
export class TwoWayDataBindingComponent implements OnInit {
  someText = '';
  constructor() {}

  ngOnInit(): void {}
>>>>>>> be1250bb78650bb23a2ee1a7a6e5586e2ca01700
}
