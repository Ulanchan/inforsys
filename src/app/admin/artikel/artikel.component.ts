import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-artikel',
  templateUrl: './artikel.component.html',
  styleUrls: ['./artikel.component.scss']
})
export class ArtikelComponent implements OnInit {
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
  edt(rekam) {
    rekam.edit = true;
    rekam.ubahjudul = rekam.judul;
    rekam.ubahgambar = rekam.gambar;
    rekam.ubahisi = rekam.isi;
  }

  edit(ubah) {
    let data = {};
    data['judul'] = ubah.ubahjudul;
    data['gambar'] = ubah.ubahgambar;
    data['isi'] = ubah.ubahisi;

    this.crudserv.edit_A(ubah.id, data);
    ubah.edit = false;
  }

  hapusaja(id) {
    alert('Apakah Anda Yakin untuk di Hapus?');
    this.crudserv.hapus_A(id);

  }

}
