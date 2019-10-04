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

    console.log(fname);
    console.log(lname);
    console.log(emailphone);
    console.log(reemailphone);
    console.log(password);
    console.log(gender);
    console.log(`${day}/${month}/${year}`);
  }
}
