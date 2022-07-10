import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: "app-icons",
  templateUrl: "icons.component.html"
})
export class IconsComponent implements OnInit {
  public data = [];
  public string;
  public svm;
  public logistic_regression;
  public navie_bayes;
  public lstm;
  public example1: string = '';
  public example2: string = '';
  public example3: string = '';
  public example4: string = '';
  constructor(private http: HttpClient) {}

  ngOnInit() {}

  onClick(){
    if(!this.string || this.string === " "){
      console.log("nothing")
      this.example1 = '';
      this.example2 = '';
      this.example3 = '';
      this.example4 = '';
    }else{
      console.log(this.string)
      this.http.post(`http://127.0.0.1:5000/predict?string=`+ this.string,'').subscribe((res: any)=> {
        console.log(res)
        this.svm = res.svm;
        this.logistic_regression = res.linear_classifier;
        this.navie_bayes = res.naive_bayes;
        this.lstm = res.lstm;
        this.example1 = `Navie Bayes: ` + this.navie_bayes;
        this.example2 = `Logistic Regression: ` + this.logistic_regression;
        this.example3 = `SVM: ` + this.svm;
        this.example4 = `LSTM: ` + this.lstm;
      });
    }
  }
}