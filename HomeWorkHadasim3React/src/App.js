import logo from './logo.svg';

import FullPageIntroWithFixedNavbar from './Components/MainMenu'

import './App.css'

import { MDBCard, MDBCardFooter, MDBCardImage, MDBCol, MDBRow } from 'mdbreact';
import {
  MDBCardText,
  MDBCardBody,
  MDBCardTitle
} from 'mdb-react-ui-kit';

function App() {
  return (


    <div className="App">
      <header className="App-header">

        {/* <UI></UI> */}
        <FullPageIntroWithFixedNavbar></FullPageIntroWithFixedNavbar>
        {/* <ProfilePage></ProfilePage>  */}
        {/* <MyUsers></MyUsers> */}
        {/* <SignUp></SignUp>   */}
        {/* <NavBar></NavBar> */}
        {/* <MemberDetails></MemberDetails>  */}
        {/* <ChartsPage></ChartsPage>
<button onClick={()=>GetCountNotV()}>לקבלת כל המשתמשים שאינןם מחוסנים לחץ כאן</button> */}
        {/* <UploadImage></UploadImage> */}
      </header>
     {/* {window.location.href==="http://localhost:3000/"&& */}
     
     
      <main style={{margin: "20px auto"}} >
        <MDBCard className='col-11 bg-light'>
          <MDBRow className='g-0'>
            <MDBCardBody>
              <MDBCardTitle  > 
                <strong>
                מגיפת הקורונה
                </strong>
                </MDBCardTitle>
              <MDBCardText>
                מגפת הקורונה הייתה מגפה עולמית מתמשכת של מחלת נגיף הקורונה. במגפה נדבקו מעל מיליארד בני אדם, מתוכם כ-680 מיליון מאומתים, ומתו לפחות 6.7 מיליון, אם כי על פי הערכות שונות מספר הנדבקים והמתים גבוה בהרבה.מקורו המדויק של הנגיף, מזן SARS-CoV-2, אינו ידוע. על פי ההערכה הראשונית, הוא עבר מבעלי חיים נגועים לאדם,ולפי הערכה אחרת, הוא דלף ממעבדה בסין שבה הונדס. ההתפרצות הראשונה החלה בווהאן שבמחוז חוביי שבסין, ב-17 בנובמבר 2019. באמצע פברואר 2020 החלה מגפת הקורונה להתפשט במהירות בכל רחבי העולם. לפי הערכת ארגון הבריאות העולמי, בין ינואר 2020 לסוף 2021, מתו בין 13.3 מיליון ל-16.6 מיליון אנשים ממחלת הקורונה ישירות או כתוצאה מהשפעת המגפה על תפקוד מערכות בריאות.
              </MDBCardText>
              <MDBCardText>
                התפשטות המגפה והמחלה בעולם עוררה בהלה, מלוּוה במשבר כלכלי משמעותי ובנפילה חדה של הבורסות בעולם בחודש מרץ 2020. בנוסף, קרסו מחירי הנפט ברחבי העולם לרמות שפל שלא נראו בעבר.זמן קצר לאחר מכן התאוששו הבורסות והנפט ברחבי העולם וחזרו למחירים ששררו טרם המגפה ואף גבוה מכך.
              </MDBCardText>
              <MDBCardText>
                מדינות העולם הגיבו למגפה באמצעות הנחיות לשמור על ריחוק חברתי, הטלת מגבלות על תנועה והתקהלויות, הטלת סגרים ועוצרים, ביטול אירועים וסגירת כלל המוסדות הלא חיוניים. כמו כן נעשו מאמצים ממוקדים לאתר חולים ונשאים ולבודדם, למגן את צוותי הרפואה, ולהגדיל באופן מהיר את קיבולת בתי החולים, כולל בניית מסגרות אשפוז מיוחדות לחולי קורונה. במהלך המגפה היה פרק זמן שבו שליש מהאנושות – כ-2.6 מיליארד בני אדם – נדרשו להישאר בבתים בתנאי סגר.
              </MDBCardText>
              <MDBCardText>
              בספטמבר 2020 ובמהלך שנת 2021 התגלו עשרות מוטציות בנגיף הקורונה שהשפיעו על התפרצויות חדשות של המחלה ברחבי העולם. בסוף שנת 2020 החל מתן חיסון המוני נגד הנגיף לאוכלוסיית העולם.
              </MDBCardText>
              <MDBCardText>
              ב-5 במאי 2023 הודיע ארגון הבריאות העולמי כי מגפת הקורונה כבר אינה מצב חירום עולמי, בשל ירידת שיעור התמותה העולמי מהמחלה לכ-3,500 בני אדם בשבוע בחודש הקודם.
              </MDBCardText>
              <MDBCardText>
                <small className='text-muted'> @ made  by YIRAT AMRAM </small>
              </MDBCardText>
            </MDBCardBody>
            <MDBCardFooter>
              <MDBCardImage src='https://assets.publishing.service.gov.uk/government/uploads/system/uploads/image_data/file/177969/Figure_3.png' className='mt-5'style={{width:"70%",margin:"0px auto"}}></MDBCardImage>
            </MDBCardFooter>
          </MDBRow>
        </MDBCard>

      </main>
{/* } */}
    </div>

  );
}

export default App;
