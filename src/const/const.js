export const movieDetails = 
{
    "id": "unique_id_for_movie_or_event",
    "event_type": "movies",
    "title": "Bad Boys: Ride or Die",
    "rating": 8.6,
    "votes": "19.6K",
    "duration": "1h 57m",
    "releaseDate": "6 Jun, 2024",
    "genres": ["Action", "Adventure", "Comedy"],
    "languages": ["English", "Hindi", "French", "Spanish"],
    "formats": ["2D", "ICE", "MX4D", "4DX", "2D SCREEN X", "IMAX 2D"],
    "imgSrc": "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/bad-boys-ride-or-die-et00383487-1719560098.jpg",
    "bgImage": "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/bad-boys-ride-or-die-et00383487-1719560098.jpg",
    "description": "Bad Boys delivers on every front with non-stop action and a great storyline. Will Smith and Martin Lawrence have fantastic chemistry, making every scene entertaining. Highly recommend for action movie enthusiasts!",
    "cast": [
        {
            "name": "Will Smith",
            "role": "Mike Lowrey"
        },
        {
            "name": "Martin Lawrence",
            "role": "Marcus Burnett"
        }
    ],
    "crew": [
        {
            "name": "Michael Bay",
            "role": "Director"
        },
        {
            "name": "Jerry Bruckheimer",
            "role": "Producer"
        }
    ],
    "showtimes": {
        "New York": [
            {
                "theater": {
                    "id": "unique_theater_id_1",
                    "name": "Fun Cinemas: PM Cinemas, Parsvnath Mall, Manhattan",
                    "location": "Address of the theater",
                    "facilities": ["M-Ticket", "Food & Beverage"],
                    "nonCancellable": true,
                    "pricing": [
                        { "type": "Normal", "amount": 300, "status": "Available" },
                        { "type": "Executive", "amount": 320, "status": "Available" },
                        { "type": "Premium", "amount": 340, "status": "Filling Fast" },
                        { "type": "VIP", "amount": 600, "status": "Available" }
                    ]
                },
                "formats": ["2D", "IMAX"],
                "languages": ["English", "Hindi"],
                "availability": [
                    { "time": "10:10 AM", "status": "available", "availableSeats": 50 },
                    { "time": "12:35 PM", "status": "available", "availableSeats": 45 },
                    { "time": "03:30 PM", "status": "fast filling", "availableSeats": 20 },
                    { "time": "05:50 PM", "status": "available", "availableSeats": 60 }
                ]
            }
        ],
        "Toronto": [
            {
                "theater": {
                    "id": "unique_theater_id_2",
                    "name": "Cineplex Odeon, Toronto",
                    "location": "123 Movie Lane, Toronto, ON",
                    "facilities": ["M-Ticket", "Food & Beverage", "Parking"],
                    "nonCancellable": false,
                    "pricing": [
                        { "type": "Normal", "amount": 12, "status": "Available" },
                        { "type": "Executive", "amount": 15, "status": "Available" },
                        { "type": "Premium", "amount": 18, "status": "Filling Fast" },
                        { "type": "VIP", "amount": 25, "status": "Available" }
                    ]
                },
                "formats": ["2D", "3D"],
                "languages": ["English", "French"],
                "availability": [
                    { "time": "09:00 AM", "status": "available", "availableSeats": 100 },
                    { "time": "11:30 AM", "status": "available", "availableSeats": 80 },
                    { "time": "02:00 PM", "status": "fast filling", "availableSeats": 30 },
                    { "time": "04:30 PM", "status": "available", "availableSeats": 60 }
                ]
            },
            {
                "theater": {
                    "id": "unique_theater_id_3",
                    "name": "Scotiabank Theatre, Toronto",
                    "location": "456 Film Blvd, Toronto, ON",
                    "facilities": ["M-Ticket", "Food & Beverage"],
                    "nonCancellable": true,
                    "pricing": [
                        { "type": "Normal", "amount": 13, "status": "Available" },
                        { "type": "Executive", "amount": 16, "status": "Available" },
                        { "type": "Premium", "amount": 19, "status": "Filling Fast" },
                        { "type": "VIP", "amount": 27, "status": "Available" }
                    ]
                },
                "formats": ["2D", "IMAX"],
                "languages": ["English"],
                "availability": [
                    { "time": "10:00 AM", "status": "available", "availableSeats": 90 },
                    { "time": "01:00 PM", "status": "available", "availableSeats": 70 },
                    { "time": "03:45 PM", "status": "fast filling", "availableSeats": 40 },
                    { "time": "07:00 PM", "status": "available", "availableSeats": 50 }
                ]
            }
        ],
        "Calgary": [
            {
                "theater": {
                    "id": "unique_theater_id_4",
                    "name": "Landmark Cinemas, Calgary",
                    "location": "789 Cinema Street, Calgary, AB",
                    "facilities": ["M-Ticket", "Food & Beverage", "Recliner Seats"],
                    "nonCancellable": false,
                    "pricing": [
                        { "type": "Normal", "amount": 11, "status": "Available" },
                        { "type": "Executive", "amount": 14, "status": "Available" },
                        { "type": "Premium", "amount": 17, "status": "Filling Fast" },
                        { "type": "VIP", "amount": 23, "status": "Available" }
                    ]
                },
                "formats": ["2D", "3D"],
                "languages": ["English"],
                "availability": [
                    { "time": "10:15 AM", "status": "available", "availableSeats": 95 },
                    { "time": "01:45 PM", "status": "available", "availableSeats": 75 },
                    { "time": "04:30 PM", "status": "fast filling", "availableSeats": 35 },
                    { "time": "07:30 PM", "status": "available", "availableSeats": 55 }
                ]
            },
            {
                "theater": {
                    "id": "unique_theater_id_5",
                    "name": "Cineplex VIP Cinemas, Calgary",
                    "location": "1011 Premium Blvd, Calgary, AB",
                    "facilities": ["M-Ticket", "Food & Beverage", "VIP Lounge"],
                    "nonCancellable": true,
                    "pricing": [
                        { "type": "Normal", "amount": 14, "status": "Available" },
                        { "type": "Executive", "amount": 18, "status": "Available" },
                        { "type": "Premium", "amount": 22, "status": "Filling Fast" },
                        { "type": "VIP", "amount": 30, "status": "Available" }
                    ]
                },
                "formats": ["2D", "IMAX"],
                "languages": ["English"],
                "availability": [
                    { "time": "11:00 AM", "status": "available", "availableSeats": 80 },
                    { "time": "02:00 PM", "status": "available", "availableSeats": 60 },
                    { "time": "05:00 PM", "status": "fast filling", "availableSeats": 25 },
                    { "time": "08:00 PM", "status": "available", "availableSeats": 40 }
                ]
            }
        ],
        "Montreal": [
            {
                "theater": {
                    "id": "unique_theater_id_6",
                    "name": "Cinema Banque Scotia, Montreal",
                    "location": "1212 Movie Ave, Montreal, QC",
                    "facilities": ["M-Ticket", "Food & Beverage", "Parking"],
                    "nonCancellable": false,
                    "pricing": [
                        { "type": "Normal", "amount": 13, "status": "Available" },
                        { "type": "Executive", "amount": 16, "status": "Available" },
                        { "type": "Premium", "amount": 20, "status": "Filling Fast" },
                        { "type": "VIP", "amount": 28, "status": "Available" }
                    ]
                },
                "formats": ["2D", "3D"],
                "languages": ["French", "English"],
                "availability": [
                    { "time": "09:30 AM", "status": "available", "availableSeats": 85 },
                    { "time": "12:00 PM", "status": "available", "availableSeats": 65 },
                    { "time": "02:30 PM", "status": "fast filling", "availableSeats": 30 },
                    { "time": "05:00 PM", "status": "available", "availableSeats": 55 }
                ]
            },
            {
                "theater": {
                    "id": "unique_theater_id_7",
                    "name": "StarCité Montréal",
                    "location": "333 Film St, Montreal, QC",
                    "facilities": ["M-Ticket", "Food & Beverage"],
                    "nonCancellable": true,
                    "pricing": [
                        { "type": "Normal", "amount": 12, "status": "Available" },
                        { "type": "Executive", "amount": 15, "status": "Available" },
                        { "type": "Premium", "amount": 19, "status": "Filling Fast" },
                        { "type": "VIP", "amount": 26, "status": "Available" }
                    ]
                },
                "seatingPlan": {
                    "seating_plan_id": "xyz1234566",
                    "booked_seats": [0, 1, 2, 5, 19, 20,23,120,39],
                  },
                "formats": ["2D", "IMAX"],
                "languages": ["French"],
                "availability": [
                    { "time": "10:00 AM", "status": "available", "availableSeats": 100 },
                    { "time": "01:00 PM", "status": "available", "availableSeats": 75 },
                    { "time": "04:00 PM", "status": "fast filling", "availableSeats": 35 },
                    { "time": "07:00 PM", "status": "available", "availableSeats": 50 }
                ]
            }
        ],
        "Vancouver": [
            {
                "theater": {
                    "id": "unique_theater_id_8",
                    "name": "Cineplex Cinemas, Vancouver",
                    "location": "456 Movie Way, Vancouver, BC",
                    "facilities": ["M-Ticket", "Food & Beverage", "Parking"],
                    "nonCancellable": false,
                    "pricing": [
                        { "type": "Normal", "amount": 14, "status": "Available" },
                        { "type": "Executive", "amount": 17, "status": "Available" },
                        { "type": "Premium", "amount": 21, "status": "Filling Fast" },
                        { "type": "VIP", "amount": 29, "status": "Available" }
                    ]
                },
                "formats": ["2D", "3D"],
                "languages": ["English", "Mandarin"],
                "availability": [
                    { "time": "09:30 AM", "status": "available", "availableSeats": 90 },
                    { "time": "12:30 PM", "status": "available", "availableSeats": 70 },
                    { "time": "03:30 PM", "status": "fast filling", "availableSeats": 30 },
                    { "time": "06:30 PM", "status": "available", "availableSeats": 50 }
                ]
            },
            {
                "theater": {
                    "id": "unique_theater_id_9",
                    "name": "VIP Cinema, Vancouver",
                    "location": "789 Film Ave, Vancouver, BC",
                    "facilities": ["M-Ticket", "Food & Beverage", "Recliner Seats"],
                    "nonCancellable": true,
                    "pricing": [
                        { "type": "Normal", "amount": 16, "status": "Available" },
                        { "type": "Executive", "amount": 20, "status": "Available" },
                        { "type": "Premium", "amount": 24, "status": "Filling Fast" },
                        { "type": "VIP", "amount": 32, "status": "Available" }
                    ]
                },
                "formats": ["2D", "IMAX"],
                "languages": ["English"],
                "availability": [
                    { "time": "10:30 AM", "status": "available", "availableSeats": 85 },
                    { "time": "01:30 PM", "status": "available", "availableSeats": 65 },
                    { "time": "04:30 PM", "status": "fast filling", "availableSeats": 25 },
                    { "time": "07:30 PM", "status": "available", "availableSeats": 45 }
                ]
            }
        ]
    },
    "pricing": {
        "currency": "CAD",
        "basePrice": 30,
        "convenienceFee": 30,
        "taxes": 18
    },
    "seating": {
        "layout": "URL_to_seating_layout_image_or_data",
        "seatAvailability": [
            {
                "section": "A",
                "seats": [
                    {
                        "seatNumber": "A1",
                        "status": "available"
                    },
                    {
                        "seatNumber": "A2",
                        "status": "booked"
                    }
                ]
            },
            {
                "section": "B",
                "seats": [
                    {
                        "seatNumber": "B1",
                        "status": "available"
                    },
                    {
                        "seatNumber": "B2",
                        "status": "available"
                    }
                ]
            }
        ]
    },
    "tickets": [
        {
            "type": "Standard",
            "price": 30,
            "currency": "CAD",
            "availability": "available"
        },
        {
            "type": "Premium",
            "price": 500,
            "currency": "CAD",
            "availability": "available"
        }
    ],
    "userReviews": [
        {
            "rating": 4.5,
            "title": "Action-Packed Thrill Ride",
            "description": "Bad Boys delivers on every front with non-stop action and a great storyline. Will Smith and Martin Lawrence have fantastic chemistry, making every scene entertaining. Highly recommend for action movie enthusiasts!",
            "author": "John Doe"
        }
    ],
    "nearby_events": [
        {
            "image": "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00397579-hfnmhnhwae-portrait.jpg",
            "title": "Ghostbusters: Frozen Empire",
            "genre": "English",
            "rating": null,
            "ratingType": null,
            "votes": null
        }
    ],
    "recommended_events": [
        {
            "image": "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00397581-hfnmhnhwae-portrait.jpg",
            "title": "Fast & Furious 10",
            "genre": "Action",
            "rating": 8.0,
            "ratingType": "R",
            "votes": "12.1K"
        }
    ]
};
export const filterOptions = {
    movies: {
      Languages: ['English', 'French', 'Spanish', 'Urdu', 'English 7D', 'Hindi', 'Punjabi', 'Multi Language'],
      Genres: ['Action', 'Drama', 'Comedy', 'Thriller', 'Romance'],
      Format: ['2D', '3D', 'IMAX']
    },
    events: {
      Categories: ['Electronic', 'Dance', 'Comedy', 'House', "Jazz"],
      More: ['Indoor', 'Outdoor']
    },
    sports: {
      Categories: ['Football', 'Basketball', 'Baseball', 'Tennis'],
      More: ['Indoor', 'Outdoor']
    }
  };
  export const section = [
    {
      items: [
        { image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAxMiBKdWw%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00399065-fmldyzmmrf-portrait.jpg", title: "Sunburn Arena Ft. Deadmau5", genre: "Concerts", rating: 45.9, ratingType: 'thumb', votes: "K Likes" },
        { image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCA1IEp1bCBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00387646-crbzkeswlz-portrait.jpg", title: "Pottery Workshop", genre: "Workshop", rating: 7.2, ratingType: 'star', votes: "18K Votes" },
        { image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyMyBKdW4%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00394823-rthvgnnvkf-portrait.jpg", title: "NATIONAL MMA CHAMPIONSHIP", genre: "Sports", rating: 21.2, ratingType: 'thumb', votes: "K Likes" },
        { image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCA3IEp1bg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00365053-xgnelcqapc-portrait.jpg", title: "Nothing Makes Sense FT. VARUN GROVER", genre: "Stand up", rating: 9.1, ratingType: 'star', votes: "41.9K Votes" },
        { image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-V2VkLCAyMCBOb3Ygb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00376525-ckdxrxryjz-portrait.jpg", title: "Yacht cruise ", genre: "Jetty No 5", rating: 8.7, ratingType: 'star', votes: "3.2K Votes" }
      ]
    },
  ];
  
  export const premier = [
    {
      items: [
        { image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00397579-hfnmhnhwae-portrait.jpg", title: "Ghostbusters: Frozen Empire", genre: "English", rating: null, ratingType: null, votes: null },
        { image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00396946-talzlpzjea-portrait.jpg", title: "Skins Season 5", genre: "English, Hindi, Tamil, Telugu", rating: null, ratingType: null, votes: null },
        { image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00380545-yvnvthlvjj-portrait.jpg", title: "Endeavour Series 4", genre: "English", rating: null, ratingType: null, votes: null },
        { image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00399151-pllzggsjst-portrait.jpg", title: "Lunana: A Yak in the Classroom", genre: "Dzongkha", rating: null, ratingType: null, votes: null },
        { image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00399062-jpggjbhrzz-portrait.jpg", title: "Green Border (Polish)", genre: "Polish", rating: null, ratingType: null, votes: null }
      ]
    }
  ];


  export const ERSQuestionsconst  = [
    {
        question: "What do you want to watch for your entertainment?",
        options: [
            { text: "EVENTS", subcontext: "If you enjoy live performances", icon: "https://firebasestorage.googleapis.com/v0/b/bookitnow-1959f.appspot.com/o/calendar_with_star_icon.png?alt=media&token=2fc68d65-7df0-4b9d-90d9-008b4ef836c3" },
            { text: "MOVIES", subcontext: "If you love watching films", icon: "https://firebasestorage.googleapis.com/v0/b/bookitnow-1959f.appspot.com/o/film_reel_icon.png?alt=media&token=288574bd-ae6d-4d08-a800-84c0b84d09cc" },
            { text: "SPORTS", subcontext: "If you are into athletic events", icon: "https://firebasestorage.googleapis.com/v0/b/bookitnow-1959f.appspot.com/o/trophy_icon.png?alt=media&token=0537ecde-9f7a-4b75-918a-047805b217a8" },
        ],
    },
    {
        question: "What type of events are you interested in?",
        condition: "EVENTS",
        options: [
            { text: "CONCERTS", subcontext: "Live music shows", icon: "https://firebasestorage.googleapis.com/v0/b/bookitnow-1959f.appspot.com/o/musical_note_microphone_icon.png?alt=media&token=25d526de-f877-440c-abea-5693bd1e83a8" },
            { text: "THEATRE", subcontext: "Dramatic performances", icon: "https://firebasestorage.googleapis.com/v0/b/bookitnow-1959f.appspot.com/o/comedy_tragedy_masks_icon.png?alt=media&token=d4b6dbd5-4912-48ff-958f-5c563898ca69" },
            { text: "EXHIBITIONS", subcontext: "Art and culture displays", icon: "https://firebasestorage.googleapis.com/v0/b/bookitnow-1959f.appspot.com/o/art_easel_painting_icon.png?alt=media&token=9af3e7fa-4044-411f-b74f-ac2089c64cd8" },
            { text: "FESTIVALS", subcontext: "Cultural celebrations", icon: "https://firebasestorage.googleapis.com/v0/b/bookitnow-1959f.appspot.com/o/festive_tent_balloons_icon.png?alt=media&token=6ad2e333-6309-482d-a367-279cab9f87b8" },
        ],
    },
    {
        question: "What genre of movies do you prefer?",
        condition: "MOVIES",
        options: [
            { text: "ACTION", subcontext: "High-octane thrills", icon: "https://firebasestorage.googleapis.com/v0/b/bookitnow-1959f.appspot.com/o/film_clapperboard_explosion_icon.png?alt=media&token=13c671d9-c1ba-4873-abdf-930647895f0d" },
            { text: "COMEDY", subcontext: "Laughter and fun", icon: "https://firebasestorage.googleapis.com/v0/b/bookitnow-1959f.appspot.com/o/laughing_emoji_film_reel_icon.png?alt=media&token=e23c4d42-2241-49d5-8fb6-766b0c2baaf7" },
            { text: "DRAMA", subcontext: "Emotional storytelling", icon: "https://firebasestorage.googleapis.com/v0/b/bookitnow-1959f.appspot.com/o/theatre_mask_broken_heart_icon.png?alt=media&token=5ab472ad-086e-4cdf-a65f-56338cb54f09" },
            { text: "HORROR", subcontext: "Scary and thrilling", icon: "https://firebasestorage.googleapis.com/v0/b/bookitnow-1959f.appspot.com/o/ghost_film_reel_icon.png?alt=media&token=404111b7-c3f1-47f5-adae-39b5daadf5c3" },
            { text: "SCI-FI", subcontext: "Futuristic adventures", icon: "https://firebasestorage.googleapis.com/v0/b/bookitnow-1959f.appspot.com/o/futuristic_spaceship_icon.png?alt=media&token=b9a3f22c-2eaa-4def-bb4c-bace5fe9a0ea" },
        ],
    },
    {
        question: "What type of sports are you interested in?",
        condition: "SPORTS",
        options: [
            { text: "FOOTBALL", subcontext: "The beautiful game", icon: "football_goalpost_icon" },
            { text: "BASKETBALL", subcontext: "Hoops and dunks", icon: "https://firebasestorage.googleapis.com/v0/b/bookitnow-1959f.appspot.com/o/basketball_hoop_icon.png?alt=media&token=51fc9b37-0b27-494a-ab6e-af235fd012be" },
            { text: "CRICKET", subcontext: "Bat and ball action", icon: "https://firebasestorage.googleapis.com/v0/b/bookitnow-1959f.appspot.com/o/cricket_bat_ball_icon.png?alt=media&token=bd262d89-8bd3-4567-aa92-f2f4a3284384" },
            { text: "TENNIS", subcontext: "Racket sports", icon: "https://firebasestorage.googleapis.com/v0/b/bookitnow-1959f.appspot.com/o/tennis_racket_ball_icon.png?alt=media&token=44e8c2f7-9d75-4926-97af-51fc2d89fb76" },
            { text: "OTHER", subcontext: "Various sports", icon: "https://firebasestorage.googleapis.com/v0/b/bookitnow-1959f.appspot.com/o/various_sports_equipment_icon.png?alt=media&token=4c1168ef-8879-445c-9319-a9ae637c9a38" },
        ],
    },
    {
        question: "When do you plan to attend?",
        options: [
            { text: "This week", subcontext: "Within the next 7 days", icon: "https://firebasestorage.googleapis.com/v0/b/bookitnow-1959f.appspot.com/o/current_week_calendar_icon.png?alt=media&token=af772381-7d09-45aa-be18-d2782568d4c4" },
            { text: "This month", subcontext: "Within the current month", icon: "https://firebasestorage.googleapis.com/v0/b/bookitnow-1959f.appspot.com/o/current_month_calendar_icon.png?alt=media&token=7ec1cfb2-6ec3-496e-86da-87ee084ab2c9" },
            { text: "Within 3 months", subcontext: "In the next 3 months", icon: "https://firebasestorage.googleapis.com/v0/b/bookitnow-1959f.appspot.com/o/three_months_calendar_icon.png?alt=media&token=876346bb-d3e3-4674-9d87-911fa913cf9d" },
            { text: "No specific time", subcontext: "Anytime", icon: "https://firebasestorage.googleapis.com/v0/b/bookitnow-1959f.appspot.com/o/clock_question_mark_icon.png?alt=media&token=00c666fc-5657-450f-b680-5aeadd241a33" },
        ],
    },
];
export const dummyMovies = [
    {
      _id: "1",
      event_type: "movie",
      title: "The Grand Adventure",
      rating: 8.2,
      votes: "4,567",
      duration: "2h 15m",
      releaseDate: "2024-07-25",
      genres: ["Action", "Adventure"],
      languages: ["English", "French"],
      formats: ["IMAX", "3D"],
      imgSrc: "https://example.com/images/grand_adventure.jpg",
      bgImage: "https://example.com/images/grand_adventure_bg.jpg",
      description: "An epic adventure of a group of friends exploring uncharted territories.",
      cast: ["John Doe", "Jane Smith"],
      crew: ["Director: Alice Johnson", "Producer: Bob Brown"],
      showtimes: {
        "Waterloo": [
          {
            theater: "Cineplex Waterloo",
            availability: [
              { seating_plan: { seating_plan_id: "sp1", booked_seats: [3, 4] }, time: "18:00" },
              { seating_plan: { seating_plan_id: "sp2", booked_seats: [12, 14] }, time: "20:00" }
            ]
          }
        ]
      },
      pricing: {
        "IMAX": 15.99,
        "3D": 13.99
      },
      tickets: [],
      userReviews: [
        { user: "Alice", comment: "Amazing movie!", rating: 9 },
        { user: "Bob", comment: "Really enjoyed it!", rating: 8 }
      ]
    },
    {
      _id: "2",
      event_type: "movie",
      title: "Romantic Escape",
      rating: 7.4,
      votes: "2,345",
      duration: "1h 45m",
      releaseDate: "2024-08-10",
      genres: ["Romance", "Drama"],
      languages: ["English"],
      formats: ["2D"],
      imgSrc: "https://example.com/images/romantic_escape.jpg",
      bgImage: "https://example.com/images/romantic_escape_bg.jpg",
      description: "A heartwarming tale of love and destiny.",
      cast: ["Emily Stone", "Michael Brown"],
      crew: ["Director: Sarah Green", "Producer: Tom White"],
      showtimes: {
        "Waterloo": [
          {
            theater: "Galaxy Cinemas",
            availability: [
              { seating_plan: { seating_plan_id: "sp3", booked_seats: [1, 2, 5] }, time: "17:00" },
              { seating_plan: { seating_plan_id: "sp4", booked_seats: [7, 8] }, time: "19:30" }
            ]
          }
        ]
      },
      pricing: {
        "2D": 10.99
      },
      tickets: [],
      userReviews: [
        { user: "Charlie", comment: "Beautiful story.", rating: 7 },
        { user: "Dave", comment: "Very touching.", rating: 8 }
      ]
    }
  ];
  