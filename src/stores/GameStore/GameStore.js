import { makeAutoObservable } from "mobx";
import { clearPersist, stopPersist, startPersist } from "mobx-persist-store";
import { persistStore } from "../../mobx.utils";

class GameStore {
  constructor() {
    makeAutoObservable(this)
    persistStore(this, ['gameName', 'gameData'], 'GameStore');
  }

  gameName = ''
  gameData = { id: 0, type: 0 }

  setGame({ id, type, name }) {
    this.gameData = { id, type }
    this.gameName = name
  }

  get getGameData() {
    return this.gameData;
  }

  get getGameName() {
    return this.gameName;
  }

  async clearStore() {
    await clearPersist(this);
  }

  stopPersist() {
    stopPersist(this);
  }

  startPersist() {
    startPersist(this);
  }

}

const gameStore = new GameStore();
export default gameStore;
