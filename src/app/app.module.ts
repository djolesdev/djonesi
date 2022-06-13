import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire/compat';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component'

import { StoreModule } from '@ngrx/store';
import { cartReducer } from './state/cart/cart.reducer';
import { ItemComponent } from './components/item/item.component';
import { NavComponent } from './components/nav/nav.component';
import { CartComponent } from './components/cart/cart.component';
// import { AngularFirestore } from '@angular/fire/compat/firestore';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    RestaurantsComponent,
    RestaurantComponent,
    ItemComponent,
    NavComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    StoreModule.forRoot({cart: cartReducer}),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
