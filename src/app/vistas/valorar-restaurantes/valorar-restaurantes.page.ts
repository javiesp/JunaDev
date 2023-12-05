import { Component, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonModal, IonicModule } from '@ionic/angular';
import { ValorarR2Page } from '../valorar-r2/valorar-r2.page';
import { FormsModule } from '@angular/forms';
import { DateAgoPipe } from '../pipes/date-ago.pipe';

@Component({
  selector: 'app-valorar-restaurantes',
  templateUrl: './valorar-restaurantes.page.html',
  styleUrls: ['./valorar-restaurantes.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ValorarR2Page, DateAgoPipe],
})
export class ValorarRestaurantesPage  {

    @ViewChild('rate_modal') rateModal!: IonModal;
    reviews: any[] = [
      {
        rate: 5,
        comment: 'Great work!',
        user_name: 'User 2',
        created_at: '2023-07-30 11:45:20'
      },
      {
        rate: 4,
        user_name: 'User 1',
        created_at: '2023-01-22 11:51:20'
      },
    ];
    rating: any = {};
    isToastOpen = false;
    errorMessage!: string;
  
    constructor() {}
  
    setOpen(isOpen: boolean) {
      this.isToastOpen = isOpen;
    }
  
    dismiss(isRating = false) {
      let data: any = null;
      if(isRating) {
        if(this.rating?.rate == 0) {
          this.setOpen(true);
          this.errorMessage = 'Please provide rating!';
          return;
        }
        data = this.rating;
        this.rating = {};
      }
      this.rateModal.dismiss(data);
    }
  
    onWillDismiss(event: any) {
      console.log(event?.detail?.data);
      const data = event?.detail?.data;
      if(data) {
        let reviews: any[] = [];
        reviews.push({
          ...data, 
          user_name: 'User' + (this.reviews.length + 1),
          created_at: new Date(),
        });
        reviews = reviews.concat(this.reviews);
        this.reviews = [...reviews];
        console.log(this.reviews);
      }
    }
}

