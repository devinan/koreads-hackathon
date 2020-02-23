# koreads-v4

> 📝 GoodReads Clone

---

<h3> Categories</h3>

- [koreads-v4](#koreads-v4)
    - [NomadCoders Hackaton](#nomadcoders-hackaton)
    - [Goal](#goal)
    - [Requirements](#requirements)
    - [Langauages](#langauages)
  - [Main Users: Korean](#main-users-korean)
  - [Feature](#feature)
    - [Will update later](#will-update-later)
      - [version 0.0.1](#version-001)

---

### NomadCoders Hackaton

- [Join Now](https://hackathon.nomadcoders.co/)

### Goal

- Make _Goodreads_ Clone (**Korea Style**)

### Requirements

- Log In/Sign Up
- List
- Search
- Detail Page
- Add New
- Rate or Review
- Want to Read
- Profile Page

### Langauages

- **Front-end**: React, Vue or Server Side Rendering
- **Back-end**: NodeJS or Python.

---

## Main Users: Korean

## Feature

- Log In/Sign Up (로그인 / 회원가입 기능구현)
- \*! if User Login ==> \*\*Log Out\*\*

---

- Social Login (소셜로그인 기능) ---> passport.js
  - KaKaoTalk Login ---> kakao Dev
  - Facebook Login --> api

---

- **! List** (책 리스트 구현) : 중복 모델 사용

  - book img --> coupang api
  - book title
  - book author
  - book publisher
  - book Publish year
  - book status
    - Want to Read / Reading / Already read
      - --> Btn (select: blue non-select: white): change able

---

- Book Detail
  - book img --> coupang api
  - book title
  - book subtitle (required="false" )
  - book status
    - Want to Read / Reading / Already read
      - --> Btn (select: blue non-select: white): change able
    - Rating
  - Rating List
    - Follower Rating
    - Public Rating
    - library(교보문고, 알라딘, 쿠팡...) Rating
  - Recommend **Post Search(User name)**
    - Total : Number
      - link(User List)
        - Profile img
        - User name
        - Follow Button
  - **KoReaders** SNS (like instagram) (privacy)
    - (My/public ==> Essay or Story)
  - Book Info
    - API
    - Store link
  - Book Category
  - Book description ---> coupang api
  - Book description by Author ---> 중앙도서관 api
  - Author description ---> 중앙도서관 api

---

- Recommend Admin Pick List (추천글 기능: public)
  - defalut: admin pick

---

- Story Upload (privacy)
  - img O
    - book O (tage)
      - public/privacy/follower -----> public && privacy (exp: follower)
        - page
        - context
    - book X (tage)
      - public/privacy/follower -----> public && privacy (exp: follower)
        - page
        - context
  - img X
    - book O (tage)
      - public/privacy/follower -----> public && privacy (exp: follower)
        - page
        - context
    - book X (tage)
      - public/privacy/follower -----> public && privacy
        - page
        - context

---

- Essay Upload (privacy)
  - img X
    - book O (tage)
      - public/privacy/follower -----> public && privacy
        - title
        - context

---

- Search (검색기능) (public)
  - total --> List
  - book --> List
  - groupe (keyward)
  - story --> **?** SNS (like instagram) (privacy)
    - (Story or Essay Upload context)
  - user name ---> **Post Search(User name)**
    - X Follow Button

---

- **?** SNS (like instagram) (privacy)

  - follower
    - default: admin feed
    - feed
  - public
    - feed
  - recommend
    - User Top Rating feed (admin pick)

- SNS feature (public)
  - Like
  - comment
  - book mark

---

- Book Mark Detail
  - **! List** (책 리스트 구현) : 중복 모델 사용
    - X book status: bookmark delete
    - Add my feed Number
      - logic: link Book Mark Detail --> Get My Feed
    - feature: 단어별 정렬기능

---

- group (like facebook group)

  - group SNS (privacy)
    - feed
    - comments
    - like
    - book mark
  - group Join
  - group Delete

---

- group Join

  - ???(Will Update later)

- grup Delete
  - ???(Will Update later)

---

- User Detail (privacy)
  - Friend Search (facebook/kakaotalk api)
  - follower/ followering number
  - **! if Get Other User Detail ==> Follow Button**
  - User name
  - Profile img
  - List View (number)
    - book
    - collections
    - story (Story Upload context)
    - Essay (Essay Upload context)
    - book mark
  - User Read Field (view)
    - User name
    - circle graph = Book Keywords Logic (if: book number > 5)
  - `new Date().getFullYear()` READING CHALLENGE
    - I want to read (**number**) : defalut: 0
  - `new Date().getFullYear()` Record number of books read
    - Monthly history graph (number)
  - Read Calender
    - book name
  - Want Book List
    - Want Book Button
      - logic
        - Get Search
        - Post Search
        - Get Book Detail
        - Post Book Detail
        - Post User Detail > List View > book
        - get User Detail
    - Book image (view)

---

- Setting

  - Account
    - Default Profile Change
      - Profile img: (default: "")
      - Display name: (default: Join value)
      - About me: (defalut: "")
      - email: kakaotalk/facebook
    - Advance Profile Change (!child public/privacy select)
      - Name: default(Join email name)
      - phone: default(default:"")
      - Date of Birth: year (default: "")
      - Gender(select)
        - F/M (default: "")
      - My interest(select)
        - AI
        - Art
        - Child Care
        - Communication
        - Computer
        - Cooking
        - Data analysis
        - Design
        - Diet
        - Economy / Management
        - Education
        - English
        - Essay
        - Exercise / Leisure
        - Financial Technology
        - habit
        - Health
        - Hobby
        - Humanities
        - Language
        - Literature
        - Marketing
        - Marriage
        - Music
        - Parenting
        - Pet
        - poem
        - Real Estate
        - Self Development
        - Science
        - Society / Politics
        - Startup
        - Travel
        - ect (기타)
    - Delete Account
      - use again ? prompt("thank you") : Delete Account
  - Notification settings (select)
    - sns feature (yes/no)
  - 1 : 1 Talk (고객센터)
    - 24hours...
    - Call Button (post admin email)
  - Find User
    - Search
      - logic: **Post Search(User name)** -> Get User Detail (if User Public setting Ok!)
  - Update Request
    - Udate request Title & Context
    - Request List
    - Updating List
    - Updated List
    - Request Button
  - Legal Notice
  - **Log Out**

---

### Will update later

#### version 0.0.1

- Log In/Sign Up (로그인 / 회원가입 기능구현)
- Social Login (소셜로그인 기능)
- List
- Recommend Admin Pick List (추천글 기능: public)
- SNS (like instagram) (privacy)
- Search (검색기능) (public)
- group (like facebook group)
- User Page
- Setting
