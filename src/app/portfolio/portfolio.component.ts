import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.sass']
})
export class PortfolioComponent {
  portfolio = [
    {
    name : "El Pollo Loco", 
    image : "assets/img/lapis/Lapi_polloLoco.png", 
    techs : "JavaScript | HTML | CSS",
    text: "A simple Jump-and-Run game based on an object-oriented approach. Help Peppe to find coins and poison bottles to fight against the killer Chicken.",
    link: "https://danny-kaschub.de/El_Pollo_Loco/index.html",
    github:"https://github.com/DannyKaschub/ElPoloLoco",
    liveBTNActive:"active"
  },
  {
    name : "Ring of Fire", 
    image : "assets/img/lapis/Lapi_RingOfFire.png", 
    techs : "Angular | TypeScript | SASS | Firebase",
    text: "A small Game-app inspired by the popular drinking card game, that works on multiple devices.",
    link: "https://ring-of-fire-784e6.web.app/",
    github:"https://github.com/DannyKaschub/Ring-of-Fire",
    liveBTNActive:"active"
  },
  {
    name : "Join", 
    image : "assets/img/lapis/Lapi_Join.png", 
    techs : "JavaScript | HTML | CSS",
    text: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
    link: "https://danny-kaschub.de/Join/index.html",
    github:"https://github.com/DannyKaschub/Join",
    liveBTNActive:"active"
  },  
  {
    name : "Portfolio", 
    image : "assets/img/lapis/Lapi_Portfolio.png", 
    techs : "Angular | TypeScript | SASS | HTML",
    text: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
    link: "",
    github:"",
    liveBTNActive:"disable"
  }

  ]

}
