export function getSecondsFromTimeString(durationString: string){
    const splitString = durationString.split(":")
    return (+splitString[0]) * 60 * 60 + (+splitString[1]) * 60 + (+splitString[2]);
}
