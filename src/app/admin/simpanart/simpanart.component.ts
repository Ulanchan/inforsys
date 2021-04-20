import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../../service/crud.service';
@Component({
  selector: 'app-simpanart',
  templateUrl: './simpanart.component.html',
  styleUrls: ['./simpanart.component.scss']
})
export class SimpanartComponent implements OnInit {

  constructor(public crudserv: CrudService, private router: Router) { }

  ngOnInit(): void {
  }
  judul: string;
  gambar: string;
  isi: string;
  tambah_Artikel() {
    let Artikel = {};
    Artikel['judul'] = this.judul;
    Artikel['gambar'] = this.gambar;
    Artikel['isi'] = this.isi;
    this.crudserv.simpan_Artikel(Artikel).then(hasil => {
      this.judul = "";
      this.gambar = "";
      this.isi = "";
      console.log(hasil);
      alert('Tambah Artikel Berhasil');
      this.router.navigate(['/admin/artikel']);
    }).catch(eror => {
      alert(eror);
    })
  }
}
