import { Component } from '@angular/core';
import { SidepanelComponent } from '../sidepanel/sidepanel.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SidepanelComponent,CommonModule,TranslateModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  showSidePanel = true;
  toggleSidePanel(): void {
    this.showSidePanel = !this.showSidePanel;
  }
}
