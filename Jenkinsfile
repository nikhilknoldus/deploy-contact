pipeline {
   agent any
   
     environment {
        GIT_REPO_PATH = 'https://github.com/nikhilknoldus/deploy-contact'
    }
   
   stages {
    stage('git clone') {
        steps {
            git credentialsId: 'gitrepo', url: "${GIT_REPO_PATH}"
        }
    }

     stage('create docker image') {
         steps {
            sh 'docker build -t a1 .'
         }
    }

    stage('docker run') {
        steps {          
            sh 'docker run -d -p 3000:3000 a1'
        }
    }
 }
}

