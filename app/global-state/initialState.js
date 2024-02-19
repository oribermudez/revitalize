const initialState = {
  appointments: [
    {
      id: 'appointment-1',
      img: "/assets/team-3.jpg",
      name: "John Michael",
      service: "Deep Tissue Massage",
      duration: "60 min",
      active: true,
      date: "09/12/23",
      start: new Date(2023, 11, 1, 10, 0),
      endEnd: new Date(2023, 11, 1, 12, 0),
    },
    {
      id: 'appointment-2',
      img: "/assets/team-2.jpg",
      name: "Alexa Liras",
      service: "Hot Stone Massage",
      duration: "60 min",
      active: true,
      date: "10/12/23",
      start: new Date(2023, 11, 5, 14, 0),
      end: new Date(2023, 11, 5, 16, 0),
    },
    {
      id: 'appointment-3',
      img: "/assets/team-1.jpg",
      name: "Laurent Perrier",
      service: "Relaxation Massage",
      duration: "90 min",
      active: true,
      date: "10/12/23",
      start: new Date(2023, 11, 6, 14, 0),
      end: new Date(2023, 11, 6, 16, 0),
    },
    {
      id: 'appointment-4',
      img: "/assets/team-4.jpg",
      name: "Michael Levi",
      service: "Deep Tissue Massage",
      duration: "60 min",
      active: true,
      date: "12/12/23",
      start: new Date(2023, 11, 8, 14, 0),
      end: new Date(2023, 11, 8, 16, 0),
    },
    {
      id: 'appointment-5',
      img: "/assets/team-5.jpg",
      name: "Richard Gran",
      service: "Relaxation Massage",
      duration: "60 min",
      active: false,
      date: "15/12/23",
      start: new Date(2023, 11, 9, 14, 0),
      end: new Date(2023, 11, 9, 16, 0),
    },
    {
      id: 'appointment-6',
      img: "/assets/team-3.jpg",
      name: "Ryan Michael",
      service: "Deep Tissue Massage",
      duration: "60 min",
      active: true,
      date: "09/12/23",
      start: new Date(2023, 11, 11, 14, 0),
      end: new Date(2023, 11, 11, 16, 0),
    },
    {
      id: 'appointment-7',
      img: "/assets/team-2.jpg",
      name: "Samantha Liras",
      service: "Hot Stone Massage",
      duration: "60 min",
      active: true,
      date: "10/12/23",
      start: new Date(2023, 11, 12, 14, 0),
      end: new Date(2023, 11, 12, 16, 0),
    },
    {
      id: 'appointment-8',
      img: "/assets/team-1.jpg",
      name: "Gillian Perrier",
      service: "Relaxation Massage",
      duration: "90 min",
      active: true,
      date: "10/12/23",
      start: new Date(2023, 11, 13, 14, 0),
      end: new Date(2023, 11, 13, 16, 0),
    },
    {
      id: 'appointment-9',
      img: "/assets/team-4.jpg",
      name: "Aaron Levi",
      service: "Deep Tissue Massage",
      duration: "60 min",
      active: true,
      date: "12/12/23",
      start: new Date(2023, 11, 14, 14, 0),
      end: new Date(2023, 11, 14, 16, 0),
    },
    {
      id: 'appointment-10',
      img: "/assets/team-5.jpg",
      name: "Sebastian Gran",
      service: "Relaxation Massage",
      duration: "60 min",
      active: false,
      date: "15/12/23",
      start: new Date(2023, 11, 17, 14, 0),
      end: new Date(2023, 11, 17, 16, 0),
    },
  ],
  users: [
    {
      id: 'user-1',
      img: "/assets/team-3.jpg",
      name: "John Michael",
      email: 'johnmichael@gmail.com',
      phone: '+1 (070) 123-4567',
      location: 'Calgary, Alberta',
      massagesTaken: 12,
      address: {
        street: '123 Main St',
        city: 'Calgary',
        province: 'Alberta',
        postalCode: 'T2T 2T2'
        }
    },
    {
      id: 'user-2',
      img: "/assets/team-2.jpg",
      name: "Alexa Liras",
      email: 'alexaliras@gmail.com',
      phone: '+1 (070) 123-4567',
      location: 'Calgary, Alberta',
      massagesTaken: 12,
      address: {
        street: '123 Main St',
        city: 'Calgary',
        province: 'Alberta',
        postalCode: 'T2T 2T2'
        }
    },
    {
      id: 'user-3',
      img: "/assets/team-1.jpg",
      name: "Laurent Perrier",
      email: 'laurentperrier@gmail.com',
      phone: '+1 (070) 123-4567',
      location: 'Calgary, Alberta',
      massagesTaken: 12,
      address: {
        street: '123 Main St',
        city: 'Calgary',
        province: 'Alberta',
        postalCode: 'T2T 2T2'
        }
    },
    {
      id: 'user-4',
      img: "/assets/team-4.jpg",
      name: "Michael Levi",
      email: 'michaellevi@gmail.com',
      phone: '+1 (070) 123-4567',
      location: 'Calgary, Alberta',
      massagesTaken: 12,
      address: {
        street: '123 Main St',
        city: 'Calgary',
        province: 'Alberta',
        postalCode: 'T2T 2T2'
        }
    },
    {
      id: 'user-5',
      img: "/assets/team-5.jpg",
      name: "Richard Gran",
      email: 'richardgran@gmail.com',
      phone: '+1 (070) 123-4567',
      location: 'Calgary, Alberta',
      massagesTaken: 12,
      address: {
        street: '123 Main St',
        city: 'Calgary',
        province: 'Alberta',
        postalCode: 'T2T 2T2'
        }
    },
    {
      id: 'user-6',
      img: "/assets/team-3.jpg",
      name: "Ryan Michael",
      email: 'ryanmichael@gmail.com',
      phone: '+1 (070) 123-4567',
      location: 'Calgary, Alberta',
      massagesTaken: 12,
      address: {
        street: '123 Main St',
        city: 'Calgary',
        province: 'Alberta',
        postalCode: 'T2T 2T2'
        }
    },
    {
      id: 'user-7',
      img: "/assets/team-2.jpg",
      name: "Samantha Liras",
      email: 'samliras@gmail.com',
      phone: '+1 (070) 123-4567',
      location: 'Calgary, Alberta',
      massagesTaken: 12,
      address: {
        street: '123 Main St',
        city: 'Calgary',
        province: 'Alberta',
        postalCode: 'T2T 2T2'
        }
    },
    {
      id: 'user-8',
      img: "/assets/team-1.jpg",
      name: "Gillian Perrier",
      email: 'gillianperrier@gmail.com',
      phone: '+1 (070) 123-4567',
      location: 'Calgary, Alberta',
      massagesTaken: 12,
      address: {
        street: '123 Main St',
        city: 'Calgary',
        province: 'Alberta',
        postalCode: 'T2T 2T2'
        }
    },
    {
      id: 'user-9',
      img: "/assets/team-4.jpg",
      name: "Aaron Levi",
      email: 'aaronlevi@gmail.com',
      phone: '+1 (070) 123-4567',
      location: 'Calgary, Alberta',
      massagesTaken: 12,
      address: {
        street: '123 Main St',
        city: 'Calgary',
        province: 'Alberta',
        postalCode: 'T2T 2T2'
        }
    },
    {
      id: 'user-10',
      img: "/assets/team-5.jpg",
      name: "Sebastian Gran",
      email: 'sebastiangran@gmail.com',
      phone: '+1 (070) 123-4567',
      location: 'Calgary, Alberta',
      massagesTaken: 12,
      address: {
        street: '123 Main St',
        city: 'Calgary',
        province: 'Alberta',
        postalCode: 'T2T 2T2'
        }
    },
  ],
};

export default initialState;