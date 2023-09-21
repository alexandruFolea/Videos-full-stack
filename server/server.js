const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8080;

app.use(cors());

const videos = [
	{
		id: 1,
		title: 'CSS for newbies',
		url: 'https://www.youtube.com/watch?v=ouncVBiye_M',
		views: 1000,
		dateAdded: '2023-09-15',
	},
	{
		id: 2,
		title: 'Video 2',
		url: 'https://www.youtube.com/watch?v=a6wJVPUZw2o',
		views: 1000,
		dateAdded: '2023-09-15',
	},
	{
		id: 3,
		title:
			'Relaxing Ambient Flute Music for Inner Peace, Meditation & Sleep | ',
		url: 'https://www.youtube.com/watch?v=gmEJpYLRtX4',
		views: 1000,
		dateAdded: '2023-09-15',
	},
	{
		id: 4,
		title: 'God Tier Developer Map',
		url: 'https://www.youtube.com/watch?v=pEfrdAtAmqk',
		views: 1000,
		dateAdded: '2023-09-15',
	},
	{
		id: 5,
		title: 'Dr. Paul Conti: How to Build and Maintain Healthy Relationships ',
		url: 'https://www.youtube.com/watch?v=eMqWH3LYiII',
		views: 1000,
		dateAdded: '2023-09-15',
	},
];

// Define a route to serve the list of videos as JSON
app.get('/api/videos', (req, res) => {
	res.json(videos);
});

app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});
