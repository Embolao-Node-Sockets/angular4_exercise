import { Component } from '@angular/core';

@Component({
  selector: 'app-right-content',
  template: `
  <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
  <p class="right-paragraph">
  Right Component
  <p>
  </div>
  `,
  styles:[
    `.right-paragraph{
        border: 1px solid red
    }`
]
  ,
})
export class RightComponent  { 

 }