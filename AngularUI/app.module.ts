import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';




import { AppComponent } from './app.component';
import { ResistrationComponent } from './Components/Authorisation/resistration/resistration.component';
import { LoginComponent } from './Components/Authorisation/login/login.component';
import { AllAuthorisationListComponent } from './Components/Authorisation/all-authorisation-list/all-authorisation-list.component';
import { UpadatePasswordComponent } from './Components/Authorisation/upadate-password/upadate-password.component';
import { RemoveAuthorizationComponent } from './Components/Authorisation/remove-authorization/remove-authorization.component';
import { GetAllStudentComponent } from './Components/Student/get-all-student/get-all-student.component';
import { ResisterStudentComponent } from './Components/Student/resister-student/resister-student.component';
import { RemoveStudentComponent } from './Components/Student/remove-student/remove-student.component';
import { GetAllBooksComponent } from './Components/Book/get-all-books/get-all-books.component';
import { AddBooksComponent } from './Components/Book/add-books/add-books.component';
import { RemoveBooksComponent } from './Components/Book/remove-books/remove-books.component';
import { BorrowComponent } from './Components/BookBorrow/borrow/borrow.component';
import { ReturnComponent } from './Components/BookBorrow/return/return.component';
import { SearchByStudentIdComponent } from './Components/BookBorrow/search-by-student-id/search-by-student-id.component';
import { SearchByBookIdComponent } from './Components/BookBorrow/search-by-book-id/search-by-book-id.component';
import { BorrowedListComponent } from './Components/BookBorrow/borrowed-list/borrowed-list.component';
import { DashBoardComponent } from './Components/dash-board/dash-board.component';


import {AuthService} from './Services/auth.service';
import {BookService} from './Services/book.service';
import {StuService} from './Services/stu.service';
import {BookBorrowService} from './Services/book-borrow.service';
import {DashService} from './Services/dash.service';



const appRoots = [
  {path: '', redirectTo: 'authResister', pathMatch: 'full'},
//  {path: '', component : AppComponent},
  {path: 'dash', component : DashBoardComponent},
  {path: 'authResister', component: ResistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'getAllAuth', component: AllAuthorisationListComponent},
  {path: 'updateAuthPass', component: UpadatePasswordComponent},
  {path: 'removeAuth', component: RemoveAuthorizationComponent},
  {path: 'getAllStu', component: GetAllStudentComponent},
  {path: 'resisterStu', component: ResisterStudentComponent},
  {path: 'removeStu', component: RemoveStudentComponent},
  {path: 'getAllBook', component: GetAllBooksComponent},
  {path: 'addBook', component: AddBooksComponent},
  {path: 'removeBook', component: RemoveBooksComponent},
  {path: 'Borrow', component: BorrowComponent},
  {path: 'return', component: ReturnComponent},
  {path: 'searchByStuId', component: SearchByStudentIdComponent},
  {path: 'searchByBookId', component: SearchByBookIdComponent},
  {path: 'borrowedList', component: BorrowedListComponent}
];




@NgModule({
  declarations: [
    AppComponent,
    ResistrationComponent,
    LoginComponent,
    AllAuthorisationListComponent,
    UpadatePasswordComponent,
    RemoveAuthorizationComponent,
    GetAllStudentComponent,
    ResisterStudentComponent,
    RemoveStudentComponent,
    GetAllBooksComponent,
    AddBooksComponent,
    RemoveBooksComponent,
    BorrowComponent,
    ReturnComponent,
    SearchByStudentIdComponent,
    SearchByBookIdComponent,
    BorrowedListComponent,
    DashBoardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpModule,
    RouterModule.forRoot(appRoots)
  ],
  providers: [AuthService, BookService, StuService, DashService, BookBorrowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
