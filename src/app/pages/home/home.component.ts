import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
disrticts=[
  {
id:1,
title:"TVM",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ-Oq4KbHBcKkyVesKIDNayawJJn02m3NZMVX1r_ulCiQkYwywQ2y1NOc1twSiKhar3fg&usqp=CAU",
dec:" example text to build on the card title and make up the bulk of the card's content."
  },
  {
    id:2,
    title:"Kollam",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ-Oq4KbHBcKkyVesKIDNayawJJn02m3NZMVX1r_ulCiQkYwywQ2y1NOc1twSiKhar3fg&usqp=CAU",
    dec:" example text to build on the card title and make up the bulk of the card's content."
      },
      {
        id:3,
        title:"THR",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ-Oq4KbHBcKkyVesKIDNayawJJn02m3NZMVX1r_ulCiQkYwywQ2y1NOc1twSiKhar3fg&usqp=CAU",
        dec:" example text to build on the card title and make up the bulk of the card's content."
          },
]

}
