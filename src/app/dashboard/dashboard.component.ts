import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit,AfterViewInit {

  displayedColumns: string[] = ['name', 'mail', 'mobile', 'address','country','state','district'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  public userDetails :any;
  public mydata : any[]=[];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(){
    if(localStorage.getItem('userdetail')!= null){
      this.userDetails=JSON.parse(localStorage.getItem('userdetail')|| '[]');
      console.log(this.userDetails);
      this.mydata=this.userDetails;


    }
    
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
}
export interface PeriodicElement {
  name: string;
  mail: string;
  mobile: string;
  address: string;
  district: string;
  state: string;
  country: string;
  mydata: any[];
}

const ELEMENT_DATA: PeriodicElement[] = [
  
 
];
