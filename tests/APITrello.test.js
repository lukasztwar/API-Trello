const { test, expect } = require('@playwright/test');
const axios = require('axios');

//Parameters
const apiKey = '4ddb9f35cf195890a4286d7b14d19b79'
const apiToken = '550f0a9c38dfb730db8566c61e2d1ea910da35a8a2c46e0ba71404c62b3e3312'

const boardName = 'lolo'
const listName = 'kolejna lista'
const cardName = 'twoja nazwa karty'


test('Tworzenie nowej tablicy', async ({ page }) => {

  //konfiguracja API post (tablica)
  const endpoint = 'https://api.trello.com/1/boards';
  const params = {
    name: boardName,
    defaultLists: false,
    key: apiKey,
    token: apiToken
  };
      
  // API request i response
  const response = await axios.post(endpoint, params);
  
  // status check
  expect(response.status).toBe(200);
  
  // Check response = nazwie tablicy
  expect(response.data.name).toBe(boardName);
})


test('Tworzenie nowej listy', async () => {

  //szukanie tablicy
  const response = await axios.get(`https://api.trello.com/1/members/ukaszt3/boards?key=${apiKey}&token=${apiToken}&fields=id,name`);
  const board = response.data.find(board => board.name === boardName);
  const boardId = board.id;

  //konfiguracja API post (lista)
  const listData = {
    idBoard: boardId,
    name: listName,
    key: apiKey,
    token: apiToken
  };

  //tworzenie listy
  const createListResponse = await axios.post(`https://api.trello.com/1/lists`, listData);
  const newListId = createListResponse.data.id;

  //sprawdzenie statusu
  expect(createListResponse.status).toEqual(200);
  expect(createListResponse.data.name).toEqual(listName);
})

test('Tworzenie nowej karty', async () => {

  //szukanie tablicy
  const response = await axios.get(`https://api.trello.com/1/members/ukaszt3/boards?key=${apiKey}&token=${apiToken}&fields=id,name`);
  const board = response.data.find(board => board.name === boardName);
  const boardId = board.id;
  
  //szukanie listy
  const listResponse = await axios.get(`https://api.trello.com/1/boards/${boardId}/lists?key=${apiKey}&token=${apiToken}&fields=id,name`);
  const list = listResponse.data.find(list => list.name === listName);
  const listId = list.id;
  
  //konfiguracja API post (karta)
  const cardData = {
  idList: listId,
  name: cardName,
  key: apiKey,
  token: apiToken
  };
  
  //tworzenie karty
  const createCardResponse = await axios.post(`https://api.trello.com/1/cards`, cardData);
  const newCardId = createCardResponse.data.id;
  
  //sprawdzenie statusu
  expect(createCardResponse.status).toEqual(200);
  expect(createCardResponse.data.name).toEqual(cardName);
  expect(createCardResponse.data.idList).toEqual(listId);
});

