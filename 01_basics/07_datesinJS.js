// ******************* DATES *******************

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());  
// console.log(myDate.toTimeString());

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate);

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());
// console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long"
})


// NOTES: Dates in JavaScript *******************
//
// CREATING DATES:
// ┌────────────────────────────────────────────────────────────────────────┐
// │   new Date()                    │   Current date and time              │
// │   new Date(year, month, day)    │   Specific date (month is 0-indexed!)│
// │   new Date(year, month, day, hr, min, sec)  │   With time              │
// │   new Date("01-14-2023")        │   From string (MM-DD-YYYY)           │
// │   new Date("2023-01-14")        │   ISO format (YYYY-MM-DD)            │
// │   new Date(milliseconds)        │   From timestamp                     │
// └────────────────────────────────────────────────────────────────────────┘
//
// ⚠️ IMPORTANT: Months are 0-INDEXED!
// January = 0, February = 1, ... December = 11
// new Date(2023, 0, 23) → January 23, 2023 (NOT month 0!)
//
//
// DATE OUTPUT METHODS:
// ┌─────────────────────────┬──────────────────────────────────────────────┐
// │   Method                │   Example Output                             │
// ├─────────────────────────┼──────────────────────────────────────────────┤
// │   .toString()           │   "Sat Jan 04 2026 10:30:00 GMT+0530"        │
// │   .toDateString()       │   "Sat Jan 04 2026"                          │
// │   .toTimeString()       │   "10:30:00 GMT+0530"                        │
// │   .toISOString()        │   "2026-01-04T05:00:00.000Z"                 │
// │   .toLocaleString()     │   "1/4/2026, 10:30:00 AM" (locale-based)     │
// │   .toLocaleDateString() │   "1/4/2026"                                 │
// │   .toLocaleTimeString() │   "10:30:00 AM"                              │
// └─────────────────────────┴──────────────────────────────────────────────┘
//
//
// GETTER METHODS:
// ┌─────────────────────────┬──────────────────────────────────────────────┐
// │   Method                │   Returns                                    │
// ├─────────────────────────┼──────────────────────────────────────────────┤
// │   .getFullYear()        │   Year (4 digits)                            │
// │   .getMonth()           │   Month (0-11) ⚠️ Add +1 for actual month!   
// │   .getDate()            │   Day of month (1-31)                        │
// │   .getDay()             │   Day of week (0-6, Sunday = 0)              │
// │   .getHours()           │   Hours (0-23)                               │
// │   .getMinutes()         │   Minutes (0-59)                             │
// │   .getSeconds()         │   Seconds (0-59)                             │
// │   .getTime()            │   Milliseconds since Jan 1, 1970 (timestamp) │
// └─────────────────────────┴──────────────────────────────────────────────┘
//
//
// TIMESTAMPS:
// Date.now()              → Current timestamp in milliseconds
// myDate.getTime()        → Timestamp of specific date
// Math.floor(Date.now()/1000) → Timestamp in SECONDS (Unix timestamp)
//
//
// FORMATTING WITH toLocaleString():
// newDate.toLocaleString('default', {
//     weekday: "long",    // "Monday", "Tuesday"... (or "short" → "Mon")
//     year: "numeric",    // "2026"
//     month: "long",      // "January" (or "short" → "Jan", "numeric" → "1")
//     day: "numeric",     // "4"
//     hour: "2-digit",    // "10"
//     minute: "2-digit"   // "30"
// })
//
// Locale examples:
// 'en-US' → American format (1/4/2026)
// 'en-IN' → Indian format (4/1/2026)
// 'en-GB' → British format (04/01/2026)
//
//
// QUICK TIPS:
// - getMonth() + 1 = actual month number
// - getDay() returns day of WEEK (not date!)
// - getDate() returns day of MONTH
// - Use Date.now() for performance measurements






