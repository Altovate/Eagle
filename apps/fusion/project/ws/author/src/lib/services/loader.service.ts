/*               "Copyright 2020 Infosys Ltd.
               Use of this source code is governed by GPL v3 license that can be found in the LICENSE file or at https://opensource.org/licenses/GPL-3.0
               This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License version 3" */
import { BehaviorSubject } from 'rxjs'
import { Injectable } from '@angular/core'

@Injectable()
export class LoaderService {
  changeLoad = new BehaviorSubject<boolean>(false)

  private doubleBack = new BehaviorSubject(false)
  currentState = this.doubleBack.asObservable()

  changeLoadState(state: boolean) {
    this.doubleBack.next(state)
  }

}