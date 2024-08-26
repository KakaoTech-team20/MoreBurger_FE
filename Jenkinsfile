pipeline {
    agent any

    environment {
        REPO = 'KakaoTech-team20/MoreBurger_FE'
        S3_BUCKET = 's3://kakao-moreburger-front-test'
        AWS_CREDENTIALS_ID = 'S3_IAM_Front'
    }

    stages {
        stage('Checkout') {
            steps {
                // GitHub에서 소스 코드를 가져옴
                git branch: 'main', url: "https://github.com/${REPO}.git", credentialsId: 'Github_access_key'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Yarn을 사용해 의존성 설치
                    sh 'yarn install'
                }
            }
        }

        
        stage('Build') {
            steps {
                script {
                    // Yarn을 사용해 프로젝트 빌드
                    sh 'yarn build'
                    sh 'ls -al'
                }
            }
        }

        stage('Deploy to S3') {
            steps {
                withCredentials([[$class: 'AmazonWebServicesCredentialsBinding', credentialsId: AWS_CREDENTIALS_ID]]) {
                    script {
                        // 빌드된 파일을 S3 버킷에 업로드
                        sh '''
                        aws s3 sync dist/ s3://kakao-moreburger-front-test --delete
                        '''
                    }
                }
            }
        }
    }

    post {
        always {
            // 빌드 후 클린업 작업 (필요한 경우)
            cleanWs()
        }
    }
}
