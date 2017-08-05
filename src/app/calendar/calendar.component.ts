import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { CalendarEvent, CalendarMonthViewDay } from 'angular-calendar';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class CalendarComponent implements OnInit {
  viewDate= new Date();

  view= 'month';
  selectedDay: CalendarMonthViewDay;
  clickedDate= this.viewDate;
  locale = 'es';
  // Date Format 2017-08-16T10:00:00
  events: CalendarEvent[] = [
    {
      title: 'Evento 1',
      color: colors.blue,
      start: new Date("2017-08-21T15:00:00")
    },
    {
      title: 'Evento 2',
      color: colors.blue,
      start: new Date("2017-08-16T10:00:00")
    },
    {
      title: 'Evento 2.1',
      color: colors.blue,
      start: new Date("2017-08-16T15:00:00")
    },
    {
      title: 'Evento 2.2',
      color: colors.blue,
      start: new Date("2017-08-16T09:00:00")
    },
    {
      title: 'Evento 3',
      color: colors.blue,
      start: new Date("2017-08-4T17:00:00")
    },
    {
      title: 'Evento 4',
      color: colors.blue,
      start: new Date("2017-08-10T09:00:00")
    }
  ];

  dayClicked(day: CalendarMonthViewDay): void {
    if (this.selectedDay) {
      delete this.selectedDay.cssClass;
    }
    day.cssClass = 'cal-day-selected';
    this.selectedDay = day;
    this.clickedDate = day.date;
  }

  beforeMonthViewRender({ body }: { body: CalendarMonthViewDay[] }): void {
    body.forEach(day => {
      if (
        this.selectedDay &&
        day.date.getTime() === this.selectedDay.date.getTime()
      ) {
        day.cssClass = 'cal-day-selected';
        this.selectedDay = day;
      }
    });
  }

  eventClicked({ event }: { event: CalendarEvent }): void {
    console.log('Event clicked', event);
  }

  constructor() { }

  ngOnInit() {
  }

}
