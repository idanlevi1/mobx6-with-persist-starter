import { observable, action, computed, makeAutoObservable } from "mobx";
import { persist } from 'mobx-persist'
// import { POOLGAME_CODE } from "../../utils/Enums";
// import { POOLGAME_CODE } from "../../../utils/Enums";

class PoolGameStore {

  psWinner16 = { draw: 0, Data: [], method: 0, reduction: 0, price: 0, tour: 0, TourBefore: 0, Rate: '', TourFinal: 0, reductionMethod: 2, DontShowBankerEver: false };
  psWinnerHalf = { draw: 0, Data: [], method: 0, reduction: 0, price: 0, tour: 0, TourBefore: 0, Rate: '', TourFinal: 0, reductionMethod: 2, DontShowBankerEver: false }
  psWinnerWorld = { draw: 0, Data: [], method: 0, reduction: 0, price: 0, tour: 0, TourBefore: 0, Rate: '', TourFinal: 0, reductionMethod: 2, DontShowBankerEver: false }
  millionaire = { drawId: 0, form: [[]], currentGameIndex: 0, currentGameSystemIndex: 0 }

  DontShowBankerExplainEver = false
  //Set


  constructor(name) {

    makeAutoObservable(this)
  }


  setDontShowBankerExplain() {
    this.DontShowBankerExplainEver = true
  }


  setStore(code, blanks, drawId, method, price, tour, TourBefore, Rate, TourrFinal, reductionMethod, DontShowBankerEver) {
    let p = null;
    // switch (code) {
    //   case POOLGAME_CODE.Winner16:
    //     p = this.psWinner16;
    //     break;
    //   case POOLGAME_CODE.WinnerHalf:
    //     p = this.psWinnerHalf;
    //     break;
    //   case POOLGAME_CODE.WinnerWorld:
    //     p = this.psWinnerWorld;
    //     break;
    //   default:
    //     break
    // }
    p.reductionMethod = reductionMethod
    p.Data = blanks;
    p.drawId = drawId;
    p.method = method
    p.price = price;
    p.DontShowBankerEver = DontShowBankerEver
    p.tour = tour;
    p.TourBefore = TourBefore
    p.Rate = Rate
    p.TourFinal = TourrFinal
  }


  setMillionaireStore({ drawId, form, currentGameIndex, currentGameSystemIndex }) {
    this.millionaire.drawId = drawId;
    this.millionaire.form = form
    this.millionaire.currentGameIndex = currentGameIndex;
    this.millionaire.currentGameSystemIndex = currentGameSystemIndex;
  }

  get Winner16() {
    return this.psWinner16;
  }

  get WinnerWorld() {
    return this.psWinner16;
  }

  get WinnerHalf() {
    return this.psWinnerHalf;
  }

  get getMillionaireStore() {
    return this.millionaire;
  }

  get showBankerExplain() {
    return this.DontShowBankerExplainEver
  }

}

const poolGameStore = new PoolGameStore();
export default poolGameStore;
