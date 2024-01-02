import { Component } from '@angular/core';
import { Teacher } from 'src/app/Core/Models/Teacher.model';
import { TeacherService } from 'src/app/Core/Services/teacher.service';
import swal from 'sweetalert'

@Component({
  selector: 'app-teacher-table',
  templateUrl: './teacher-table.component.html',
  styleUrls: ['./teacher-table.component.css']
})
export class TeacherTableComponent {
  constructor(private teacherService: TeacherService) {}
  teachers:Teacher[] =[];
  isShowAddForm : boolean = false;
  isShowUpdateForm : boolean = false;
  page: number = 0;
  totalPages: number = 0;
  id:number = 0;

  ngOnInit() {
    this.getData(this.page);
  }

  getData(page:number) {
    this.teacherService.getSomeData(page).subscribe(
      data => {
        this.teachers = data.content
        this.totalPages = data.totalPages
      }
    );
  }

  delete(id:number) {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: ['Cancel', 'OK'],
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        this.teacherService.deleteData(id).subscribe()
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
        this.getData(this.page)
      } else {
         swal("Your imaginary file is safe!");
      }
    });
  }

  showupdateForm(id:number)
  {
    this.isShowUpdateForm = true;
    this.id=id;
  }

  closeUpdateForm()
  {
    this.isShowUpdateForm = false;
    this.getData(this.page);
  }

  closeAddForm()
  {
    this.isShowAddForm = false;
    this.getData(this.page);
  }

  nextPage()
  {
    if(this.page+2<=this.totalPages)
    {
      this.page=++this.page
      this.getData(this.page)
    } 
  }

  prevPage()
  {
    if(this.page-1>=0)
    {
      this.page = --this.page;
      this.getData(this.page)
    } 
  }
}
