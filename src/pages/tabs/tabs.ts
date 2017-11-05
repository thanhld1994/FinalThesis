import { FirebaseServiceProvider } from './../../providers/firebase-service/firebase-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = 'DashboardPage';
  tab2Root = 'ListPage';
  tab3Root = 'CreateCookingRecipePage';
  tab4Root = 'SettingsPage';

  constructor(public navCtrl: NavController, public firebaseService: FirebaseServiceProvider) { }

}
