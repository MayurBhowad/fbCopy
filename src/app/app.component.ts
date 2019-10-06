import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  fname;
  lname;
  emailphone;
  reemailphone;
  password;
  gender;
  month;
  day;
  year;
  date = this.dateFun();

  addUser(fname, lname, emailphone, reemailphone, password, gender, month, day, year) {
    this.fname = fname;
    this.lname = lname;
    this.emailphone = emailphone;
    this.reemailphone = reemailphone;
    this.password = password;
    this.gender = gender;
    this.month = month;
    this.day = day;
    this.year = year;

    console.log(this.fname);
    console.log(this.lname);
    console.log(this.emailphone);
    console.log(this.reemailphone);
    console.log(this.password);
    console.log(this.gender);
    console.log(this.date);
  }

  dateFun() {
    return (`${this.day}/${this.month}/${this.year}`);
  }
}
