import { Checkers, DisabledBoard } from "./checkers.js"
document.title = "Checkerx";

document.addEventListener("DOMContentLoaded", onPageLoad);
window.addEventListener("resize", sizeWindow);


function onPageLoad(){
    sizeWindow();
    let isReplay = true; // toggle for replay
    let moveString = "F7E8C2D1F1E2C4D5E2D3B3C4G2F1A2B3F5E4B3C2F3E2C8D7G4F3D7E6G6F5E6G4H3F5B7C8F5E6C6D7G8F7D7F5E4C6B5D7E8C6F5G4F3E4G4H3F7E6A6B5E4D5B5D7D7F5D5B3C2E4B3A2F5G4H5F3F3D5D1F3H7G6B1C2A2B3C2D1B3C4C8D7F1E2F3G4E2D3G4H5G6F5H3G4D3C2G4E6C2B1A8B7H1G2E6F5B1A2F5E4D5C6B7D5C4E6E6C8D1E2A2B1E2F1G2F3E4G2B1C2H5G6C8D7G2F3D7C6F1G2C2D3G2H3D3C4G6F5C4D3F3E4D3C4H3G4C6B7F5E6B7C6G4F3C6B7E6D7B7C8D7C6C4B5C6D5B5A6E4D3C8D7D3C4D7C8F3E4C8B7A4B5B7A8D5C6A6B7E4D5B7A6C6D7A6B7B5C6B7C8D5E6C8B7C6D5B7A6D5E4A6B7E4F5B7A6F5G6A6B7G6H7B7A6H7G6A6B7G6F5B7A6E6D5A6B7F5E4B7A6C4B3A6B7E4D3B7A6D3C4A6B7C4B5B7A6D5C4A6B7D7C8B7A6B3A4A6B7C8A6A8B7A6C8";
    if (isReplay)
        new DisabledBoard(moveString);
    else
        new Checkers();
        // checkers takes two parameters -- player1's name and player2's name or neither. (will default to black and white)
}

function sizeWindow(){ // TODO: I want to add column adjustment for move grid in replays
    let height = window.innerHeight;
    let width = window.innerWidth;
    let factor = (height < width)?height:width;
    let tileSize = (factor*0.88)/8; 
    let boardSize = tileSize * 8 + 1;
    let containerSize = boardSize + tileSize;
    let marginGridHeight = containerSize/3
    const root = document.documentElement;
    root.style.setProperty("--tile-size", `${tileSize}px`);
    root.style.setProperty("--board-width", `${boardSize}px`);
    root.style.setProperty("--h-box-width", `${containerSize}px`);
    root.style.setProperty("--margin-height", `${containerSize}px`);
    root.style.setProperty("--margin-grid-height", `${marginGridHeight}px`);
    root.style.setProperty("--moves-sub-margin-height", `${marginGridHeight * 2}px`);
}
