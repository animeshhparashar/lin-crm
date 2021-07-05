import React from "react";

import "../assets/scss/main.scss";
import "../assets/scss/pages/calendar.scss";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import {TitleBar, TitleBarActions} from "../components/title-bar";
import interactionPlugin from "@fullcalendar/interaction";
import {ToolbarInput} from "@fullcalendar/common";


class Calendar extends React.Component {

    handleDateClick = (arg) => {
        alert(arg.dateStr)
    }

    render() {

        return (
            <div className="view-wrapper">
                <div className="calendar-wrapper">
                    <TitleBar title="Calendar">
                        <TitleBarActions />
                    </TitleBar>
                    <FullCalendar
                        viewClassNames="cal-view"
                        dayHeaderClassNames="cal-day"
                        plugins={[timeGridPlugin, dayGridPlugin, interactionPlugin]}
                        titleFormat={{year: 'numeric', month: 'short', day: 'numeric'}}
                        views={{
                        dayGridMonth: {
                            dayHeaderFormat: {
                                weekday: 'long'
                            }
                        },
                        timeGridWeek: {
                            dayHeaderFormat: {
                                weekday: 'long',
                                day: 'numeric',
                            }
                        }
                    }}
                        headerToolbar={{
                            center: 'dayGridMonth,timeGridWeek',
                            right: 'prev today next'
                        }}
                        height={520}
                        initialView="timeGridWeek"
                    />
                </div>
            </div>
        );

    }
}

export default Calendar;