pipeline {
    agent any
    environment {
        NODE_VERSION = '20-alpine'
    }
    stages {
        stage('Checkout SCM') {
            steps {
                checkout scm
            }
        }
        stage('Clean Install') {
            steps {
                script {
                    // Ensure a clean workspace
                    sh 'rm -rf node_modules package-lock.json'
                    sh 'npm install --fetch-retries=5 --fetch-retry-factor=2 --fetch-retry-mintimeout=10000'
                }
            }
        }
        stage('Build') {
            steps {
                script {
                    // Use correct Node version
                    sh 'docker pull node:${NODE_VERSION}'
                    sh 'docker run -t -d -u 992:992 -w "/var/lib/jenkins/workspace/React CI CD Pipeline" node:${NODE_VERSION} npm run build'
                }
            }
        }
    }
}
