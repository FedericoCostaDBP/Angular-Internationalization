import { Component, EventEmitter, Output } from '@angular/core';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-sidepanel',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './sidepanel.component.html',
  styleUrl: './sidepanel.component.css',
})
export class SidepanelComponent {
  @Output() togglePanel = new EventEmitter<void>();
  toggleSidePanel(): void {
    this.togglePanel.emit();
  }
}