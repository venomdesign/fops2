import { ToastOptions, ToastsManager } from 'ng2-toastr/ng2-toastr';

import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {

  constructor(private toastr: ToastsManager, private toastOpts: ToastOptions) {
    this.toastOpts.toastLife = 4000;
    this.toastOpts.positionClass = 'toast-top-right';
    this.toastOpts.animate = 'flyRight';
  }
  success(message: string, title?: string) {
    this.toastr.success(message, title);
  }

  info(message: string, title?: string) {
    this.toastr.info(message, title);
  }

  warning(message: string, title?: string) {
    this.toastr.warning(message, title);
  }

  error(message: string, title?: string) {
    this.toastr.error(message, title);
  }
}
