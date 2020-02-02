import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {    
  isDropdownActive: boolean = true;
  isCodeTheme: boolean;
  
  toggleDropdown() {
      this.isDropdownActive = !this.isDropdownActive;
  }

  switchThemeCode(){
      this.isCodeTheme = true;
      const html = document.querySelector('html');
      html.classList.add('code');
  }

  switchThemeDesign(){
    this.isCodeTheme = false;
    const html = document.querySelector('html');
    html.classList.remove('code');
  }


}
