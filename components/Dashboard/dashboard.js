// Initialize Calendar Library
document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        timeZone: 'UTC',
        height: 600,
        initialView: 'dayGridMonth',
        initialDate: '2022-08-07',
        aspectRatio: 2,
        events: [
            {
            title: 'Konsultasi Dokter Lefi',
            start: '2022-08-01'
            },
            {
            title: 'Terapi Dengan Dokter Lefi',
            start: '2022-08-07',
            end: '2022-08-10'
            },
            {
            title: 'Konsultasi Dokter Lefi',
            start: '2022-08-20',
            },
            {
            title: 'Cek Darah',
            start: '2022-08-29',
            }
        ]
    });

    calendar.render();
    // calendar.updateSize()
});