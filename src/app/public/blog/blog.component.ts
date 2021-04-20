import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  artikel: any;
  constructor(public crudserv: CrudService) { }

  ngOnInit(): void {
    this.crudserv.panggil_A().subscribe(data => {
      this.artikel = data.map(art => {
        return {
          id: art.payload.doc.id,
          gambar: art.payload.doc.data()['gambar'],
          isi: art.payload.doc.data()['isi'],
          judul: art.payload.doc.data()['judul']
        };
      })
      console.log(this.artikel);
    })
  }

}
