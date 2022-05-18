import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// Import the module from the Auth0 SDK
import { AuthModule } from '@auth0/auth0-angular';
import { LoginComponent } from './login.component';
import { UserProfileComponent } from './user.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, UserProfileComponent],
  imports: [
    BrowserModule,

    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'neutrons.us.auth0.com', // Sandbox
      clientId: 'EY6fay2mZV0VgYA0dTqgmSjEGzmBSblL', // Localhost Client ID
      // organization: 'YOUR_ORG_ID'
    }),
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}