"use strict";
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let guest = ["Rana", "Sana", "Mana", "Rani"];
const message = `I would like to invite `;
for (let i = 0; i < guest.length; i++) {
    console.log(`You're Invited To a Dinner,` + guest[i]);
}
;
