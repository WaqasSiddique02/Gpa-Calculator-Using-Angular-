import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    courses: { grade: string, creditHours: number }[] = [
      { grade: '', creditHours: 0 }
    ];
    gpa: number | null = null;
  
    addCourse() {
      this.courses.push({ grade: '', creditHours: 0 });
    }
  
    calculateGPA() {
      let totalPoints = 0;
      let totalCreditHours = 0;
  
      this.courses.forEach(course => {
        const gradePoints = this.getGradePoints(course.grade);
        totalPoints += gradePoints * course.creditHours;
        totalCreditHours += course.creditHours;
      });
  
      this.gpa = totalPoints / totalCreditHours;
    }
  
    getGradePoints(grade: string): number {
      switch (grade.toUpperCase()) {
        case 'A': return 4.0;
        case 'B': return 3.0;
        case 'C': return 2.0;
        case 'D': return 1.0;
        case 'F': return 0.0;
        default: return 0.0;
      }
    }
}
