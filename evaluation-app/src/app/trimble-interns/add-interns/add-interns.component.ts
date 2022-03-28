import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { DepartamentsService } from 'src/app/services/departaments.service';
import { InternService } from 'src/app/services/intern.service';
import { Deparatment } from '../deparatment';
import { Intern } from '../intern';


@Component({
  selector: 'app-add-interns',
  templateUrl: './add-interns.component.html',
  styleUrls: ['./add-interns.component.scss']
})
export class AddInternsComponent implements OnInit {
    internId : string;
    internFirstName: string;
    internLastName: string ;
    internAge:number;
    internBirthDate:string ;
    internGender:string;
    
    internDepartament:string;
    internFaculty:string ;
    departamets: Deparatment[];
    selectedDepartamentId:string;

  constructor(
    private internService:InternService,
    private departamentService: DepartamentsService,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.departamets = this.departamentService.getDepartaments();


  }

  
  addIntern(){
    if (this.internBirthDate) {
      var timeDiff = Math.abs(Date.now() - new Date(this.internBirthDate).getTime());
      this.internAge = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
        }
    console.log( this.internAge)
    const intern :Intern={
      id :this.internId,
      firstName:this.internFirstName,
      secondName:this.internLastName,
      age:this.internAge,
      birthDate:this.internBirthDate,
      gender:this.internGender,
      departamentid:this.selectedDepartamentId,
      faculty:this.internFaculty,
    };
    
    this.internService.addIntern(intern).subscribe();
    this.router.navigate([''])

    
  }

}
