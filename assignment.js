// https://github.com/immanual19/assignment3

// No.1 starts here

//Negative and illegal numbers will be counted as invalid.
function kilometerToMeter(kilometer){
    if(kilometer>=0)
    {
        return kilometer*1000;
    }
    else
    {
        //In case of Negative value passed into the function
        return "Invalid Input. Try a Positive number or even a Zero(0).";
    }
}
console.log((kilometerToMeter(5.5)));
// No.1 ends here



//// No.2 starts here

// Inputting Negative numbers, fractions, Zero will cause error.
// For a valid result, all parameters must be greater than Zero (0) and Integer.

function budgetCalculator(numberOfWatches, numberOfPhones, numberOfLaptops){
    var totalBudget=0;
    var flag=0;
    if(numberOfWatches>0)
    {
        if(Math.round(numberOfWatches)==numberOfWatches)
        {
            totalBudget=totalBudget+(numberOfWatches*50);
            flag++;
        }
        else
        {
            console.log("Number of watches can not be a fraction.");
        }
    }
    else
    {
        console.log("Number of watches can not be a negative number or Zero(0).");
    }
    if(numberOfPhones>0)
    {
        if(Math.round(numberOfPhones)==numberOfPhones)
        {
            totalBudget=totalBudget+(numberOfPhones*100);
            flag++;
        }
        else
        {
            console.log("Number of Phones can not be a fraction.");
        }
    }
    else
    {
        console.log("Number of Phones can not be a negative number or Zero(0).");
    }
    if(numberOfLaptops>0)
    {
        if(Math.round(numberOfLaptops)==numberOfLaptops)
        {
            totalBudget=totalBudget+(numberOfLaptops*500);
            flag++;
        }
        else
        {
            console.log("Number of Laptops can not be a fraction.");
        }
    }
    else
    {
        console.log("Number of Laptops can not be a negative number or Zero(0).");
    }
    
    if(flag==3)
    {
        return totalBudget;
    }
    else
    {
        return "All three inputs must be valid.";
    }
}

console.log(budgetCalculator(10,5,1));
//No.2 ends here



//No.3 starts here
// Parameter can not be negative, fraction or illegal number.
// Must input positive integer (including Zero(0)) to get valid result
function hotelCost(totalDays)
{
    var remainingDays;
    var totalCost;

    if(totalDays<0)
    {
        return "Number of days can not be negative.";
    }
    if(Math.round(totalDays)!=totalDays)
    {
        return "Number of Days can not be a fraction or illegal number.";
    }
    if(totalDays<=10)
    {
        totalCost=totalDays*100;
        return totalCost;
    }
    else if(totalDays<=20)
    {
        remainingDays=totalDays-10;
        totalCost=(10*100)+(remainingDays*80);
        return totalCost;
    }
    else{
        remainingDays=totalDays-20;
        totalCost=(10*100)+(10*80)+(remainingDays*50);
        return totalCost;
    }
}
console.log(hotelCost(18));

//No.3 ends here



//No.4 starts here

// Rules
// 1. If two or more or all the names are of same size
// the function will randomly return a name of biggest length.
// 2. If any name contains anything other than 26 English alphabet it will be disqualified.
// 3. This program will work even if a name has two parts and is separated by space. Extra spaces won't be counted.

function megaFriend(friendsNamelist){
    var friendsNamelistFiltered=[];
    var onlyBiggestFriendNameList=[];
    var bigNameLength=0;

    if(friendsNamelist.length==0)
    {
        return "The array is empty.";
    }

    // Garbage values/names removing starts here. 
    for(var i=0;i<friendsNamelist.length;i++)
    {
        var flag=0;
        var friendName=friendsNamelist[i];
        for(var j=0;j<friendName.length;j++)
        {
            if((friendName[j]<'a' || friendName[j]>'z') && (friendName[j]<'A' || friendName[j]>'Z') &&friendName[j]!=" ")
            {
                flag=1;
            }
        }

        if(flag==0 && friendName!="")
        {
            friendsNamelistFiltered.push(friendsNamelist[i].trim().replace(/\s+/g, ' '));
        }
        
    }

    // Garbage values/names removing ends here. 


    // Finding the length of biggest name(s) starts here 
    for(var i=0;i<friendsNamelistFiltered.length;i++)
        {
            if(bigNameLength<=friendsNamelistFiltered[i].length)
                {
                    bigNameLength=friendsNamelistFiltered[i].length;
                }
        }

    // Finding the length of biggest name(s) ends here

    //All the names with biggest length will be inserted to "onlyBiggestFriendNameList" array
    for(var i=0;i<friendsNamelistFiltered.length;i++)
    {
        if(friendsNamelistFiltered[i].length==bigNameLength)
        {
            onlyBiggestFriendNameList.push(friendsNamelistFiltered[i]);
        }
    }

    //Now "onlyBiggestFriendNameList" array has names which are bigger than all other.


    //If the input contains more than one bigFriend. It will randomly return a value.
    //If the input contains only one bigFriend. No problem. It will be returned.
    return onlyBiggestFriendNameList[Math.floor(Math.random()*onlyBiggestFriendNameList.length)];

}

friendsNamelist=["Abdul","","    ","98Kabul","Jamal","0Dhamaal","Kamaal khan","Akhtaruzzaman Khan"];

console.log(megaFriend(friendsNamelist));

//No.4 Ends here