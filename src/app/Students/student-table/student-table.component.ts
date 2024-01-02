import { Component } from '@angular/core';
import { Student } from 'src/app/Core/Models/Student.model';
import { StudentService } from 'src/app/Core/Services/student.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css']
})
export class StudentTableComponent {
  constructor(private studentService: StudentService) {}
  students:Student[] =[];
  isShowAddForm : boolean = false;
  isShowUpdateForm : boolean = false;
  page: number = 0;
  totalPages: number = 0;
  id:number = 0;

  ngOnInit() {
    this.getData(this.page);
  }

  getData(page:number) {
    this.studentService.getSomeData(page).subscribe(
      data => {
        this.students = data.content
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
        this.studentService.deleteData(id).subscribe()
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
