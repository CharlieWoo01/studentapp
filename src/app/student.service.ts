import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Student } from './student';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class StudentService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getStudents(): Observable<Student[]> {
    return this.http.get<any>(`${this.apiServerUrl}/students/all`);
  }

  public addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(`${this.apiServerUrl}/students/add`, student);
  }

  public updateStudent(student: Student): Observable<Student> {
    return this.http.put<Student>(
      `${this.apiServerUrl}/students/update`,
      student
    );
  }

  public deleteStudent(studentId: string): Observable<void> {
    return this.http.delete<void>(
      `${this.apiServerUrl}/students/delete/${studentId}`
    );
  }
}
