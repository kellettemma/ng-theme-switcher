import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {    
  isDropdownActive: boolean = true;
  isCodeTheme: boolean;
  
  /* Toggle Dropdown on side nav */
  toggleDropdown() {
      this.isDropdownActive = !this.isDropdownActive;
  }

  /* Switch to code theme and add class to the html tag */
  switchThemeCode(){
      this.isCodeTheme = true;
      const html = document.querySelector('html');
      html.classList.add('code');
  }

   /* Switch to design theme and remove class from the html tag */
   switchThemeDesign(){
    this.isCodeTheme = false;
    const html = document.querySelector('html');
    html.classList.remove('code');
  }


}
