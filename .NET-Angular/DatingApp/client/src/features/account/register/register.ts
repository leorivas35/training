import { Component, inject, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegisterCreds, User } from '../../../types/user';
import { AccountService } from '../../../core/services/account-service';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {  
  protected creds = {} as RegisterCreds;
  cancelRegister = output<boolean>();
  private accountService = inject(AccountService); 

  register(){
    this.accountService.register(this.creds).subscribe({
      next: response => {
        console.log(response);
        this.cancel();        
      },
      error: error => console.log(error)      
    })
    
  }
 
  cancel(){
    // Because is an output signal it's has an 
    // emit metodh: so this can emit an event
   this.cancelRegister.emit(false);
    
  }
}
