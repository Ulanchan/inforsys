import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-pesanc',
  templateUrl: './pesanc.component.html',
  styleUrls: ['./pesanc.component.scss']
})
export class PesancComponent implements OnInit {
  pesan: any;
  constructor(public crudserv: CrudService) { }

  ngOnInit(): void {
    this.crudserv.panggil_P().subscribe(data => {
      this.pesan = data.map(psn => {
        return {
          id: psn.payload.doc.id,
          nama: psn.payload.doc.data()['nama'],
          email: psn.payload.doc.data()['email'],
          isip: psn.payload.doc.data()['isip']
        };
      })
      console.log(this.pesan);
    })
  }
  hapusaja(id) {
    alert('Apakah Anda Yakin untuk di Hapus?');
    this.crudserv.hapus_P(id);

  }

}
