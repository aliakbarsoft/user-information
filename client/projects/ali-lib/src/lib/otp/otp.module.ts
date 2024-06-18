import { NgModule } from '@angular/core';
import { KeysPipe } from './pipes/keys.pipe';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NumberOnlyDirective } from '../directives/number-only.directive';
import { OtpInputComponent } from '../../public-api';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [OtpInputComponent, KeysPipe, NumberOnlyDirective],
  exports: [OtpInputComponent],
  providers: [KeysPipe],
})
export class NgOtpInputModule {}
