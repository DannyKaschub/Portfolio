import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.sass']
})
export class SkillsComponent {

  techs = [
    { name: "Angular", imageLink: "assets/img/skillIcons/Angular.png" },
    { name: "TypeScript", imageLink: "assets/img/skillIcons/typeScript.png" },
    { name: "JavaScript", imageLink: "assets/img/skillIcons/Javascript.png" },
    { name: "HTML", imageLink: "assets/img/skillIcons/html.png" },
    { name: "Firebase", imageLink: "assets/img/skillIcons/Firebase.png" },
    { name: "Git", imageLink: "assets/img/skillIcons/git.png" },
    { name: "CSS/SASS", imageLink: "assets/img/skillIcons/css.png" },
    { name: "Rest-Api", imageLink: "assets/img/skillIcons/API.png" },
    { name: "Scrum", imageLink: "assets/img/skillIcons/scrum.png" },
    { name: "Material Design", imageLink: "assets/img/skillIcons/MaterialDesign.png" }
  ];

}
