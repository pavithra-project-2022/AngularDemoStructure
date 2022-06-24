import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  role: any;
  constructor(private router: Router,
    private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  logout(){
    const dialogConfig = new MatDialogConfig();
    
      localStorage.clear();
      this.router.navigate(['/']);
  
  }

}
