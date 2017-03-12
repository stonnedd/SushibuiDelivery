import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage, MakisPage, KushiagesPage, OrdersPage} from '../pages/pages';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    OrdersPage,
    MakisPage,
    KushiagesPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    OrdersPage,
    HomePage,
    MakisPage,
    KushiagesPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
