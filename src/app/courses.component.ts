import { CoursesService } from './courses.service';
import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'courses',
    templateUrl: './courses.component.html',
})
export class CoursesComponent {
    @Input('is-active') isActive: boolean = false;
    @Output() change = new EventEmitter();
    
    title: string = 'Course List';
    courses: string[];
    email:string = 'yassirabderrazik@gmail.com';
    body = ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur non voluptatum veritatis voluptate porro eum, quaerat ipsam est quas praesentium consequatur exercitationem officiis accusantium sed sequi iure! Voluptas, ipsa doloribus.';
    course = {
        titre: 'Laravel + Angular',
        avis: '4.2456',
        folowers: 455,
        prix: 500,
        pubDate: new Date(2022, 11, 11),
        active: this.isActive
    }



    constructor(coursesService: CoursesService) {
        this.courses = coursesService.getCourses();
    }

    onClick($event: any){
        $event.stopPropagation();
        console.log('test', $event);
        
    }
    onKeyup(){
        console.log(this.email);
    }
    getList() {
        return this.title;
    }
    myFunction(){
            this.isActive = !this.isActive;
    }
}