import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'createdOn',
    'createdBy',
    'modifiedBy',
    'lastModified',
    'status',
  ];
  dataSource = null;

  constructor(private http: HttpClient) {
    http.get('http://localhost:8080/api/tickets').subscribe((tickets: Ticket[]) => {
      this.dataSource = new MatTableDataSource<Ticket>(tickets);
    });
  }

  ngOnInit(): void {

  }
}
export interface Ticket {
  id: number;
  createdOn: string;
  createdBy: string;
  modifiedBy: string;
  lastModified: string;
  status: string;
}

