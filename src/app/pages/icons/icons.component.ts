import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-icons",
  styleUrls: ["icons.component.css"],
  templateUrl: "icons.component.html"
})
export class IconsComponent implements OnInit {
  public data = [];
  public string;
  public svm;
  public logistic_regression;
  public naive_bayes;
  public lstm;
  public queryString: string = ''
  public example1: string = '';
  public example2: string = '';
  public example3: string = '';
  public example4: string = '';
  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.queryString = params.predict;
      this.string = this.queryString;
    })
  }

  ngOnInit() {
    if(this.queryString && this.queryString!=='' && this.queryString!==' '){
      this.http.post(`http://127.0.0.1:5000/predict?string=`+ this.queryString,'').subscribe((res: any)=> {
        this.svm = res.svm;
        this.logistic_regression = res.linear_classifier;
        this.naive_bayes = res.naive_bayes;
        this.lstm = res.lstm;
        this.example1 = `Naive Bayes: ` + this.naive_bayes;
        this.example2 = `Logistic Regression: ` + this.logistic_regression;
        this.example3 = `SVM: ` + this.svm;
        this.example4 = `LSTM: ` + this.lstm;
      });
    }
  }

  onClick(){
    if(!this.string || this.string === " "){
      alert("Input something!")
      this.example1 = '';
      this.example2 = '';
      this.example3 = '';
      this.example4 = '';
    }else{
      this.http.post(`http://127.0.0.1:5000/predict?string=`+ this.string,'').subscribe((res: any)=> {
        this.svm = res.svm;
        this.logistic_regression = res.linear_classifier;
        this.naive_bayes = res.naive_bayes;
        this.lstm = res.lstm;
        this.example1 = `Naive Bayes: ` + this.naive_bayes;
        this.example2 = `Logistic Regression: ` + this.logistic_regression;
        this.example3 = `SVM: ` + this.svm;
        this.example4 = `LSTM: ` + this.lstm;
      });
    }
  }
  onClickClear(){
    this.string = '';
  }
}
