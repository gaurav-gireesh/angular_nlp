import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-french',
  templateUrl: './french.component.html',
  styleUrls: ['./french.component.css']
})
export class FrenchComponent implements OnInit {

  inputNumber;
  outputString;
  private service_url = 'http://localhost:5000';



  //url = `${this.service_url}/frenchitup/234`;
  constructor(private client: HttpClient) {
    this.inputNumber="";

  }

  ngOnInit() {
  }
  getFrench()
  {
    console.log(this.inputNumber);
    const url = `${this.service_url}/frenchitup/${this.inputNumber}`;
    this.client.get(url).subscribe(
      data => this.outputString = data['output']);

  }

  resetInput()
  {
    this.inputNumber="";
    this.outputString="";
  }

}
