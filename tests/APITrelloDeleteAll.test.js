const { test, expect } = require('@playwright/test');
const axios = require('axios')

const apiKey = '4ddb9f35cf195890a4286d7b14d19b79'
const apiToken = '550f0a9c38dfb730db8566c61e2d1ea910da35a8a2c46e0ba71404c62b3e3312'


test('kasowanie wszystkich tablic', async () => {

    //pobrać listę tablic "boards"
    const response = await axios.get(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`);
    const boards = response.data;

    //usuwa wszystkie znalezione po kolei
    for (const board of boards) {
        await axios.delete(`https://api.trello.com/1/boards/${board.id}?key=${apiKey}&token=${apiToken}`);
    }
});