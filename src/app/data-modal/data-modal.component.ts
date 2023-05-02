import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-data-modal',
  templateUrl: './data-modal.component.html',
  styleUrls: ['./data-modal.component.css'],
})
export class DataModalComponent implements OnInit {
  rowData: any;
  dataKeys: string[];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DataModalComponent>
  ) {
    this.rowData = data.row;
    this.dataKeys = Object.keys(data.row);
  }

  ngOnInit(): void {}

  onClose(): void {
    this.dialogRef.close();
  }
}
