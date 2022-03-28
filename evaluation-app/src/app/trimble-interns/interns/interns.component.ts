import { Component, OnInit,Input } from '@angular/core';
import { DepartamentsService } from 'src/app/services/departaments.service';
import { InternService } from 'src/app/services/intern.service';
import { Intern } from '../intern';

@Component({
  selector: 'app-interns',
  templateUrl: './interns.component.html',
  styleUrls: ['./interns.component.scss']
})
export class InternsComponent implements OnInit {
  interns: Intern[];
  constructor(private internService: InternService,private depService: DepartamentsService) { }

  ngOnInit(): void {
    this.internService.getInterns().subscribe((interns: Intern[]) => {
      this.interns = interns;
    });
    
  }
  deleteIntern(id: string) {
    const note = this.interns.find((x) => x.id === id);
    this.internService
      .deleteIntern(id)
      .subscribe(() => (this.interns = this.interns.filter((x) => x.id !== id)));
  }
}
