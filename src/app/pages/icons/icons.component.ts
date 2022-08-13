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
  public color1: string = '';
  public color2: string = '';
  public color3: string = '';
  public color4: string = '';
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
        if(this.naive_bayes == 'thông tin'){ this.color1 = 'class-white' }
        if(this.naive_bayes == 'hạnh phúc'){ this.color1 = 'class-pink' }
        if(this.naive_bayes == 'buồn bã'){ this.color1 = 'class-blue' }
        if(this.naive_bayes == 'ngạc nhiên'){ this.color1 = 'class-green' }
        if(this.naive_bayes == 'phẫn nộ'){ this.color1 = 'class-red' }
        if(this.naive_bayes == 'sợ hãi'){ this.color1 = 'class-purple' }
        if(this.logistic_regression == 'thông tin'){ this.color2 = 'class-white' }
        if(this.logistic_regression == 'hạnh phúc'){ this.color2 = 'class-pink' }
        if(this.logistic_regression == 'buồn bã'){ this.color2 = 'class-blue' }
        if(this.logistic_regression == 'ngạc nhiên'){ this.color2 = 'class-green' }
        if(this.logistic_regression == 'phẫn nộ'){ this.color2 = 'class-red' }
        if(this.logistic_regression == 'sợ hãi'){ this.color2 = 'class-purple' }
        if(this.svm == 'thông tin'){ this.color3 = 'class-white' }
        if(this.svm == 'hạnh phúc'){ this.color3 = 'class-pink' }
        if(this.svm == 'buồn bã'){ this.color3 = 'class-blue' }
        if(this.svm == 'ngạc nhiên'){ this.color3 = 'class-green' }
        if(this.svm == 'phẫn nộ'){ this.color3 = 'class-red' }
        if(this.svm == 'sợ hãi'){ this.color3 = 'class-purple' }
        if(this.lstm == 'thông tin'){ this.color4 = 'class-white' }
        if(this.lstm == 'hạnh phúc'){ this.color4 = 'class-pink' }
        if(this.lstm == 'buồn bã'){ this.color4 = 'class-blue' }
        if(this.lstm == 'ngạc nhiên'){ this.color4 = 'class-green' }
        if(this.lstm == 'phẫn nộ'){ this.color4 = 'class-red' }
        if(this.lstm == 'sợ hãi'){ this.color4 = 'class-purple' }
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
        if(this.naive_bayes == 'thông tin'){ this.color1 = 'class-white' }
        if(this.naive_bayes == 'hạnh phúc'){ this.color1 = 'class-pink' }
        if(this.naive_bayes == 'buồn bã'){ this.color1 = 'class-blue' }
        if(this.naive_bayes == 'ngạc nhiên'){ this.color1 = 'class-green' }
        if(this.naive_bayes == 'phẫn nộ'){ this.color1 = 'class-red' }
        if(this.naive_bayes == 'sợ hãi'){ this.color1 = 'class-purple' }
        if(this.logistic_regression == 'thông tin'){ this.color2 = 'class-white' }
        if(this.logistic_regression == 'hạnh phúc'){ this.color2 = 'class-pink' }
        if(this.logistic_regression == 'buồn bã'){ this.color2 = 'class-blue' }
        if(this.logistic_regression == 'ngạc nhiên'){ this.color2 = 'class-green' }
        if(this.logistic_regression == 'phẫn nộ'){ this.color2 = 'class-red' }
        if(this.logistic_regression == 'sợ hãi'){ this.color2 = 'class-purple' }
        if(this.svm == 'thông tin'){ this.color3 = 'class-white' }
        if(this.svm == 'hạnh phúc'){ this.color3 = 'class-pink' }
        if(this.svm == 'buồn bã'){ this.color3 = 'class-blue' }
        if(this.svm == 'ngạc nhiên'){ this.color3 = 'class-green' }
        if(this.svm == 'phẫn nộ'){ this.color3 = 'class-red' }
        if(this.svm == 'sợ hãi'){ this.color3 = 'class-purple' }
        if(this.lstm == 'thông tin'){ this.color4 = 'class-white' }
        if(this.lstm == 'hạnh phúc'){ this.color4 = 'class-pink' }
        if(this.lstm == 'buồn bã'){ this.color4 = 'class-blue' }
        if(this.lstm == 'ngạc nhiên'){ this.color4 = 'class-green' }
        if(this.lstm == 'phẫn nộ'){ this.color4 = 'class-red' }
        if(this.lstm == 'sợ hãi'){ this.color4 = 'class-purple' }
      });
    }
  }
  onClickClear(){
    this.string = '';
  }
}
