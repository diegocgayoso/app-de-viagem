import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  editUserStatus = true;

  userForm = this.fb.group({
    name: ['Diego Carlos'],
    email: ['carlosDiego@gmail.com'],
    phone: ['6199999-9999']
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.userForm.disable();
  }
  editUser() {
    console.log();

  }
}
