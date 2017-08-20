import { Component } from '@angular/core';

@Component({
  selector: 'app-left-navigation',
  template: `
  <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
  <p class="left-paragraph">
  Left Component
  <p>
  `,
  styles:[
      `.left-paragraph{
          border: 1px solid red
      }`
  ]
})
export class LeftComponent  { 

 }