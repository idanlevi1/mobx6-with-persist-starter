import { makeAutoObservable } from "mobx";
import { clearPersist, stopPersist, startPersist } from "mobx-persist-store";
import { persistStore } from "../../mobx.utils";

class UserStore {
  constructor() {
    makeAutoObservable(this)
    persistStore(this, ['username'], 'UserStore');
  }

  username = ''
  color = null

  setUser(username, color) {
    this.username = username
    this.color = color
  }

  get getUsername() {
    return this.username;
  }

  get getUserColor() {
    return this.color;
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

const userStore = new UserStore();
export default userStore;
