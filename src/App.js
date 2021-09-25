import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import {
  addCoin,
  clearCoins,
  bottleDone,
  clearBottle,
} from "./features/bottles/bottlesSlice"
import "./App.css"

function App() {
  const dispatch = useDispatch()

  const { bottles, currentBottle } = useSelector((state) => state.bottles)
  //console.log(bottles, currentBottle)

  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [popupBottle, setPopupBottle] = useState({})
  const [popupBottleNumber, setPopupBottleNumber] = useState(0)

  function handleAddCoin(e, coin) {
    dispatch(addCoin({ coin }))
  }
  function handleClearCoins(e) {
    dispatch(clearCoins())
  }
  function handleDone(e) {
    dispatch(bottleDone())
  }

  function isCurrEmpty(obj) {
    for (const prop in obj) {
      if (obj[prop] !== 0) {
        return false
      }
    }
    return true
  }

  function openPopup(bottle) {
    setPopupBottleNumber(bottle)
    setPopupBottle(bottles[bottle])
    setIsPopupOpen(true)
  }

  function closePopup(bottle) {
    if (isPopupOpen) {
      setIsPopupOpen(false)
    }
  }

  function clearBottleHandler(num) {
    dispatch(clearBottle({ num }))
    setIsPopupOpen(false)
  }

  const coinsSizes = {
    1: "52px",
    5: "58px",
    10: "45px",
    25: "65px",
  }

  return (
    <div className="App">
      <h2 className="main-title">
        Make three different combinations to get $0.56
      </h2>

      <section className="main-container">
        <div className="app-colon coins">
          <div className="coin">
            <a href="/#" onClick={(e) => handleAddCoin(e, 25)}>
              <img alt="coin25" src="img/25.png" />
            </a>
          </div>
          <div className="coin">
            <a href="/#" onClick={(e) => handleAddCoin(e, 10)}>
              <img alt="coin10" src="img/10.png" />
            </a>
          </div>
          <div className="coin">
            <a href="/#" onClick={(e) => handleAddCoin(e, 5)}>
              <img alt="coin5" src="img/5.png" />
            </a>
          </div>
          <div className="coin">
            <a href="/#" onClick={(e) => handleAddCoin(e, 1)}>
              <img alt="coin1" src="img/1.png" />
            </a>
          </div>
        </div>
        <div className="app-colon bottle-container">
          <div className="current-bottle">
            <img
              className={
                "bottle-img" +
                (!isCurrEmpty(currentBottle) ? "full-bottle" : "")
              }
              alt="bottle"
              width="100%"
              src="img/bottle1.png"
            />
            {currentBottle[1] > 0 && (
              <img
                className="in-bottle-coin coin1"
                width={coinsSizes[1]}
                alt="coin1"
                src="img/1.png"
              />
            )}
            {currentBottle[5] > 0 && (
              <img
                className="in-bottle-coin coin5"
                width={coinsSizes[5]}
                alt="coin1"
                src="img/5.png"
              />
            )}
            {currentBottle[10] > 0 && (
              <img
                className="in-bottle-coin coin10"
                width={coinsSizes[10]}
                alt="coin1"
                src="img/10.png"
              />
            )}
            {currentBottle[25] > 0 && (
              <img
                className="in-bottle-coin coin25"
                width={coinsSizes[25]}
                alt="coin1"
                src="img/25.png"
              />
            )}
          </div>
          <div className={"buttons-container"}>
            <div>
              <button
                className={isCurrEmpty(currentBottle) ? "hidden" : ""}
                onClick={handleClearCoins}
              >
                Clear
              </button>
            </div>
            <div>
              <button
                className={isCurrEmpty(currentBottle) ? "hidden" : ""}
                onClick={handleDone}
              >
                Done
              </button>
            </div>
          </div>
        </div>
        <div className="app-colon bottles-container">
          <div className="bottle-wrapp">
            <div className="bottle">
              <img
                className={"bottle-img" + (bottles[2] ? "full-bottle" : "")}
                alt="bottle 3"
                width="100px"
                src="img/bottle2.png"
              />
              {bottles[2] && (
                <>
                  <img
                    className="coins-full"
                    alt="bottle part1"
                    width="80px"
                    src="img/coins-full.png"
                  />
                  <img
                    className="coins-full2"
                    alt="bottle part2"
                    width="80px"
                    src="img/coins-full2.png"
                  />
                </>
              )}
            </div>
            <div className="open-popup-wrapper">
              <a
                className={bottles[2] ? "" : "hidden"}
                onClick={() => openPopup(2)}
                href="/#"
              >
                Double check
              </a>
            </div>
          </div>
          <div className="bottle-wrapp">
            <div className="bottle">
              <img
                className={"bottle-img" + (bottles[1] ? "full-bottle" : "")}
                alt="bottle 2"
                width="100px"
                src="img/bottle2.png"
              />
              {bottles[1] && (
                <>
                  <img
                    className="coins-full"
                    alt="bottle part1"
                    width="80px"
                    src="img/coins-full.png"
                  />
                  <img
                    className="coins-full2"
                    alt="bottle part2"
                    width="80px"
                    src="img/coins-full2.png"
                  />
                </>
              )}
            </div>
            <div className="open-popup-wrapper">
              <a
                className={bottles[1] ? "" : "hidden"}
                onClick={() => openPopup(1)}
                href="/#"
              >
                Double check
              </a>
            </div>
          </div>
          <div className="bottle-wrapp">
            <div className="bottle">
              <img
                className={"bottle-img" + (bottles[0] ? "full-bottle" : "")}
                alt="bottle part"
                width="100px"
                src="img/bottle2.png"
              />

              {bottles[0] && (
                <>
                  <img
                    className="coins-full"
                    alt="bottle part1"
                    width="80px"
                    src="img/coins-full.png"
                  />
                  <img
                    className="coins-full2"
                    alt="bottle part2"
                    width="80px"
                    src="img/coins-full2.png"
                  />
                </>
              )}
            </div>
            <div className="open-popup-wrapper">
              <a
                className={bottles[0] ? "" : "hidden"}
                onClick={() => openPopup(0)}
                href="/#"
              >
                Double check
              </a>
            </div>
          </div>
        </div>

        <div className={"popup " + (isPopupOpen ? "flex" : "hidden")}>
          <div>
            <div onClick={() => closePopup()} className="popup-close">
              x
            </div>
            {Object.keys(popupBottle).map((key) => (
              <span key={key}>
                {[...Array(popupBottle[key])].map((k, i) => (
                  <img
                    className="popup-coins"
                    width={coinsSizes[key]}
                    key={key + "_" + k + "_" + i}
                    alt={"coin" + key}
                    src={"img/" + key + ".png"}
                  />
                ))}
              </span>
            ))}
          </div>
          <div className="popup-btn-wrap">
            <button onClick={() => clearBottleHandler(popupBottleNumber)}>
              Redo
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
