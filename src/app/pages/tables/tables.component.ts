import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: "app-tables",
  styleUrls: ["tables.component.css"],
  templateUrl: "tables.component.html"
})
export class TablesComponent implements OnInit {
  public data: any;
  public dataTrain: any;
  public dataTest: any;
  
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('http://127.0.0.1:5000/home').subscribe((res: any)=> {
      this.dataTrain = res.array_train.slice(0, 10);
      this.dataTest = res.array_test.slice(0, 10);
    });
  }
}
