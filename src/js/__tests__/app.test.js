import GameSavingLoader from '../app';

test ('should create an object of type "GameSaving"', async () => {
    const result = {
        "id": 9,
        "created": 1546300800, 
        "userInfo": {
          "id": 1, 
          "name": 'Hitman', 
          "level": 10, 
          "points": 2000
        }
      };

      expect(await GameSavingLoader.load()).toEqual(result);
});


