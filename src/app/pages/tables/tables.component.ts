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
  public dataLabel = [
    ['Hạnh phúc', 1919],
    ['Buồn bã', 1107],
    ['Phẫn nộ', 1459],
    ['Sợ hãi', 648],
    ['Ngạc nhiên', 662],
    ['Thông tin', 1573],
  ]
  public dataEx = [];
  
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('http://127.0.0.1:5000/home').subscribe((res: any)=> {
      this.dataTrain = res.array_train.slice(0, 10);
      this.dataTest = res.array_test.slice(0, 10);
      let hp = [];
      let bb = [];
      let sh = [];
      let pn = [];
      let nn = [];
      let tt = [];
      for (let i of res.array_train){
        if (i[1] === 'hạnh phúc'){
          hp.push(i)
        }
        if (i[1] === 'buồn bã'){
          bb.push(i)
        }
        if (i[1] === 'sợ hãi'){
          sh.push(i)
        }
        if (i[1] === 'phẫn nộ'){
          pn.push(i)
        }
        if (i[1] === 'ngạc nhiên'){
          nn.push(i)
        }
        if (i[1] === 'thông tin'){
          tt.push(i)
        }
      }
      for(let i of hp.slice(0, 2)){this.dataEx.push(i);}
      for(let i of bb.slice(0, 2)){this.dataEx.push(i);}
      for(let i of sh.slice(0, 2)){this.dataEx.push(i);}
      for(let i of pn.slice(0, 2)){this.dataEx.push(i);}
      for(let i of nn.slice(0, 2)){this.dataEx.push(i);}
      for(let i of tt.slice(0, 2)){this.dataEx.push(i);}
    });
  }
}
