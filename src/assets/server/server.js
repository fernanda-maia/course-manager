const express = require('express');
const cors = require('cors');
const app = express();

var currentUser;

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(express.json());

app.listen(3100, () => {
  console.log('Server is running on port 3100!');
});

app.route('/api/courses').get((request, response) => {
  response.send(COURSES);
});

app.route('/api/courses').post((request, response) => {
  let course = request.body;

  const firstId = COURSES ? Math.max.apply(null, COURSES.map(courseIterator => courseIterator.id)) + 1 : 1;
  course.id = firstId;
  COURSES.push(course);
  

  response.status(201).send(course);
});

app.route('/api/courses/:id').put((request, response) => {
  const courseId = +request.params['id'];
  const course = request.body;

  const index = COURSES.findIndex(courseIterator => courseIterator.id === courseId);
  COURSES[index] = course;

  response.status(200).send(course);
});

app.route('/api/courses/:id').get((request, response) => {
  const courseId = +request.params['id'];

  response.status(200).send(COURSES.find(courseIterator => courseIterator.id === courseId));
});

app.route('/api/courses/:id').delete((request, response)=> {
  const courseId = +request.params['id'];
  COURSES = COURSES.filter(courseIterator => courseIterator.id !== courseId);
  
  response.status(204).send({});
});

let COURSES = [
    {
        id: 1,
        name: "Introdução ao Angular",
        imageUrl: "/assets/images/angular.svg",
        price: 99.90,
        code: "ANG123",
        duration: 50,
        rating: 4.5,
        releaseDate: "01/12/2021"
    },
    {
        id: 2,
        name: "Java Avançado",
        imageUrl: "/assets/images/java.svg",
        price: 125.60,
        code: "JAV123",
        duration: 90,
        rating: 5.0,
        releaseDate: "08/20/2021"
    },
    {
        id: 3,
        name: "Kotlin - Curso Completo",
        imageUrl: "/assets/images/kotlin.svg",
        price: 100.00,
        code: "KOT123",
        duration: 120,
        rating: 3.5,
        releaseDate: "10/10/2021"
    },
    {
        id: 4,
        name: "PostgreSQL na prática",
        imageUrl: "/assets/images/postgresql.svg",
        price: 75.90,
        code: "POS123",
        duration: 90,
        rating: 3.5,
        releaseDate: "03/06/2021"
    },
    {
        id: 5,
        name: "Python para web",
        imageUrl: "/assets/images/python.svg",
        price: 180.00,
        code: "PYT123",
        duration: 210,
        rating: 5.0,
        releaseDate: "12/03/2021"
    }
]