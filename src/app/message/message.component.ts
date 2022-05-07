import { Component, OnInit } from '@angular/core';
import { Message, MessageService } from 'src/services/message.service';

const MESSAGE_DURATION = 3000;

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  message?: Message;

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.messageService.messages().subscribe(m => {
      this.message = m;
      setTimeout(() => this.message = undefined, MESSAGE_DURATION);
    });
  }
}
