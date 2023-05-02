import { Component, OnInit, ViewChild } from '@angular/core';
import { SocketResponse, SocketService } from '../socket.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { DataModalComponent } from '../data-modal/data-modal.component';
import { NumberInput } from '@angular/cdk/coercion';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  dataSource = new MatTableDataSource<SocketResponse>([]);
  columns: string[] = [
    'MSTID',
    'Match',
    'Player Name',
    'Nationality',
    'position',
    'Score',
    'Today',
  ];
  totalItems: NumberInput = 2;

  constructor(private socketService: SocketService, public dialog: MatDialog) {}
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.socketService.getResponse().subscribe((data) => {
      data['Player Name'] = `${data.First} ${data.Last}`
      this.dataSource.data = [...this.dataSource.data, data];
      this.totalItems = this.dataSource.filteredData.length;
    });
  }

  applySearch(searchTarget: EventTarget): void {
    this.dataSource.filter = (searchTarget as HTMLInputElement).value
      .trim()
      .toLowerCase();
  }
  openDialog(row: any) {
    const dialogRef = this.dialog.open(DataModalComponent, {
      data: { row },
    });
  }
}
