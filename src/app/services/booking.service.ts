import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private baseUrl:string='https://localhost:7019/api'

  constructor(private http:HttpClient) { }

  booking(bookingObj:any){
    return this.http.post<any>(`${this.baseUrl}/Booking`,bookingObj)
  }
}
