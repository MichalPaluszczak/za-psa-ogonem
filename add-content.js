var today = new Date();
var hourNow = today.getHours();
var greetings;

if(hourNow > 18)
{
    greeting = 'Dobry wieczór !';
}
else if (hourNow > 12)
{
    greeting = 'Dzień dobry !';
}
else if (hourNow > 0)
{
    greeting = 'Dzień dobry !';
}
else 
{
    greeting = 'Witam serdecznie';
}
document.write(greeting);