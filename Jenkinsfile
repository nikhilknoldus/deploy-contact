node{
stage('SCM Checkout'){
git 'https://github.com/nikhilknoldus/deploy-contact'
}
stage('install packages'){
sh 'nvm install node | npm install'
}
stage('build project'){
sh 'npm start'
}
}
