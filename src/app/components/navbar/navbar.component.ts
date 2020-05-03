import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'Navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public criterio: string;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  public buscarPais(){
    this.router.navigate(['/pais', this.criterio]);
  }

}
