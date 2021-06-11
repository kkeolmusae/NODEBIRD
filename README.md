# NodeBird 프로젝트 
-> Node.js 교과서의 9장에 나오는 SNS 서비스 만들기 실습

### package.json
```
"dependencies": {
    "bcrypt": "^5.0.1",
    "cookie-parser": "^1.4.5",
    "dotenv": "^10.0.0",
    "express": "^4.17.1",
    "express-session": "^1.17.2",
    "morgan": "^1.10.0",
    "multer": "^1.4.2",
    "mysql2": "^2.2.5",                 MySQL과 시퀼라이즈를 이어주는 드라이버 (DB아님)
    "nunjucks": "^3.2.3",               템플릿 엔진의 일종. 다른 템플릿 엔진으로 퍼그 등이 있음.
    "passport": "^0.4.1",
    "passport-kakao": "^1.0.1",
    "passport-local": "^1.0.0",
    "sequelize": "^6.6.2",              MySQL 작업을 쉽게할 수 있도록 도와주는 라이브러리
    "sequelize-cli": "^6.2.0"           시퀼라이즈 명령어를 실행하기 위한 패키지
  },
"devDependencies": {
    "nodemon": "^2.0.7"
  }
```
<br>

### app.js
express 서버 코드가 담김
<br><br>

### .gitignore
git에 올릴 때 제외할 파일들을 넣어놓음
<br><br>

### .env
설정값들을 넣어놓음
<br><br>

## /node_modules
<br><br>

## /config 
MySQL DB 접속 정보가 있음(실무에서는 이것도 .env에 넣던데)
<br><br>

## /migrations
<br><br>

## /models
<div>
index.js, user.js , post.js , hashtag.js 로 구성됨 <br>
user, post, hashtag 각각 DB 테이블을 위함.
</div>
<div>
user.js 에서 provider 와 snsId는 SNS로그인(카카오연동)을 했을 경우에 저장.
</div>
<div>
provier가 local이면 로컬 로그인, kakao면 카카오 로그인 (default = local)
</div>
<div>
hashtag.js 로 해시태그 모델을 따로 만든 이유는 태그로 검색을 하기 위함.
</div>
<br><br>


## /passport
index.js, kakaoStrategy.js, localStrategy.js 로 구성됨 <br>
passport는 로그인 과정을 어떻게 처리할지 설명하는 파일이라고 생각하면 쉬움.
<br><br>

## /public
공용으로 사용될 css 저장해놓음
<br><br>

## /routes
라우터 모음
<br><br>

## /views
html 코드 모음
<br><br>

## /seeders
ㅡ
<br><br>

## /uploads
업로드된 파일들 모음
<br><br><br><br>

## 추가 작업
- 팔로잉 끊기 (Sequilize의 destroy 메서드와 라우터 활용)
- 프로필 정보 변경하기(Sequilize의 update 메서드와 라우터 활용)
- 게시글 좋아요 누르기 및 좋아요 취소하기(사용자-게시글 모델 간 N:M 관계 정립 후 라우터 활용)
- 게시글 삭제하기 (등록자와 현재 로그인한 사용자가 같을 때, Sequilize의 destory 메서드와 라우터 활용)
- 매번 DB를 조회하지 않도록 deserializeUser 캐싱하기 (객체 선언 후 객체에 사용자 정보 저장, 객체 안에 캐싱된 값이 있으면 조회)