// AirportInput("cityFromInput");
// AirportInput("cityToInput");
// clicking search button
console.log("searchResults js file");
// $("#searchCity").click(function() {
//   console.log("hi");
//   event.preventDefault();
//   let cityEvent = $("#cityEvent")
//     .val()
//     .trim();
//   let cityFrom = $("#cityFrom")
//     .val()
//     .trim();
//   let cityTo = $("#cityTo")
//     .val()
//     .trim();
//   let departureDate = $("#departureDate")
//     .val()
//     .trim();
//   let returnDate = $("#returnDate")
//     .val()
//     .trim();
//   postCity(cityFrom, cityTo, departureDate, returnDate, cityEvent);
// });

// let saved = $(".change-saved");
// saved.click(function() {
//   let eventId = saved.data(eventid)
//   saved.data("saved", true);
// });

let savedSearch = [];
$(function() {
  $(".change-saved").on("click", function(event) {
    event.preventDefault();
    var eventId = $(this).data("eventid");
    var saved = $(this).data("saved");
    // saved = $(this).attr("saved", false);
    console.log("eventId", eventId);
    console.log("saved", saved);
    console.log(typeof saved);
    if (saved === true) {
      for (i = 0; i < savedSearch.length; i++) {
        //loop through array
        savedSearch.push(saved); //push variables
      }
    }
    console.log(savedSearch);

    // var newSaved = $(this).data("eventid", true);
    // console.log(newSaved);
  });
});

// function postCity(cityFrom, cityTo, departureDate, returnDate, cityEvent) {
//   console.log("In post flight");
//   cities = {
//     cityFrom: cityFrom,
//     cityTo: cityTo,
//     departureDate: departureDate,
//     returnDate: returnDate,
//     cityEvent: cityEvent
//   };
//   $.post("/api/citySearch", cities)
//     .then(function(data) {
//       console.log(data);
//       if (data) {
//         console.log("You looked up: ", cities);
//       } else {
//         console.log("That is not a valid city");
//       }
//     })
//     .catch(function(err) {
//       console.log(err.message);
//     });
// }

//this is where we create the nested object?
//create container with events and flights in index.handlebars
const saveItinerary = $(".saveItinerary");
//get the object
// saveItinerary.on(() => {
//   event.preventDefault();
// });

// function saveItinerary(trip, flights, events) {
//   //need an array on the front end in the right format
//   savedItineraries = {
//     trip: {
//       cityName: cityEvent,
//       departureDate: departureDate,
//       arrivalDate: arrivalDate
//     },
//     flights: [
//       {
//         price: price,
//         departureDate: departureDate,
//         arrivalDate: arrivalDate
//       },
//       {
//         price: price,
//         departureDate: departureDate,
//         arrivalDate: arrivalDate
//       }
//     ],
//     events: [
//       {
//         name: eventName,
//         date: eventDate,
//         time: eventTime
//       },
//       {
//         name: eventName,
//         date: eventDate,
//         time: eventTime
//       },
//       {
//        name: eventName,
//         date: eventDate,
//         time: eventTime
//       }
//     ]
//   };
//   $.post("api/trips", savedItineraries).then(function(data) {
//     console.log(data);
//     if (data) {
//       console.log("You looked up: ", cities);
//     } else {
//       console.log("That is not a valid city");
//     }
//   });
// }

// original format YYYY-MM-DD, needs to change to MM/DD/YYYY
// takes depature and return date and reformats it
// let departureD = $("#departureDate")
//   .val()
//   .trim();

// const departureDate = dateFormatter(departureD);

// console.log("Departure Date: ", departureDate.moment().format("DD/MM/YYYY"));
//   let returnD = $("#returnDate")
//     .val()
//     .trim();

// console.log("Departure Date: ", departureDate);
// const returnDate = dateFormatter(returnD);

// console.log("Return Date: ", returnDate);

// clicking previously searched itinerary
// $(document).on("click", ".city", function(event) {
//   var cityFrom = $(this).attr("data-nameFrom");
//   var cityTo = $(this).attr("data-nameTo");
//   // var departureDate = $(this).attr("data-nameDeparture");
//   // var returnDate = $(this).attr("data-nameReturn");
//   // insert function to send to the backend for the axios call?

// postCity(cityFrom, cityTo, departureDate, returnDate);
//   postCity(cityFrom, cityTo, cityEvent);
// });

// function postCity(cityFrom, cityTo) {
//   console.log("In post city")
//   cities = {
//     cityFrom: cityFrom,
//     cityTo: cityTo
//     // departureDate: departureDate,
//     // returnDate: returnDate
//   };

// postCity(cityFrom, cityTo);

//   let cityFrom = $(this).attr("data-nameFrom");
//   let cityTo = $(this).attr("data-nameTo");

//   // takes depature and return date and reformats it
//   let departureD = $(this).attr("data-nameDeparture");
//   const departureDate = dateFormatter(departureD);
//   console.log("Departure Date: " + departureDate);

//   let returnD = $(this).attr("data-nameReturn");
//   const returnDate = dateFormatter(returnD);
//   console.log("Return Date: " + returnDate);

//   // function to send to the backend
//   postCity(cityFrom, cityTo, departureDate, returnDate);
// }

//reformatted to move day first, then month to match api query
// function dateFormatter(date) {
//   let year = date.substring(0, 4);
//   let month = date.substring(5, 7);
//   let day = date.substring(8);
//   let finalDate = day + "/" + month + "/" + year;
//   return finalDate;
// }

// function dateFormatter(date) {
//     let year = date.substring(0, 4);
//     let month = date.substring(5, 7);
//     let day = date.substring(8);
//     let finalDate = month + "/" + day + "/" + year;
//     return finalDate;
// }

// create function that creates button for each saved itinerary
// below is renderButtons function from weather planner that uses local storage to create buttons
// will have to change to using database information

// function renderButtons() {
//   cities = JSON.parse(localStorage.getItem("savedCities"));
//   if (cities === null || cities === undefined) {
//     return;
//   }
//   // Deleting the buttons prior to adding new cities
//   $("#previousSearch").empty();
//   // Looping through the array of cities
//   console.log("Cities: " + cities);
//   for (var i = 0; i < cities.length; i++) {
//     // Then dynamicaly generating buttons for each city in the array
//     var a = $("<button>");
//     // Adding a class of movie to our button
//     a.addClass("city btn btn-outline-secondary btn-block");
//     // Adding a data-attribute
//     a.attr("data-name", cities[i]);
//     // Providing the initial button text
//     a.text(cities[i]);
//     // Adding the button to the buttons-view div
//     $("#previousSearch").append(a);
//   }
// }
