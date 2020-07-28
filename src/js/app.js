import GameSavingLoader from './game_saving_loader';
import GameSaving from './game_saving';

GameSavingLoader.load().then((saving) => {
  const gameSaving = new GameSaving(JSON.parse(saving));
  console.log(gameSaving);
}, (error) => {
  console.log(error);
});
