// import React from 'react';
// import './myStyle.css'
// import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView } from 'mdbreact';
// import { useSelector } from 'react-redux';
// export default function Home(){
//   let calculatin= useSelector((store) => {return store.ProfileCalculations.ProfileCalculations }); 
// console.log("calculatin")
// console.log(calculatin)

//     return(
//         <div className='home'>
//         <h1><strong></strong></h1>
//           <p>בישראל מאושרים לשימוש תרכיבי חיסונים להגנה מפני נגיף הקורונה של ארבע חברות: פייזר, מודרנה, אסטרהזניקה ונובהווקס. כל החיסונים הללו אושרו על ידי ה-FDA (מנהל התרופות והמזון האמריקאי) לאחר שנמצאו יעילים ובטוחים לשימוש.
// למידע עדכני על מספר המתחסנים בישראל >

// למידע נוסף על סוגי החיסונים ואיך הם פועלים >

// איפה מתחסנים
// החיסונים יינתנו במרפאות קופות החולים. כדאי להתעדכן מול קופת החולים שלך באילו מרפאות אפשר לקבל את החיסון ולתאם תור מראש.

// מי שאין להם קופת חולים – יפנו למוקד קול הבריאות בטלפון 5400*.

// מידע על חיסונים בקופות החולים
// שירותי בריאות כללית >
// מכבי >
// מאוחדת >
// לאומית >

// מי יכולים לקבל חיסון
// אזרחי ישראל מגיל חצי שנה ומעלה יכולים להתחסן נגד נגיף הקורונה.
// מידע על חיסונים מגיל חצי שנה עד גיל 5 >

// מידע על חיסונים לילדים ונוער בגיל 18-5 >

// גם מי שהחלימו מקורונה יוכלו להתחסן, אם חלפו לפחות 3 חודשים ממועד ההחלמה, או אם קיבלו תוצאה חיובית בבדיקה סרולוגית.
// פעוטות מגיל חצי שנה עד גיל 5 יוכלו להתחסן בלי קשר להחלמה.
// כמה מנות חיסון מקבלים
// החיסון של פייזר:
// מגיל 12 ומעלה – החיסון ניתן בשתי מנות במרווח של 21 ימים זו מזו, ומנת דחף (בוסטר) הניתנת 3 חודשים לפחות לאחר קבלת המנה השנייה.

// החיסון של מודרנה:
// מגיל 18 ומעלה – החיסון ניתן בשתי מנות במרווח של 28 ימים זו מזו, ומנת דחף (בוסטר) הניתנת 3 חודשים לפחות לאחר קבלת המנה השנייה.

// החיסון של אסטרהזניקה:
// מגיל 18 ומעלה – החיסון ניתן בשתי מנות במרווח של 28 ימים זו מזו. עדיין אין אישור למנת דחף.

// החיסון הסביל של אסטרהזניקה:
// מדוכאי חיסון מגיל 12 ומעלה – שתי זריקות הניתנות בזו אחר זו.

// למידע על מספר מנות החיסון לפעוטות מגיל חצי שנה עד גיל 5 >

// למידע על מספר מנות החיסון לילדים ונוער בגיל 18-5 >

// החיסון של נובהווקס:
// מגיל 12 ומעלה – החיסון ניתן בשתי מנות במרווח של 21 ימים זו מזו. חיסון זה יכול להינתן כמנת דחף למי שקיבלו שתיים או שלוש מנות מחיסון מסוג שאינו נובהווקס. לגבי מי שקיבלו שתי מנות של חיסון נובהווקס – עדיין אין החלטה בנוגע למתן מנה שלישית של נובהווקס.

// חיסון חדש המותאם לזני האומיקרון
// קופות החולים יתחילו לחסן בימים הקרובים בחיסון נגד קורונה המותאם לזני האומיקרון. החיסון החדש, של חברת פייזר, צפוי לתת הגנה רחבה יותר, וייתכן שלמשך זמן ארוך יותר, מפני זנים אלה.

// החיסון יינתן מגיל 12 ומעלה במקרים הבאים:

// מי שחוסנו ב-2 מנות חיסון או יותר של הזן המקורי, ועברו לפחות 3 חודשים ממועד קבלת מנת החיסון האחרונה.
// מי שהחלימו מקורונה ועברו לפחות 3 חודשים ממועד ההחלמה.
// מי שהחלימו מקורונה וקיבלו בעבר חיסונים, ועברו לפחות 3 חודשים ממועד קבלת מנת החיסון האחרונה או ממועד ההחלמה.
// שימו לב, לא קיים חיסון משולב נגד קורונה ושפעת, אלא מדובר בשני חיסונים שונים. יחד עם זאת, אפשר להתחסן באותו ביקור במרפאה בשני החיסונים (קורונה ושפעת).
// למי מומלץ לקבל את החיסון החדש
// בני ובנות 65 ומעלה
// מי שבקבוצות סיכון
// צוותים רפואיים
// מטופלים ועובדים במוסדות מגן אבות
// מטופלים ועובדים במוסדות משרד הרווחה
// מטפלים באנשים מקבוצות סיכון
// תופעות הלוואי של החיסון
// תופעות הלוואי השכיחות של חיסון נגד קורונה מופיעות לרוב יום או יומיים אחרי קבלת החיסון. התופעות השכיחות הן כאב מקומי באזור ההזרקה, חום, כאב ראש, כאבי שרירים וצמרמורת.

// לדיווח על תופעות לוואי 

// בכל מקרה, אין סיכוי לחלות בקורונה בגלל החיסון. החיסונים של פייזר ומודרנה כלל לא מכילים את נגיף הקורונה או חלק ממנו. החיסון של אסטרהזניקה מכיל חלק מחלבוני הנגיף הנישאים על גבי וירוס בלתי מזיק אחר, ולכן הוא לא יכול לגרום למחלה.</p>
//         </div>
//     )
// }