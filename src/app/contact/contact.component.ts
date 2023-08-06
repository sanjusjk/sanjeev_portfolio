import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent {
  templateParams = {
    from_name: 'James',
    email: 'sjk@xyz.com',
    subject:'test',
    message:'test email from code'
  };

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

  formData: FormGroup = this.fb.group({
    from_name: '',
    email: '',
    subject:'',
    message:''
  });

  constructor(private fb: FormBuilder){}

  async send(){


  emailjs.init(environment.apikey);

  let response = await emailjs.send(environment.serviceid,environment.templateid, {
    from_name: this.formData.value.from_name,
    email: this.formData.value.email,
    subject:this.formData.value.subject,
    message:this.formData.value.message
  })
	.then(function(response) {
    alert('Email has been sent Successfully!');
	   console.log('SUCCESS!', response.status, response.text);
	}, function(err) {
    alert(err);
	   console.log('FAILED...', err);
	});

  this.formData.reset();
}



}
