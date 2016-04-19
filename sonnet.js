// 1. Copied text into HTMLS
// 2. Created Var with next from paragraph from HTML DIV
var OrgSonnetParagraph = document.getElementById('sonnet'); //Grabs div and inner
var sonnetText = OrgSonnetParagraph.innerHTML;  			//now text of paragraph
console.log("See paragraph", OrgSonnetParagraph );


// 3. Find the output starting position of Orphans

var startPos = sonnetText.indexOf("orphans");		//does not have to be a var if just conlog
console.log("Show start", startPos );


// 4. Output # of characters in sonnet paragraph
var totalChar = sonnetText.length;					//does not have to be a var if just conlog
console.log("Total Characters", totalChar );



// 5. Replace first occurance of "winter with "yuletide"
// 6. Replace all occurances of the string "the" with "a large"

UpDateSonnetText = sonnetText.replace("winter", "yuletide");		//update sonnetText var to this
UpDateSonnetText = UpDateSonnetText.replace(/ the /g, " a large ");		//update sonnetText var to this
console.log("new", sonnetText);

// 7. Set the content of sonnet div with the new string


OrgSonnetParagraph.innerHTML = UpDateSonnetText;


// OrgSonnetParagraph.innerHTML = UpDateSonnetText;
// console.log("Final Paragraph", sonnetText



