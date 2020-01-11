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
            sh 'suo docker build -t a1 .'
         }
    }

    stage('docker run') {
        steps {          
            sh 'sudo docker run -d -p 3000:3000 a1'
        }
    }
 }
}

