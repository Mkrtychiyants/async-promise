import json from './parser';
import read from './reader';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static load() {
    return read()
      .then((res) => json(res))
      .then((result) => {
        const saving = JSON.parse(result);
        const saveObj = new GameSaving(saving.id, saving.created, saving.userInfo);
        return saveObj;
      }).catch((error) => {
        throw new Error(error);
      });
  }
}
