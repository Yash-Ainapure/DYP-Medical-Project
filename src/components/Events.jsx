import React from 'react';

const events = [
  // Ongoing Events
  {
    type: 'ongoing',
    title: 'Lab Safety Workshop',
    description: 'A workshop on lab safety and best practices.',
    date: 'July 1 - July 15, 2024'
  },
  {
    type: 'ongoing',
    title: 'Biology Lab Techniques',
    description: 'Hands-on training on modern biology lab techniques.',
    date: 'July 10 - July 20, 2024'
  },
  {
    type: 'ongoing',
    title: 'Chemistry Research',
    description: 'Ongoing research on chemical reactions.',
    date: 'July 5 - July 25, 2024'
  },
  // Upcoming Events
  {
    type: 'upcoming',
    title: 'New Equipment Training',
    description: 'Training session for the new lab equipment.',
    date: 'July 20, 2024'
  },
  {
    type: 'upcoming',
    title: 'Guest Lecture: Dr. Smith',
    description: 'Lecture on recent advancements in medical research.',
    date: 'July 22, 2024'
  },
  {
    type: 'upcoming',
    title: 'Microbiology Seminar',
    description: 'Seminar on new findings in microbiology.',
    date: 'July 25, 2024'
  },
  // Happened Events
  {
    type: 'happened',
    title: 'Annual Science Fair',
    description: 'A showcase of student projects and experiments.',
    date: 'June 25, 2024'
  },
  {
    type: 'happened',
    title: 'Physics Symposium',
    description: 'Symposium on modern physics discoveries.',
    date: 'June 20, 2024'
  },
  {
    type: 'happened',
    title: 'Lab Open Day',
    description: 'Open day for prospective students and parents.',
    date: 'June 15, 2024'
  }
];

const EventCard = ({ event }) => (
  <div className={`rounded-lg overflow-hidden shadow-md p-6 mb-4 ${event.type === 'ongoing' ? 'bg-blue-200' : event.type === 'upcoming' ? 'bg-green-200' : 'bg-yellow-200'}`}>
    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
    <p className="mb-2">{event.description}</p>
    <p className="font-semibold">{event.date}</p>
  </div>
);

const EventsPage = () => {
  const ongoingEvents = events.filter(event => event.type === 'ongoing');
  const upcomingEvents = events.filter(event => event.type === 'upcoming');
  const happenedEvents = events.filter(event => event.type === 'happened');

  return (
    <div className=" bg-gray-100 flex flex-col">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4">
          <nav className="flex justify-between items-center py-4">
            <h1 className="text-xl font-bold text-gray-800">Events & Announcements</h1>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Ongoing Events</h2>
          {ongoingEvents.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
          {upcomingEvents.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Completed Events</h2>
          {happenedEvents.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </section>
      </main>
    </div>
  );
};

export default EventsPage;
