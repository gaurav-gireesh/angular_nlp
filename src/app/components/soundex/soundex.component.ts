import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-soundex',
  templateUrl: './soundex.component.html',
  styleUrls: ['./soundex.component.css']
})
export class SoundexComponent implements OnInit {

  soundexInput;
  outputString:string;
  private service_url = 'http://localhost:5000';
  constructor(private client: HttpClient) { }

  ngOnInit() {
  }

  getSoundexCode()    {


      console.log(this.soundexInput);
      const url = `${this.service_url}/soundex/${this.soundexInput}`;
      this.client.get(url).subscribe(
        data => {this.outputString = data['output'];
      this.outputString=this.outputString.toUpperCase();
      });

    }
    reset()  {
                this.soundexInput = '';
                this.outputString = '';
    }



}
