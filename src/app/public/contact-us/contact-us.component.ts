import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../service/crud.service';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  constructor(public crudserv: CrudService) { }

  ngOnInit(): void {
  }
  nama: string;
  email: string;
  isip: string;
  tambah_Pesan() {
    let pesan = {};
    pesan['nama'] = this.nama;
    pesan['email'] = this.email;
    pesan['isip'] = this.isip;
    this.crudserv.kontak_Pesan(pesan).then(hasil => {
      this.nama = "";
      this.email = "";
      this.isip = "";
      console.log(hasil);
      alert('Pesan anda sedang kami proses');
    }).catch(eror => {
      console.log(eror);
    })
  }
}
