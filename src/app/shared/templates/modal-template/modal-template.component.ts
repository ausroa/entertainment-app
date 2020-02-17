import {Component, Input, OnInit} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-template',
  templateUrl: './modal-template.component.html',
  styleUrls: ['./modal-template.component.scss']
})
export class ModalTemplateComponent implements OnInit {
  @Input()
  title: string;

  constructor(private _activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  close() {
    this._activeModal.close();
  }
}
