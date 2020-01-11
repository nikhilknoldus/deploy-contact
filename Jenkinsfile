pipeline {
   agent any
    
   stages {
    stage('git clone') {
        steps {
            git 'https://github.com/nikhilknoldus/deploy-contact'
        }
    }

     stage('create docker image') {
         steps {
            sh 'sudo docker build -t a1 .'
         }
    }

    stage('docker run') {
        steps {          
            sh 'sudo docker run -d -p 3000:3000 a1'
        }
    }
 }
}

