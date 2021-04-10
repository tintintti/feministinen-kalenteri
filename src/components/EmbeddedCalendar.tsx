import React from 'react'

export default function EmbeddedCalendar() {
  return (
    <div>
      <iframe 
        src="https://calendar.google.com/calendar/embed?src=gcml4bp0t8lfp71lol2nrvqf5o%40group.calendar.google.com&ctz=Europe%2FHelsinki" 
        width="800" height="600" frameBorder="0" scrolling="no">
      </iframe>
    </div>
  )
}