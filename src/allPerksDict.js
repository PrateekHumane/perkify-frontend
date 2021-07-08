import allPerks from "./constants";

var allPerksDict = {}


  allPerks.forEach(perk => {
      allPerksDict[perk.Name] = {"Cost": perk["Cost"], "Period" : perk["Period"]}
});

export default allPerksDict