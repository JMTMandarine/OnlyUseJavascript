1) git 리파지토리 생성 후 clone
$ git clone 클론URL

2) 자바 프로젝트 디렉토리 구성하기
$ gradle init --type java-application

3) Gradle 설정 파일에 'eclipse' 플러그인 추가
build.gradle 파일에 id 'eclipse' 추가

4) 이클립스 설정 파일 생성
$ gradle eclipse

5) 이클립스에서 프로젝트를 임포트