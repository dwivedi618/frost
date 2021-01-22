import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { URL } from 'url';
import { ChatFileDataSource, ChatFileItem } from './chat-file-datasource';

@Component({
  selector: 'app-chat-file',
  templateUrl: './chat-file.component.html',
  styleUrls: ['./chat-file.component.scss']
})
export class ChatFileComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<ChatFileItem>;
  dataSource: ChatFileDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['type', 'name','sent_by','shared_date'];

  ngOnInit() {
    this.dataSource = new ChatFileDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
  getFileIcon(file_type){

    // const ext = file_name.split('.').pop();
    return `../../../../assets/svg/${file_type}.svg`;
  }
}
