import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatDatePipe } from './pipes/format-date.pipe';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { InstagramComponent } from './components/icons/instagram/instagram.component';
import { LinkedInComponent } from './components/icons/linked-in/linked-in.component';

@NgModule({
  declarations: [FormatDatePipe, HeaderComponent, FooterComponent, InstagramComponent, LinkedInComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, FooterComponent, InstagramComponent, LinkedInComponent, FormatDatePipe],
})
export class SharedModule {}
