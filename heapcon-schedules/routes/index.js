var express = require('express');
var router = express.Router();

const scheduleList = [
    {
        id: 1,
        title: 'Advanced serverless architectural patterns on aws',
        duration: '2h',
        speaker: 'Alex Casalboni'
    }, {
        id: 2,
        title: 'Going the distance with svg, headless & serverless',
        duration: '1h 30min',
        speaker: 'George Mandis'
    }, {
        id: 3,
        title: 'Designing for complexity',
        duration: '1h 15min',
        speaker: 'Dave Snowden'
    }, {
        id: 4,
        title: 'Pattern analysis: learned vs engineered',
        duration: '45min',
        speaker: 'Milos Stojanovic'
    }, {
        id: 5,
        title: 'From dev to prod. one year of using kubernetes in production',
        duration: '1h',
        speaker: 'Milos Milunovic'
    }, {
        id: 6,
        title: 'The future of java and you',
        duration: '1h',
        speaker: 'Heather VanCura'
    }, {
        id: 7,
        title: 'How to setup a production-ready microservices cluster in 30 mins',
        duration: '2h 30min',
        speaker: 'Max, Borislav, Boban, Marko'
    }
];

/* GET home page. */
router.get('/schedules', function (req, res, next) {
    res.send(scheduleList);
});

module.exports = router;
