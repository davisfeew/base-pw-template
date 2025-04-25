pipeline {
    agent any
    environment {
        CI = 'true'
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install dependencies') {
            steps {
                sh 'npm ci'
            }
        }
        stage('Frontend (Playwright) Tests') {
            steps {
                sh 'npm run fe:parallel:test'
            }
            post {
                always {
                    archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
                }
            }
        }
        stage('API (Mocha) Tests') {
            steps {
                sh 'npm run api:test'
            }
            post {
                always {
                    archiveArtifacts artifacts: 'reports/**/*', allowEmptyArchive: true
                }
            }
        }
    }
    post {
        success {
            echo 'Test success.'
        }
        failure {
            echo 'Test failure.'
        }
    }
}
