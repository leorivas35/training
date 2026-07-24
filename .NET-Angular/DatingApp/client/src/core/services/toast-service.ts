import { Service } from '@angular/core';

@Service()
export class ToastService {

    constructor(){
        this.createToastContainer();
    }

    private createToastContainer(){
        if (!document.getElementById('toast-container')) {
            const container = document.createElement('div');
            container.id = 'toast-container';
            container.className = 'toast toast-bottom toast-end';
            document.body.appendChild(container);
        }
    }

    /**
     * It will create the toast element that will display a certain message
     * @param message - info we wish to display
     * @param alertClass - we want toast for success, info warning and error
     * @param duration - will'll give it an initial value of 5000, which will represent 5000 milleseconds
     */
    private createToastElement(message: string, alertClass: string, duration = 5000){
        const toastContainer = document.getElementById('toast-container');
        if(!toastContainer) return;

        const toast = document.createElement('div');
        toast.classList.add('alert', alertClass, 'shadow-lg');
        toast.innerHTML = `
        <span>${message}</span>
        <button class="ml-4 btn btn-sm btn-ghost">x</button>
        `;

        toast.querySelector('button')?.addEventListener('click', () => {
            toastContainer.removeChild(toast);
        });

        toastContainer.append(toast);


        setTimeout(() => {
            if (toastContainer.contains(toast)) {
                toastContainer.removeChild(toast);
            }
        }, duration);
    
    }

    success(message: string, duration?: number){
        this.createToastElement(message, 'alert-success', duration);
    }

    error(message: string, duration?: number){
        this.createToastElement(message, 'alert-error', duration);
    }

    warning(message: string, duration?: number){
        this.createToastElement(message, 'alert-warning', duration);
    }

    info(message: string, duration?: number){
        this.createToastElement(message, 'alert-info', duration);
    }

}
