import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MatDialogRef } from '@angular/material/dialog';
import { BookingService } from 'src/app/services/booking.service';
import { FormBuilder, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],



})
export class HomeComponent implements OnInit{
  public users:any=[]
  public fullname:string=""
  Bookingform!:FormGroup
  selected!: Date | null;
  startDate = new Date(1990, 0, 1);
  // Function to define CSS classes for specific dates
  dateClassPredicate = (date: Date) => {
    const day = date.getDay();
    return day === 0 || day === 6 ? 'disabled-date' : '';
  };

  constructor (private fb:FormBuilder,private auth:AuthService,private bookingservice:BookingService){}

  ngOnInit(): void {
   this.Bookingform=this.fb.group({
    
   })
  }
  
}

