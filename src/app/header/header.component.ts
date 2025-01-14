import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { NgOptimizedImage } from  '@angular/common'


@Component({
  selector: 'app-header',
  imports: [CommonModule, ButtonModule, NgOptimizedImage],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent{
  
}
